import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Main/App';
import Home from './Main/Home';
import AboutMe from './Main/AboutMe';
import Programming from './programming/Programming'
import OOP from './programming/OOP';
import Error from './Error';
import BattletechHome from './battletech/BattletechHome';
import Battletech from './battletech/Battletech'
import Helpers from './battletech/Helpers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ProgHome from './programming/ProgHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutMe />} />
        </Route>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/programming" element={<Programming />}>
          <Route path="/programming" element={<ProgHome />} />
          <Route path="oop" element={<OOP />} />
        </Route> 
        <Route path="/battletech" element={<Battletech />}>
          <Route path="/battletech" element={<BattletechHome />} />
          <Route path="helpers" element={<Helpers />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
