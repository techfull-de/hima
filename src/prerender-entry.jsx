import { renderToString } from 'react-dom/server';
import App, {routes} from './App.jsx';
import {metadata} from './seo.js';
export const pages = Object.fromEntries(Object.entries(routes).map(([path,page])=>[path,{...metadata(path,page.title),html:renderToString(<App initialPath={path}/>)}]));
export const notFound = renderToString(<App initialPath="/404/"/>);
