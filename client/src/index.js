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
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<React.StrictMode>
    <App />
    <div className="container">
      <Hero />
      <Cards />
      <Referr />
      <Stake />
      <img src={footerImg} style={{display: 'block', margin: 'auto', marginTop: 25}}></img>
      <Footer />
    </div>
    
  </React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
