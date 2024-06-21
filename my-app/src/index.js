import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Programming from './Programming'
import Battletech from './battletech/Battletech'
import Helpers from './battletech/Helpers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/battletech" element={<Battletech />}>
          <Route path="helpers" element={<Helpers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
