import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";

import Nav from "./Nav.js"
import Main from "./component/Main.js";

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
        <div className="subject">Hello world!</div>
        <nav className="App-nav">
          <Nav />
        </nav>
        <main className="App-contents">
          <Routes>
            <Route path="/" element={
              <Main 
              account={account} 
              balance={balance}
              changeAccount={changeAccount}
              updateBalance={updateBalance}
            />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
