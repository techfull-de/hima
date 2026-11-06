import { Children, useEffect, useId, useRef, useState } from 'react';
import { readConsent, saveConsent } from './consent.js';
export function ArrowRight() {return <svg className="uk-margin-xsmall-left" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M2 10h16m-6-6 6 6-6 6" fill="none" stroke="currentColor" /></svg>;}
export function LocationMap() {
  const [enabled,setEnabled]=useState(false);
  useEffect(() => {
    setEnabled(Boolean(readConsent()?.map));
    const update=e=>setEnabled(Boolean(e.detail?.map));
    window.addEventListener('hima-consent',update);
    return ()=>window.removeEventListener('hima-consent',update);
  },[]);
  return <div className="location-map">{enabled ? <iframe title="Standort HIMA Elektro Technik GmbH, Ahornstraße 54a, Frankfurt am Main" src="https://www.openstreetmap.org/export/embed.html?bbox=8.583%2C50.089%2C8.617%2C50.107&layer=mapnik&marker=50.0978%2C8.6001" loading="lazy" referrerPolicy="no-referrer" /> : <div className="map-placeholder"><p>Hier finden Sie uns<br /><strong>Ahornstr. 54a · 65933 Frankfurt am Main</strong></p><button type="button" className="uk-button uk-button-default" onClick={()=>saveConsent(true)}>Karte laden</button><small>Beim Laden wird eine Verbindung zu OpenStreetMap hergestellt.</small></div>}<a className="map-link" href="https://www.openstreetmap.org/?mlat=50.0978&mlon=8.6001#map=17/50.0978/8.6001" target="_blank" rel="noopener noreferrer">Anfahrt in OpenStreetMap öffnen ↗</a></div>;
}
export function ContactForm({application=false}) {
  const id=useId();
  const [draft,setDraft]=useState(null);
  const submit=e=>{
    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const body=`${application?'Bewerbung':'Kontaktanfrage'}\n\nName: ${form.get('name')}\nE-Mail: ${form.get('email')}\nTelefon: ${form.get('phone')||'–'}\n\n${form.get('message')}`;
    const href='mailto:info@hima-elektro.de?subject='+encodeURIComponent(application?'Bewerbung bei HIMA Elektro Technik':'Kontaktanfrage über die Website')+'&body='+encodeURIComponent(body);
    setDraft({href,body});
  };
  return <form className="contact-form" onSubmit={submit} onChange={()=>setDraft(null)}>
    <div><label htmlFor={id+'name'}>Name *</label><input className="uk-input" id={id+'name'} name="name" autoComplete="name" required maxLength={120}/></div>
    <div><label htmlFor={id+'email'}>E-Mail *</label><input className="uk-input" id={id+'email'} name="email" type="email" autoComplete="email" required maxLength={254}/></div>
    <div><label htmlFor={id+'phone'}>Telefon</label><input className="uk-input" id={id+'phone'} name="phone" type="tel" autoComplete="tel" maxLength={60}/></div>
    <div><label htmlFor={id+'message'}>{application?'Ihre Bewerbung':'Ihre Nachricht'} *</label><textarea className="uk-textarea" id={id+'message'} name="message" rows="5" required maxLength={5000}/></div>
    {application && <p className="form-note">Ihre Bewerbungsunterlagen können Sie anschließend im Mailprogramm anhängen.</p>}
    <p className="privacy-note">Hinweise zur Verarbeitung Ihrer Angaben finden Sie in der <a href="/datenschutz/">Datenschutzerklärung</a>. * Pflichtfelder.</p>
    <button className="uk-button uk-button-default" type="submit">E-Mail vorbereiten</button>
    <p className="form-note">Der Versand erfolgt über Ihr eigenes Mailprogramm an info@hima-elektro.de.</p>
    {draft && <div className="mail-draft" role="status"><p>Ihre E-Mail ist vorbereitet. Öffnen Sie Ihr Mailprogramm und senden Sie die Nachricht dort ab.</p><a className="uk-button uk-button-default" href={draft.href}>Mailprogramm öffnen</a><a className="draft-download" download={application?'bewerbung.txt':'kontaktanfrage.txt'} href={'data:text/plain;charset=utf-8,'+encodeURIComponent(draft.body)}>Nachricht als Text speichern</a></div>}
  </form>;
}

/** Matches the source's masonry-next ordering without a theme JavaScript runtime. */
export function Masonry({children,className=''}) {
  const root=useRef(null),[layout,setLayout]=useState(null);
  useEffect(()=>{
    const element=root.current;
    let frame;
    const measure=()=>{
      const columns=window.innerWidth>=1200?4:window.innerWidth>=960?3:window.innerWidth>=640?2:1;
      const width=(element.clientWidth-15*(columns-1))/columns;
      const tops=Array(columns).fill(0);
      const positions=[...element.children].map((child,index)=>{
        const col=index%columns;
        const item={left:col*(width+15),top:tops[col],width};
        tops[col]+=child.getBoundingClientRect().height+15;
        return item;
      });
      const next={positions,height:Math.max(...tops)-15};
      setLayout(previous=>JSON.stringify(previous)===JSON.stringify(next)?previous:next);
    };
    const schedule=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(measure);};
    const observer=new ResizeObserver(schedule);
    observer.observe(element);for(const child of element.children)observer.observe(child);
    window.addEventListener('resize',schedule);measure();
    return ()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('resize',schedule);};
  },[children]);
  return <div ref={root} className={className+' react-masonry'+(layout?' is-positioned':'')} style={layout?{height:layout.height}:undefined}>{Children.map(children,(child,index)=><div style={layout?{position:'absolute',...layout.positions[index]}:undefined}>{child.props.children}</div>)}</div>;
}
