import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {

    // what is the value increment when we click on the addValue funciton  ----> no its not 4, its only increment 1 number.
    // setCounter(counter + 1);
    // setCounter(counter + 1); // bunch of same code.
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter(prevCounter => prevCounter + 1);  // it increment 4 value at a one click because we use call back funciton here and in prevValue we add 1.
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  };

  const subValue = () => {
    setCounter(counter - 1);
  };

  const resetValue = () => {
    setCounter(0);
  };

  return (
    <>
      <h1 class = "header">Counter Using React - Library</h1>
      <h2>Counter value : {counter}</h2>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <br />
      <button className="start" onClick={addValue}>
        Increment
      </button>
      <br />
      <br />
      <button className="stop" onClick={subValue}>
        Decrement
      </button>
      <br />
      <br />
      <button className="reset" onClick={resetValue}>
        Reset
      </button>
      <br />
    </>
  );
}

export default App;