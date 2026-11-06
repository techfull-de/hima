import { useEffect, useState } from 'react';
import Header from './Header.jsx';
import {updateMetadata} from './seo.js';
import Footer from './Footer.jsx';
import CookieConsent from './CookieConsent.jsx';
import Home from './pages/home.jsx';
import About from './pages/ueber-uns.jsx';
import References from './pages/referenzen.jsx';
import Contact from './pages/kontakt.jsx';
import Jobs from './pages/jobs.jsx';
import Application from './pages/bewerbung.jsx';
import {Imprint,Privacy,CombinedLegal} from './Legal.jsx';
import Cookies from './pages/cookie-richtlinie-eu.jsx';
export const routes={
  '/':{component:Home,title:'HIMA Elektro Technik GmbH – Gute Qualität, zu einem vernünftigen Preis.'},
  '/ueber-uns/':{component:About,title:'Über Uns – HIMA Elektro Technik GmbH'},
  '/referenzen/':{component:References,title:'Referenzen – HIMA Elektro Technik GmbH'},
  '/kontakt/':{component:Contact,title:'Kontakt – HIMA Elektro Technik GmbH'},
  '/jobs/':{component:Jobs,title:'Jobs – HIMA Elektro Technik GmbH'},
  '/bewerbung/':{component:Application,title:'Bewerbung – HIMA Elektro Technik GmbH'},
  '/impressum-datenschutzerklaerung/':{component:CombinedLegal,title:'Impressum / Datenschutzerklärung – HIMA Elektro Technik GmbH'},
  '/impressum/':{component:Imprint,title:'Impressum – HIMA Elektro Technik GmbH'},
  '/datenschutz/':{component:Privacy,title:'Datenschutzerklärung – HIMA Elektro Technik GmbH'},
  '/cookie-richtlinie-eu/':{component:Cookies,title:'Cookie-Richtlinie – HIMA Elektro Technik GmbH'}
};
export const normalize=p=>p==='/'?'/':p.replace(/\/+$/,'')+'/';
export default function App({initialPath='/'}) {
  const [path,setPath]=useState(normalize(initialPath));
  useEffect(()=>{
    const update=()=>{setPath(normalize(location.pathname));};
    const click=e=>{
      const a=e.target.closest('a');
      if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target||a.hasAttribute('download'))return;
      const u=new URL(a.href,location.href);
      if(u.origin!==location.origin||u.hash||u.search||!routes[normalize(u.pathname)])return;
      e.preventDefault();history.pushState(null,'',u.pathname);update();window.scrollTo({top:0,behavior:'instant'});
      requestAnimationFrame(()=>{const main=document.querySelector('main');main?.setAttribute('tabindex','-1');main?.focus({preventScroll:true});});
    };
    window.addEventListener('popstate',update);document.addEventListener('click',click);
    return ()=>{window.removeEventListener('popstate',update);document.removeEventListener('click',click);};
  },[]);
  const page=routes[path];
  useEffect(()=>{updateMetadata(path,page?.title??'Seite nicht gefunden – HIMA Elektro Technik GmbH');},[page,path]);
  const Page=page?.component;
  return <><a className="skip-link" href="#tm-main">Zum Hauptinhalt springen</a><div id="top"/><Header path={path}/>{Page?<Page key={path}/>:<main id="tm-main" className="uk-section uk-container"><h1>Seite nicht gefunden</h1><p>Die gewünschte Seite ist nicht vorhanden.</p><a className="uk-button uk-button-primary" href="/">Zur Startseite</a></main>}<Footer/><CookieConsent/></>;
}
