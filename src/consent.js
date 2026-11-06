export const consentKey='hima-privacy-v1';
export const consentMaxAge=180*24*60*60*1000;
export function readConsent(){
  try{
    const value=JSON.parse(localStorage.getItem(consentKey)||'null');
    const age=Date.now()-Date.parse(value?.savedAt);
    return value&&typeof value.map==='boolean'&&Number.isFinite(age)&&age>=0&&age<consentMaxAge?value:null;
  }catch{return null;}
}
export function saveConsent(map){
  const value={version:1,map:Boolean(map),savedAt:new Date().toISOString()};
  try{localStorage.setItem(consentKey,JSON.stringify(value));}catch{}
  window.dispatchEvent(new CustomEvent('hima-consent',{detail:value}));
}
export function openConsent(){window.dispatchEvent(new Event('hima-open-consent'));}
