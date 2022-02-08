import React from 'react';
import './App.css';
import Welcome from './Welcom';
import Timer from './Timer';
import Toggle from './eventTest';
import LoginControl from './LoginControl';
import NumberList from './ListandKey';
import NameForm from './NameForm';
import Calculator from './boilingVerdict';
const numbers = [1, 2, 3, 4, 5];

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
      <NumberList numbers={numbers} />
      <NameForm />
      <Calculator />
    </div>
  );
}



export default App;
