// 2. useEffect

// Purpose: Performs side effects in functional components (e.g., data fetching, subscriptions).

// Example:


import  {useState, useEffect} from 'react';
import React from 'react';

function App(){
    const [counter, setCounter] = useState(0);

    useEffect(() =>{
        document.title = `You clicked ${counter} times`
    },[counter])
    
    return(
        <>
        <h1>--- Understand about useEffect ---</h1>
            <p>Used to update or manipulate document file or title or any thing</p>
            <p>You clicked {counter} times</p>
            <button  onClick = {() =>setCounter(counter + 1)} >UseEffect</button>

        </>
    )
}

export default App;