import './App.css';
import './index.css'
import React, {useState} from 'react'
 
function App() {
 
  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } 
    else {
      const heightInMeters = height / 100; // assuming height is in cm
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setResult(bmi);
 
      // Logic for message
 
      if (weight === 0 || isNaN(weight)) {
        alert("Please enter a valid weight");
      }

      if (height === 0 || isNaN(height)) {
        alert("Please enter a valid height");
      } 
      else {
        let bmiValue = weight / Math.pow(height / 100, 2)

      setBmi(bmiValue.toFixed(1));

        if (bmiValue < 25) {
          setMessage("You are underweight");
        } else if (bmiValue > 25 && bmiValue < 30) {
          setMessage("You are normal");
        } else if (bmiValue > 30 && bmiValue < 35) {
          setMessage("You are overweight");
        } else if (bmiValue > 35) {
          setMessage("You are obese");
        }
      }
    }
  }
 
 
  let reload = () => {
    window.location.reload()
  }
 
  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
 
        <div>
          <label>Weight (lbs)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div>
          <label>Height (in)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
  </div>
  );
}
 
export default App;