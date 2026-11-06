import fs from 'node:fs';
import path from 'node:path';
import {pages,notFound} from '../.prerender/prerender-entry.js';
const template=fs.readFileSync('dist/index.html','utf8');
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function head(page){return `<link rel="canonical" href="${escape(page.canonical)}"/>\n<meta name="robots" content="${page.noindex?'noindex,follow':'index,follow'}"/>\n<meta property="og:type" content="website"/>\n<meta property="og:locale" content="de_DE"/>\n<meta property="og:site_name" content="HIMA Elektro Technik GmbH"/>\n<meta property="og:title" content="${escape(page.title)}"/>\n<meta property="og:description" content="${escape(page.description)}"/>\n<meta property="og:url" content="${escape(page.canonical)}"/>\n<meta property="og:image" content="https://hima-elektro.de/assets/b4ddca79ef-HIMA-Elektro.jpg"/>\n<meta property="og:image:alt" content="Logo der HIMA Elektro Technik GmbH"/>\n<meta name="twitter:card" content="summary"/>\n<meta name="twitter:title" content="${escape(page.title)}"/>\n<meta name="twitter:description" content="${escape(page.description)}"/>\n<script id="structured-data" type="application/ld+json">${JSON.stringify(page.structured).replaceAll('<','\\u003c')}</script>`;}
for(const [route,page] of Object.entries(pages)){
 const target=path.join('dist',route,'index.html');fs.mkdirSync(path.dirname(target),{recursive:true});
 fs.writeFileSync(target,template.replace('<!--app-html-->',page.html).replace(/<title>.*?<\/title>/,`<title>${escape(page.title)}</title>`).replace(/<meta name="description" content="[^"]*"\s*\/?\s*>/,`<meta name="description" content="${escape(page.description)}"/>`).replace('<!--page-meta-->',head(page)));
}
fs.writeFileSync('dist/404.html',template.replace('<!--app-html-->',notFound).replace(/<title>.*?<\/title>/,'<title>Seite nicht gefunden – HIMA Elektro Technik GmbH</title>').replace('<!--page-meta-->','<meta name="robots" content="noindex,follow"/>'));
fs.writeFileSync('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+Object.values(pages).filter(p=>!p.noindex).map(p=>`  <url><loc>${escape(p.canonical)}</loc></url>`).join('\n')+'\n</urlset>\n');
console.log(`Prerendered ${Object.keys(pages).length} routes, metadata, sitemap and 404.html.`);
