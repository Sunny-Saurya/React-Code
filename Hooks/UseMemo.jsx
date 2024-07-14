// 5. useMemo

// Purpose: Memoizes expensive calculations, optimizing performance.

import React, {useState,useMemo} from 'react';

function App() {
    const[number, setNumber] = useState(0) ;
    const[counter, setCounter] = useState(0);

    function cubeOfNumber(num){
        console.log("Calculation Done!!")
        return Math.pow(num,3);
    }
    const result = useMemo(() =>cubeOfNumber(number),[number]);
  return (
    <>
        <div>
            <input type = "text" value = {number} placeholder = "Enter number : " onChange = {(e) =>{setNumber(e.target.value)}}/>
            <h1>The cube of the number is : {result} </h1>
        </div>
        <button  onClick = {() =>setCounter(counter + 1)}>Counter</button>
        <h1>Counter clicked : {counter} times</h1>
    </>
  );
}

export default App;
