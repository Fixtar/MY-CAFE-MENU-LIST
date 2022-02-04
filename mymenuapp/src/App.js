import React from 'react';
import './App.css';
import Welcome from './Welcom';
import Timer from './Timer';

function App() {
  const name = "seongha";
  return (
    <div className="App">
      HELLO WORLD, {name}

      <Welcome name="A" />
      <Welcome name="B" />

      <Timer />
    </div>
  );
}



export default App;
