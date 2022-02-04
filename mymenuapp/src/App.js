import React from 'react';
import './App.css';
import Welcome from './Welcom';

function App() {
  const name = "seongha";
  return (
    <div className="App">
      HELLO WORLD, {name}

      <Welcome name="A" />
      <Welcome name="B" />
    </div>
  );
}

export default App;
