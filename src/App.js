import { useState } from 'react';
import './app.css';

export default function App() {
  const [weight, setWeight] = useState('some');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  function calculateIMC() {
    const high = height / 100;
    const imc = weight / (high * high)

    if (imc < 18.6) {
      setResult("You are underweight. Your IMC is " + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      setResult("Your are at the rigth weight. Your IMC is " + imc.toFixed(2))
    } else if (imc >= 24.9 && imc < 34.9) {
      setResult("You are slightly  overweight. Your IMC is " + imc.toFixed(2))
    } else if (imc > 34.9) {
      setResult("You are overweight. Your IMC is " + imc.toFixed(2))
    }
  }


  return (
    <div className="app">
      <h1>IMC calculator</h1>
      <span>Let´s calculate your IMC?!</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Weight in Kg. ie: 80"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Height in m. ie: 1.80"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button onClick={calculateIMC}>
          Calculate
        </button>

      </div >

      <h2> {result}</h2>

    </div >
  );
}