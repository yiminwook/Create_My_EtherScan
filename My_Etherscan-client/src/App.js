import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useState } from "react";

import Nav from "./Nav.js"
import Goerli from "./component/Goerli";
import './App.css';

function App() {

  const [ account, handleAccount ] = useState("0x00");
  const [ balance, updatedBalance] = useState(0);

  function changeAccount(inputData) {
    handleAccount(inputData)
  }

  function updateBalance(balance) {
    updatedBalance(balance);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="subject">
          <Link className="Link" to = "/">My EtherScan</Link>
        </div>
        <nav className="App-nav">
          <Nav />
        </nav>
        <main className="App-contents">
          <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="/goerli" element={
              <Goerli 
              account={account} 
              balance={balance}
              changeAccount={changeAccount}
              updateBalance={updateBalance}
            />} />
          </Routes>
        </main>
        <footer>
          <coingecko-coin-market-ticker-list-widget  
            coin-id="bitcoin" 
            currency="usd" 
            locale="en" 
          />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
