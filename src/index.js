import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar';
import ImgSection from './main';
import Cards from './cards'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <Navbar/>
    <ImgSection/>
    <Cards/>
  </React.StrictMode>
);

reportWebVitals();
