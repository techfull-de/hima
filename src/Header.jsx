import { useEffect, useRef, useState } from 'react';
const links = [['/', 'Home'], ['/ueber-uns/', 'Über Uns'], ['/referenzen/', 'Referenzen'], ['/kontakt/', 'Kontakt'], ['/jobs/', 'Jobs']];
const logo = <picture><source type="image/webp" srcSet="/assets/53fa5c528f-HIMA-Elektro-7a1e0d8d.webp 187w, /assets/13b90e9766-HIMA-Elektro-7d9c0f45.webp 373w" sizes="187px" /><img src="/assets/85b77ae5ca-HIMA-Elektro-9e0dab1a.jpg" width="187" height="70" alt="HIMA Elektro Technik GmbH" /></picture>;
export default function Header({ path }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);
  const toggle = useRef(null);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    if (!open) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusable = () => [...dialog.current.querySelectorAll('a,button')];
    focusable()[0]?.focus();
    const key = e => {
      if(e.key === 'Escape') setOpen(false);
      if(e.key === 'Tab') {
        const all = focusable(), first = all[0], last = all.at(-1);
        if(e.shiftKey && document.activeElement === first) {e.preventDefault();last.focus();}
        if(!e.shiftKey && document.activeElement === last) {e.preventDefault();first.focus();}
      }
    };
    document.addEventListener('keydown', key);
    return () => {document.body.style.overflow=old;document.removeEventListener('keydown',key);toggle.current?.focus();};
  }, [open]);
  const nav = mobile => <ul className={mobile ? 'uk-nav uk-nav-primary uk-nav-center' : 'uk-navbar-nav'}>{links.map(([href,label]) => <li className={path === href ? 'uk-active' : ''} key={href}><a href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a></li>)}</ul>;
  return <>
    <header className="tm-header uk-visible@m"><div className="uk-navbar-container"><div className="uk-container"><nav className="uk-navbar" aria-label="Hauptnavigation"><div className="uk-navbar-left"><a className="uk-logo uk-navbar-item" href="/" aria-label="Zurück zur Startseite">{logo}</a></div><div className="uk-navbar-right">{nav(false)}</div></nav></div></div></header>
    <header className="tm-header-mobile uk-hidden@m"><div className="uk-navbar-container"><div className="uk-container uk-container-expand"><nav className="uk-navbar" aria-label="Mobile Navigation"><div className="uk-navbar-left"><a className="uk-logo uk-navbar-item" href="/" aria-label="Zurück zur Startseite">{logo}</a></div><div className="uk-navbar-right"><button ref={toggle} className="uk-navbar-toggle mobile-toggle" aria-label="Menü öffnen" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}><span>Menü</span><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M1 4h18M1 10h18M1 16h18" fill="none" stroke="currentColor" /></svg></button></div></nav></div></div></header>
    {open && <div className="mobile-overlay" onClick={() => setOpen(false)}><div ref={dialog} id="mobile-menu" className="mobile-panel" role="dialog" aria-modal="true" aria-label="Navigation" onClick={e => e.stopPropagation()}><button className="mobile-close" aria-label="Menü schließen" onClick={() => setOpen(false)}>×</button>{nav(true)}</div></div>}
  </>;
}
