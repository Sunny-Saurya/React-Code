import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  function ageCalc() {
    let dateInput = document.getElementById("date");

    // Get the value from the input (which is a string in YYYY-MM-DD format)
    let dateString = dateInput.value;

    // Create a JavaScript Date object from the input value
    let selectedDate = new Date(dateString);

    // Today's date
    let today = new Date();

    // Calculate age
    let y1 = selectedDate.getFullYear();
    let m1 = selectedDate.getMonth() + 1; // Months are zero indexed, so add 1
    let d1 = selectedDate.getDate();

    let y2 = today.getFullYear();
    let m2 = today.getMonth() + 1;
    let d2 = today.getDate();

    let y3 = y2 - y1;
    let m3 = m2 - m1;
    let d3 = d2 - d1;

    // Adjust for negative values
    if (d3 < 0) {
      m3--;
      // Calculate days difference based on the number of days in the previous month
      d3 += new Date(y2, m2, 0).getDate();
    }
    if (m3 < 0) {
      y3--;
      m3 += 12;
    }

    setMessage(`You are ${y3} years, ${m3} months and ${d3} days old.`);
  }

  return (
    <>
      <div className="container">
        <h2>--- Calculate your age ---</h2>
        <div className="inputBox">
          <input type="date" id="date" />
          <button onClick={ageCalc}>Calculate</button>
        </div>
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;