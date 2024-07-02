import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0) // hooks

 // let counter = 25

  const increment = () =>{
    // console.log("value added : ",counter);
    // counter += 1
    
    if(counter == 25)
      {
        counter = counter;
      }
    else{
      setCounter(counter + 1)
    }
    
  }

  const decrement = () =>{
    // console.log("value added : ",counter);
    // counter += 1
    
    if(counter < 1)
      {
        counter = counter
      }
      else{
      setCounter(counter - 1)

    }
  }

  const reset = () =>{
    // console.log("value added : ",counter);
    // counter += 1
    counter  = 0;
    setCounter(counter)
    
  }

  return (
    <>
    
    <h1>Counter Using React Library</h1>
    <h2>Counter value : {counter}</h2>

    <button 
    onClick = {increment}
    >Increament</button>
    <br />
    <br />

    <button onClick = {decrement}
    >Decreament</button>
    <br /> <br />
    <button onClick = {reset}
    >Reset</button>

    {/* <p>footer: {counter}</p> */}
    </>
  )
}

export default App
