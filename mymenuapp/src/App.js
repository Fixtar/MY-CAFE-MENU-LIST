import React from 'react';
import './App.css';
import Welcome from './Welcom';
import Timer from './Timer';
import Toggle from './eventTest';
import LoginControl from './LoginControl';

function App() {
  const name = "seongha";
  return (
    <div className="App">
      HELLO WORLD, {name}

      <Welcome name="A" />
      <Welcome name="B" />

      <Timer />
      <Toggle />
      <LoginControl />
    </div>
  );
}



export default App;
