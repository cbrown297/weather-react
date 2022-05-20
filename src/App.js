import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://fabulous-kheer-cd4c48.netlify.app/" target="_blank" rel="noopener noreferrer">Claudia Brown</a>
          {" "}and is{" "}
          <a href="https://github.com/cbrown297/weather-react" target="_blank" rel='noopener noreferrer'>open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
