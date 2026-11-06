import {useEffect,useRef,useState} from 'react';
import {readConsent,saveConsent} from './consent.js';
export default function CookieConsent(){
  const [open,setOpen]=useState(false),[settings,setSettings]=useState(false),[map,setMap]=useState(false);
  const heading=useRef(null),reopen=useRef(null);
  useEffect(()=>{
    const current=readConsent();setOpen(!current);setMap(Boolean(current?.map));
    const show=()=>{setMap(Boolean(readConsent()?.map));setOpen(true);setSettings(true);requestAnimationFrame(()=>heading.current?.focus());};
    const saved=e=>{setMap(Boolean(e.detail?.map));setOpen(false);};
    window.addEventListener('hima-open-consent',show);window.addEventListener('hima-consent',saved);
    return ()=>{window.removeEventListener('hima-open-consent',show);window.removeEventListener('hima-consent',saved);};
  },[]);
  const choose=value=>{saveConsent(value);setSettings(false);requestAnimationFrame(()=>reopen.current?.focus({preventScroll:true}));};
  return open?<aside className="consent-banner" aria-labelledby="consent-heading">
    <div className="consent-brand">HIMA ELEKTRO TECHNIK</div>
    <h2 id="consent-heading" ref={heading} tabIndex={-1}>Ihre Privatsphäre</h2>
    <p>Unsere Website nutzt keine Analyse- oder Werbe-Cookies. Die optionale OpenStreetMap-Karte laden wir erst mit Ihrer Zustimmung. Ihre Auswahl wird für 180 Tage im Browser gespeichert.</p>
    {settings&&<div className="consent-options"><div><strong>Erforderliche Einstellungen</strong><span>Immer aktiv</span><p>Speichert ausschließlich Ihre Datenschutzauswahl.</p></div><label className="consent-map-option"><input type="checkbox" checked={map} onChange={e=>setMap(e.target.checked)}/><span><strong>OpenStreetMap-Karte</strong><small>Beim Laden werden Verbindungsdaten, darunter Ihre IP-Adresse, an den Kartendienst übermittelt.</small></span></label></div>}
    <div className="consent-buttons"><button type="button" onClick={()=>choose(false)}>Nur erforderliche</button><button type="button" onClick={()=>choose(true)}>Alle erlauben</button></div>
    <button type="button" className="consent-settings" onClick={()=>settings?choose(map):setSettings(true)}>{settings?'Auswahl speichern':'Einstellungen anpassen'}</button>
    <div className="consent-links"><a href="/datenschutz/">Datenschutz</a><a href="/impressum/">Impressum</a><a href="/cookie-richtlinie-eu/">Cookie-Informationen</a></div>
  </aside>:<button ref={reopen} className="consent-tab" onClick={()=>{setMap(Boolean(readConsent()?.map));setOpen(true);setSettings(true);requestAnimationFrame(()=>heading.current?.focus());}}>Datenschutz-Einstellungen</button>;
}
