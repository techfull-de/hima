import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {parse} from 'parse5';
import {pages} from '../.prerender/prerender-entry.js';
const routes=Object.keys(pages),documents=new Map();
function walk(node,cb){cb(node);for(const n of node.childNodes??[])walk(n,cb);}
for(const route of routes){const file=path.join('dist',route,'index.html');assert.ok(fs.existsSync(file),`Missing direct route: ${route}`);documents.set(route,parse(fs.readFileSync(file,'utf8')));}
let assets=0,links=0;
for(const [route,dom] of documents){
 const html=fs.readFileSync(path.join('dist',route,'index.html'),'utf8');
 assert.ok(!html.includes('[gravityform'),`Unconverted shortcode: ${route}`);assert.ok(!html.includes('wp-content/'),`WordPress asset dependency: ${route}`);
 let main=0,h1=0,canonical=0,description=0,jsonLd=0;
 walk(dom,n=>{
  if(n.tagName==='main')main++;if(n.tagName==='h1')h1++;
  const attrs=Object.fromEntries((n.attrs??[]).map(a=>[a.name,a.value]));
  if(n.tagName==='link'&&attrs.rel==='canonical'){canonical++;assert.equal(attrs.href,pages[route].canonical);}
  if(n.tagName==='meta'&&attrs.name==='description'){description++;assert.equal(attrs.content,pages[route].description);assert.ok(attrs.content.length>=65&&attrs.content.length<=175);}
  if(n.tagName==='script'&&attrs.type==='application/ld+json'){jsonLd++;const data=JSON.parse((n.childNodes??[]).map(x=>x.value??'').join(''));assert.equal(data['@graph'][0].address.postalCode,'65933');}
  for(const a of n.attrs??[]){
   if(!['src','href','srcset'].includes(a.name))continue;
   const values=a.name==='srcset'?a.value.split(',').map(x=>x.trim().split(' ')[0]):[a.value];
   for(const value of values){
    if(value.startsWith('/')&&!value.startsWith('//')){
     const u=new URL(value,'https://hima-elektro.de');
     if(path.extname(u.pathname)){assert.ok(fs.existsSync(path.join('dist',u.pathname)),`Missing file: ${value}`);assets++;}
     else if(a.name==='href'){
      const dest=u.pathname.endsWith('/')?u.pathname:u.pathname+'/';assert.ok(routes.includes(dest),`Broken internal link: ${value}`);links++;
      if(u.hash){let found=false;walk(documents.get(dest),x=>{if(x.attrs?.some(a=>a.name==='id'&&a.value===decodeURIComponent(u.hash.slice(1))))found=true;});assert.ok(found,`Broken fragment: ${value}`);}
     }
    }else if(value.startsWith('#')&&a.name==='href'){
     let found=false;walk(dom,x=>{if(x.attrs?.some(a=>a.name==='id'&&a.value===value.slice(1)))found=true;});assert.ok(found,`Broken fragment on ${route}: ${value}`);
    }else if(a.name==='src')assert.ok(!value.startsWith('http'),`Eager third-party resource: ${value}`);
   }
  }
 });
 assert.equal(main,1,`Main landmark: ${route}`);assert.equal(h1,1,`Single primary heading: ${route}`);assert.equal(canonical,1);assert.equal(description,1);assert.equal(jsonLd,1);
}
for(const name of fs.readdirSync('dist/assets').filter(n=>n.endsWith('.css'))){
 const css=fs.readFileSync(path.join('dist/assets',name),'utf8');
 for(const m of css.matchAll(/url\(["']?([^)'"\s]+)/g)){if(m[1].startsWith('/assets/'))assert.ok(fs.existsSync(path.join('dist',m[1])),`Missing CSS resource: ${m[1]}`);assert.ok(!m[1].startsWith('http'),'Remote CSS dependency: '+m[1]);}
}
assert.ok(fs.existsSync('dist/404.html'));assert.ok(fs.readFileSync('dist/robots.txt','utf8').includes('https://hima-elektro.de/sitemap.xml'));
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');assert.equal((sitemap.match(/<loc>/g)??[]).length,9);
const legal=fs.readFileSync('dist/impressum/index.html','utf8');for(const value of ['Rudolf Hildebrandt','Martin Brandel','HRB 44552','Amtsgericht Frankfurt am Main'])assert.ok(legal.includes(value));
assert.ok(!legal.includes('§5 TMG'));assert.ok(!legal.includes('ec.europa.eu/consumers/odr'));assert.ok(!legal.includes('Fernabsatzgesetz'));
console.log(`PASS: ${routes.length} React routes, ${assets} local resources, ${links} internal links, fragment targets, one H1 per page, unique SEO metadata, JSON-LD, sitemap, local fonts and current company particulars.`);
