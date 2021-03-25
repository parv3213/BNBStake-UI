import logo from './logo.svg';
import cake from './cake.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div id="logo" class="flex-row">
            <img src={cake} ></img>
            <p class="bg-txt"><span>CAKE</span>Stake</p>
          </div>
          <div id="wallet">0x0000</div>

          <div style={{width: "25%"}}></div>

          <div id="cake-price" class="sm-txt"><span>1 BNB = </span>$265.1</div>
          <div class="flex-row">
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

export default App;
