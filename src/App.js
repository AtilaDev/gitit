import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-text">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React with Hooks2!
        </a>

        <div className="App-input-container">
          <input type="text" className="App-input" placeholder="user" />
          <br />
          <br />
          <input type="text" className="App-input" placeholder="pass" />
          <br />
          <button>Login</button>
          <button>Admin</button>
          <button>Atención a clientes</button>
          <button>Redes sociales</button>
        </div>
      </header>
    </div>
  );
}

export default App;
