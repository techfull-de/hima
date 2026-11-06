import {company} from './company.js';
export const descriptions={
 '/':'HIMA Elektro Technik in Frankfurt: Beratung, Planung und Installation von Beleuchtung, Datennetzen, Elektroanlagen, Türkommunikation und Sicherheitstechnik.',
 '/ueber-uns/':'Lernen Sie HIMA Elektro Technik GmbH kennen: Ihr Elektrotechnik-Unternehmen aus Frankfurt-Griesheim, gegründet 1997. Beratung, Planung und Installation.',
 '/referenzen/':'Referenzen von HIMA Elektro Technik aus Frankfurt: Elektroinstallationen, Netzwerktechnik, Beleuchtung und Betreuung gewerblicher Liegenschaften.',
 '/kontakt/':'Kontakt zu HIMA Elektro Technik in Frankfurt-Griesheim: Ahornstraße 54a, Telefon 069 38998649. Nachricht vorbereiten und Anfahrt ansehen.',
 '/jobs/':'Jobs bei HIMA Elektro Technik in Frankfurt: Elektroniker für Energie- und Gebäudetechnik sowie Ausbildung. Aufgaben, Voraussetzungen und Bewerbung.',
 '/bewerbung/':'Bewerben Sie sich bei HIMA Elektro Technik in Frankfurt. Bereiten Sie Ihre Bewerbung vor und senden Sie Ihre Unterlagen per E-Mail.',
 '/impressum/':'Impressum der HIMA ELEKTRO TECHNIK GmbH: Anschrift, Kontakt, Geschäftsführung und Handelsregister HRB 44552, Amtsgericht Frankfurt am Main.',
 '/datenschutz/':'Datenschutz bei HIMA Elektro Technik: Informationen zu Websitebetrieb, Kontakt, Bewerbung, E-Mail-Weiterleitung und der optionalen OpenStreetMap-Karte.',
 '/cookie-richtlinie-eu/':'Cookie-Informationen von HIMA Elektro Technik: lokale Datenschutzauswahl, optionale OpenStreetMap-Karte und jederzeit änderbare Einstellungen.',
 '/impressum-datenschutzerklaerung/':'Impressum und Datenschutzhinweise der HIMA Elektro Technik GmbH in Frankfurt am Main.'
};
export const pageNames={'/':'Startseite','/ueber-uns/':'Über uns','/referenzen/':'Referenzen','/kontakt/':'Kontakt','/jobs/':'Jobs','/bewerbung/':'Bewerbung','/impressum/':'Impressum','/datenschutz/':'Datenschutz','/cookie-richtlinie-eu/':'Cookie-Informationen','/impressum-datenschutzerklaerung/':'Impressum und Datenschutz'};
export function metadata(path,title){
 const canonical=company.site+path;
 return {title,description:descriptions[path]||'HIMA Elektro Technik GmbH in Frankfurt am Main.',canonical,noindex:!descriptions[path]||path==='/impressum-datenschutzerklaerung/',structured:{'@context':'https://schema.org','@graph':[
 {'@type':'Electrician','@id':company.site+'/#unternehmen',name:company.name,legalName:company.legalName,url:company.site+'/',logo:company.site+'/assets/b4ddca79ef-HIMA-Elektro.jpg',image:company.site+'/assets/b4ddca79ef-HIMA-Elektro.jpg',telephone:company.phone,email:company.email,address:{'@type':'PostalAddress',streetAddress:company.street,postalCode:company.postalCode,addressLocality:company.city,addressCountry:'DE'},areaServed:{'@type':'City',name:company.city}},
 {'@type':'WebSite','@id':company.site+'/#website',url:company.site+'/',name:company.name,inLanguage:'de-DE',publisher:{'@id':company.site+'/#unternehmen'}},
 {'@type':'WebPage','@id':canonical+'#webpage',url:canonical,name:title,description:descriptions[path],inLanguage:'de-DE',isPartOf:{'@id':company.site+'/#website'},about:{'@id':company.site+'/#unternehmen'}},
 ...(path==='/'?[]:[{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Startseite',item:company.site+'/'},{'@type':'ListItem',position:2,name:pageNames[path]||'Seite',item:canonical}]}])
 ]}};
}
export function updateMetadata(path,title){
 const m=metadata(path,title);document.title=m.title;
 const set=(selector,attr,value)=>document.querySelector(selector)?.setAttribute(attr,value);
 set('meta[name="description"]','content',m.description);set('meta[name="robots"]','content',m.noindex?'noindex,follow':'index,follow');set('link[rel="canonical"]','href',m.canonical);
 for(const [name,value] of Object.entries({'og:title':m.title,'og:description':m.description,'og:url':m.canonical,'twitter:title':m.title,'twitter:description':m.description}))set(`meta[property="${name}"],meta[name="${name}"]`,'content',value);
 const script=document.getElementById('structured-data');if(script)script.textContent=JSON.stringify(m.structured);
}
