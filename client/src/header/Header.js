import React, { Component } from "react";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../getWeb3";

import logo from '../logo.svg';
import cake from '../cake.webp';
import "./Header.css";

function Header() {
    if (document.getElementById('web3-load-warning')){
        return (<div></div>);
    }
    return (
    <div className="Header">
      <header className="Header-header">
        <div className="container">
          <div id="logo" className="flex-row">
            <img src={cake} ></img>
            <p className="bg-txt"><span>CAKE</span>Stake</p>
          </div>
          <div id="wallet">0x0000</div>

          <div style={{width: "25%"}}></div>

          <div id="cake-price" className="sm-txt"><span>1 BNB = </span>$0.00</div>
          <div id="header-buttons" className="flex-row">
            <div className="cta">Support</div>
            <div className="cta">Telegram</div>
            <div className="cta">Audit</div>
            <div className="cta">Help</div>
            <div className="cta">Presentation</div>
          </div>
          
        </div>
      </header>
    </div>
    
  );
}


export default Header;
