import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MyComponent } from './MyComponent';
import { CounterApp } from './CounterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <CounterApp ></CounterApp>

  </React.StrictMode>
);

/*
root.render(
  <React.StrictMode>
    <CounterApp ></CounterApp>
  </React.StrictMode>
);
*/