import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
const root = document.getElementById('root');
const app = <App initialPath={window.location.pathname}/>;
if (root.firstElementChild) hydrateRoot(root,app);
else createRoot(root).render(app);
