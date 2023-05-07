import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider as StyletronProvider} from "styletron-react";
import {Client as Styletron} from "styletron-engine-atomic";
const engine = new Styletron({
  hydrate: document.getElementsByClassName("_styletron_hydrate_")
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<StyletronProvider value={engine}>
    <App />
    </StyletronProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
