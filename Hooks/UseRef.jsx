// 7. useRef

// Purpose: Accesses and manipulates DOM elements directly.

// Example:

import React, {useRef} from 'react';

function App() {

    const inputBox = useRef();

    const buttonClicked = () =>{
            inputBox.current.style.background = "red";
    }
  return (
    <>
      <div>
        <h1 className="text-orange-700">Password Generator</h1>
      </div>
      <div>
          
        <input type = "text" placeholder = "password" id = "inputBox " ref =  {inputBox}/>
        <input type = "range" id = "range" min = {6} max = {100}/>
          <label>Length</label><br /><br />

          <input type = "checkbox" id = "range" min = {6} max = {100}/>
          <label>Number</label> <br /><br />
          <input type = "checkbox" id = "range" min = {6} max = {100}/>
          <label>Character</label>
    <br></br> <br></br>
          <button onClick= {buttonClicked} >Click Me</button>
      </div>
    </>
  );
}

export default App;
