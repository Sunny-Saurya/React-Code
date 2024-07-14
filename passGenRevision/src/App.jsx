import { useState, useCallback, useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [number, numberAllowed] = useState(false)
  const [character, characterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let password = ''
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKZXCVBNML"
    let number  = "0987654321"
    let character = "!@#$%^&*()_+"
    if(numberAllowed) str += number;
    if(characterAllowed) str += character;


    for(let i = 0; i < length; i++)
    {
      let randomPass = str.charAt(Math.floor(Math.random() * str.length))
      password += randomPass
    }
    setPassword(password)

    
  }, [length, number, character, setPassword])

  useEffect(() =>{
    
    passwordGenerator()

  },[length, number, character, setPassword])


const copyToClipboard = useCallback(() =>{
  passRef.current.select()
  navigator.clipboard.writeText(password)
},[password])
  return (
    <>
      <div className="">
      <div>
        <h1>Password Generator</h1>
      </div>

      <div className="">
        <input type="text" value={password} placeholder='Password' id = "inputBox" readOnly  ref = {passRef}/>

        <button className='bg-green-500' onClick={copyToClipboard}>Copy</button>
      </div>
        <br/>

      <div className="">
        <input type="range" min={6} max={100} readOnly onChange={(e) =>{
          setLength(e.target.value)
        }}/>

      </div>
      <label htmlFor="Length">Length : {length}</label>

      <div className="">
        <input type="checkbox" id = "number" readOnly  defaultChecked={number} onChange={() => {
                  numberAllowed((prev) => !prev )
              }}/>
      <label htmlFor="number">Number</label>
      </div>

      <div className="">
        <input type="checkbox" id = "character" readOnly defaultChecked={character}  onChange={() => {
                  characterAllowed((prev) => !prev )
              }}/>
      <label htmlFor="character">Character</label>
      </div>
    </div>
    </>
  )
}

export default App
