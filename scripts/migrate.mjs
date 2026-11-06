/** One-time conversion: original content becomes real, editable React JSX. */
import fs from 'node:fs';
import {parse} from 'parse5';
const assetMap=JSON.parse(fs.readFileSync('reference/asset-map.json'));
const origin='https://hima-elektro.de/';
const routes=['home','ueber-uns','referenzen','kontakt','jobs','bewerbung','impressum-datenschutzerklaerung','cookie-richtlinie-eu'];
const find=(n,p)=>p(n)?n:(n.childNodes??[]).map(x=>find(x,p)).find(Boolean);
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const camel=s=>s.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
function url(u){if(!u)return u;let abs=new URL(u,origin);if(assetMap[abs.href])return assetMap[abs.href];if(abs.origin===new URL(origin).origin)return abs.pathname+abs.search+abs.hash;return u;}
const names={'class':'className','for':'htmlFor','tabindex':'tabIndex','srcset':'srcSet','crossorigin':'crossOrigin','frameborder':'frameBorder','allowfullscreen':'allowFullScreen','datetime':'dateTime','viewbox':'viewBox','stroke-width':'strokeWidth','stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin','fill-rule':'fillRule','clip-rule':'clipRule','maxlength':'maxLength','readonly':'readOnly'};
const voids=new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
function jsx(n,depth=0){
 if(n.nodeName==='#text'){let s=n.value.replace(/\s+/g,' ');return s.trim()?JSON.stringify(s):null;}
 if(!n.tagName)return null;
 const tag=n.tagName;
 if(['script','template','noscript'].includes(tag))return tag==='script'&&text(n).includes('new Date')?'{new Date().getFullYear()}':null;
 if(attr(n,'uk-map')!==undefined)return '<LocationMap />';
 if(attr(n,'uk-icon')!==undefined)return '<ArrowRight />';
 if(tag==='p' && text(n).includes('[gravityform'))return '<ContactForm application={'+(text(n).includes('2')?'true':'false')+'} />';
 let attrs=[];
 for(let {name,value} of n.attrs??[]){
  if(name.startsWith('uk-')||name.startsWith('on')||name==='data-map-consent')continue;
  if(name==='href'||name==='src')value=url(value);
  if(name==='srcset')value=value.split(',').map(x=>{let [u,...tail]=x.trim().split(/\s+/);return [url(u),...tail].join(' ');}).join(', ');
  if(name==='style'){
   const obj={};for(let decl of value.split(';')){let idx=decl.indexOf(':');if(idx>0)obj[camel(decl.slice(0,idx).trim())]=decl.slice(idx+1).trim();}
   attrs.push('style={'+JSON.stringify(obj)+'}');continue;
  }
  if(name==='alt'&&!value)value='';
  if(name==='href'&&(value==='#1'||value==='/#1'))value='#top';
  if(name==='src'&&tag==='img'&&value.endsWith('.svg')){} // native SVG images need no theme JS
  if(['disabled','required','multiple','hidden'].includes(name)){attrs.push(name+'={true}');continue;}
  attrs.push((names[name]??name)+'='+JSON.stringify(value));
 }
 let children=(n.childNodes??[]).map(x=>jsx(x,depth+1)).filter(Boolean);
 // Text nodes are expressions, preserving spaces without JSX entity ambiguity.
 children=children.map(c=>c.startsWith('"')?'{'+c+'}':c);
 const lead='  '.repeat(depth);
 return '<'+tag+(attrs.length?' '+attrs.join(' '):'')+(voids.has(tag)?' />':children.length?' >\n'+children.map(c=>lead+'  '+c).join('\n')+'\n'+lead+'</'+tag+'>':' />');
}
fs.mkdirSync('src/pages',{recursive:true});
for(const name of routes){
 const dom=parse(fs.readFileSync('reference/'+name+'.html','utf8'));
 const main=find(dom,n=>n.tagName==='main');
 const title=text(find(dom,n=>n.tagName==='title'));
 if(name==='cookie-richtlinie-eu')continue;
 fs.writeFileSync('src/pages/'+name+'.jsx',`import { ArrowRight, ContactForm, LocationMap } from '../components.jsx';\n\nexport default function Page() {\n  return (${jsx(main)});\n}\n`);
 if(name==='home'){
  const footer=find(dom,n=>n.tagName==='footer');
  fs.writeFileSync('src/Footer.jsx',`export default function Footer() {\n return (${jsx(footer)});\n}\n`);
 }
 console.log(name,title);
}
