"""Download the public source pages and self-contained presentation assets."""
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urljoin, urlsplit, urldefrag
from concurrent.futures import ThreadPoolExecutor
import re, json, hashlib
root=Path(__file__).resolve().parents[1]
base='https://hima-elektro.de/'
pages=['','ueber-uns/','referenzen/','kontakt/','jobs/','impressum-datenschutzerklaerung/','cookie-richtlinie-eu/']
assetmap={}
failures=[]
def fetch(url):
    with urlopen(Request(url, headers={'User-Agent':'Mozilla/5.0'}),timeout=40) as f:return f.read()
def getpage(path):
    data=fetch(urljoin(base,path)).decode('utf-8')
    name=path.strip('/') or 'home'
    (root/'reference'/f'{name}.html').write_text(data)
    return data
with ThreadPoolExecutor(max_workers=6) as pool: docs=list(pool.map(getpage,pages))
urls=set()
for doc in docs:
    for u in re.findall(r'''(?:src|href|poster|data-src)=["']([^"']+)["']''',doc):
        u=urljoin(base,u.replace('&amp;','&'))
        if '/wp-content/' in u and urlsplit(u).path.lower().endswith(('.css','.png','.jpg','.jpeg','.webp','.svg','.gif','.pdf','.woff','.woff2','.ttf','.mp4')): urls.add(u)
    for group in re.findall(r'''(?:srcset)=["']([^"']+)["']''',doc):
        urls.update(urljoin(base,x.strip().split()[0]) for x in group.split(',') if x.strip())
    for u in re.findall(r'''url\(["']?([^)'"\s]+)''',doc):
        if not u.startswith('data:'):urls.add(urljoin(base,u))
def getasset(url):
    try:
        clean=urldefrag(url)[0]
        name=Path(urlsplit(clean).path).name
        local='/assets/'+hashlib.sha256(clean.encode()).hexdigest()[:10]+'-'+name
        data=fetch(clean)
        (root/'public'/local.lstrip('/')).write_bytes(data)
        return clean,local,data
    except Exception as e:return url,None,str(e)
seen=set()
while urls-seen:
    batch=sorted(urls-seen);seen.update(batch)
    with ThreadPoolExecutor(max_workers=8) as pool: results=list(pool.map(getasset,batch))
    for url,local,data in results:
        if not local: failures.append({'url':url,'error':data});continue
        assetmap[url]=local
        if urlsplit(url).path.endswith('.css'):
            css=data.decode('utf-8')
            for u in re.findall(r'''url\(["']?([^)'"\s]+)''',css):
                if not u.startswith('data:'):urls.add(urljoin(url,u))
            for u in re.findall(r'''@import\s+["']([^"']+)''',css):urls.add(urljoin(url,u))
for url,local in list(assetmap.items()):
    if urlsplit(url).path.endswith('.css'):
        f=root/'public'/local.lstrip('/');css=f.read_text()
        def replace(m):
            u=m.group(1).strip('"\' ')
            return 'url("'+assetmap.get(urljoin(url,u),u)+'")'
        css=re.sub(r'url\(([^)]+)\)',replace,css)
        css=re.sub(r'''(@import\s+)["']([^"']+)["']''',lambda m:m[1]+'"'+assetmap.get(urljoin(url,m[2]),m[2])+'"',css)
        f.write_text(css)
(root/'reference'/'asset-map.json').write_text(json.dumps(assetmap,ensure_ascii=False,indent=2))
(root/'reference'/'collection-report.json').write_text(json.dumps({'pages':pages,'assets':len(assetmap),'failures':failures},indent=2))
print(json.dumps({'pages':len(pages),'assets':len(assetmap),'failures':failures},indent=2))
