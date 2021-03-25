import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hero from './hero/Hero';
import Cards from './cards/Cards';
import Referr from './referr/Referr';
import Stake from './stake/Stake';
import Footer from './footer/Footer';
import footerImg from './footer.png';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="container">
      <Hero />
      <Cards />
      <Referr />
      <Stake />
      <img src={footerImg} style={{display: 'block', margin: 'auto', marginTop: 25}}></img>
      <Footer />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
