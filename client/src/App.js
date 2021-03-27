import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import logo from './logo.svg';
import cake from './cake.webp';
import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div id="web3-load-warning"></div>;
    }
    return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div id="logo" class="flex-row">
            <img src={cake} ></img>
            <p class="bg-txt"><span>CAKE</span>Stake</p>
          </div>
          <div id="wallet">{this.state.accounts[0]}</div>

          <div style={{width: "25%"}}></div>

          <div id="cake-price" class="sm-txt"><span>1 BNB = </span>${this.state.storageValue}</div>
          <div id="header-buttons" class="flex-row">
            <div class="cta">Support</div>
            <div class="cta">Telegram</div>
            <div class="cta">Audit</div>
            <div class="cta">Help</div>
            <div class="cta">Presentation</div>
          </div>
          
        </div>
      </header>
    </div>
    
  );
  }
}

export default App;
