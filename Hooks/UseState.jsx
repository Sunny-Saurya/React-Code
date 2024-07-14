// React hooks are functions that let you use state and other React features in functional components. Here's an overview of the most commonly used hooks with examples:
// 1. useState

// Purpose: Adds state to functional components.

// Example:



import {useState} from 'react';
import React from 'react';

function App(){
    
    // const [counter, setCounter] = useState(0);

    const [profile, setProfile] = useState({name: "Sunny Kumar", age : 20})

    const updateName = () =>{
        setProfile({...profile, name: "Sunny Saurya"})
    }

    const increaseAge = () =>{
        setProfile({...profile, age : profile.age+1})
    }
    return (
        <div>
            {/* <h1>Counter Practice : {counter}</h1>
            <button  onClick = {() => setCounter(counter + 1)} >Increment</button>
            <button  onClick = {() => setCounter(0)} >Reset</button>
            <button  onClick = {() => setCounter(counter - 1)} >Decrement</button> */}
            <h1  >Profile Name : {profile.name}</h1>
            <h1 >Profile Age : {profile.age}</h1>
            
            <button onClick = {updateName} >Name</button>
            <button onClick ={increaseAge}>Age</button>
        </ div> 
    )
}

export default App;USe