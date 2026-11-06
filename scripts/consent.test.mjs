import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readConsent,saveConsent,consentKey,consentMaxAge} from '../src/consent.js';
const data=new Map();globalThis.localStorage={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v)};const events=[];globalThis.window={dispatchEvent:e=>events.push(e)};
test('no saved choice, malformed JSON, stale or invalid permission never enable a map',()=>{
 data.clear();assert.equal(readConsent(),null);
 for(const raw of ['{bad',JSON.stringify({map:'true',savedAt:new Date().toISOString()}),JSON.stringify({map:true,savedAt:new Date(Date.now()-consentMaxAge-1000).toISOString()}),JSON.stringify({map:true,savedAt:new Date(Date.now()+10000).toISOString()})]){data.set(consentKey,raw);assert.equal(readConsent(),null);}
});
test('explicit grant can be revoked, persisted and immediately broadcast to a loaded map',()=>{
 saveConsent(true);assert.equal(readConsent().map,true);saveConsent(false);assert.equal(readConsent().map,false);assert.equal(events.at(-1).type,'hima-consent');assert.equal(events.at(-1).detail.map,false);
});
test('blocked browser storage does not prevent revoking a loaded external map',()=>{
 const previous=globalThis.localStorage;globalThis.localStorage={getItem:()=>{throw Error('blocked');},setItem:()=>{throw Error('blocked');}};
 assert.equal(readConsent(),null);saveConsent(false);assert.equal(events.at(-1).detail.map,false);globalThis.localStorage=previous;
});
