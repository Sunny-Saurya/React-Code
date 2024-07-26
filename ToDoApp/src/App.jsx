import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("")    // input todo 
  const [todos, setTodos] = useState([])  // todos to be show
  const [showFinished, setShowFinished] = useState(true)  // edit todo
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)

    }
  }, [])
  

  const saveTools = (params) =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const handleEdit = (e, id) =>{
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id !== id
    })
    setTodos(newTodos)
    saveTools()

  }

  const toggleFinised = (e) =>{
    setShowFinished(!showFinished)
  }

  const handleDelete = (e,id) =>{
    
    confirm("Are you sure to delete this todo ??")
    let index = todos.findIndex(item =>{
      return item.id === id
    })
    let newTodos = todos.filter(item=>{
      return item.id !== id
    })
    // newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveTools()
  }

  const handleAdd = () =>{
    setTodos([...todos, {id : uuidv4(), todo, isCompleted:false}])
    setTodo("")
    saveTools()
  }

  const handleChange = (event) =>{
    setTodo(event.target.value)
  }

  const handleCheckbox = (e) =>{
    let id = e.target.name
    let index = todos.findIndex(item =>{
      return item.id === id
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveTools()
  }



  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-50 min-h-screen w-1/2">
    <h1 className="font-bold text-center text-lg">iTask - Manage Your Todos At One Place</h1>

      <div className="addTodo my-5 flex flex-col gap-5">
        <h1 className=' text-lg font-bold'>Add a Todo</h1>
        <input onChange={handleChange} value={todo} type="text"  className='w-full  h-10 border border-violet-900'/>
        <button onClick={handleAdd} disabled = {todo.length <= 3} className='bg-violet-800 hover:bg-voilet-950 p-2 font-bold py-1 text-white rounded-md  '>Save</button>
      </div>
      <input onChange={toggleFinised} type="checkbox" checked={showFinished} /> Show Finished
        <h1 className='text-xl font-bold'>Your Todos</h1>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos To Display</div>}
          {todos.map(item => {

          
           return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex w-1/2 justify-between my-3">

          

            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
            <div className= {item.isCompleted? "line-through":""}>{item.todo}</div>
            <div className="buttons">
              <button onClick= {(e) =>{handleEdit(e, item.id)}} className='bg-violet-800 hover:bg-voilet-950 p-2 font-bold py-1 text-white rounded-md  mx-2 '><FaRegEdit /></button>

              <button onClick= {(e) =>{handleDelete(e, item.id)}} className='bg-violet-800 hover:bg-voilet-950 p-2 font-bold py-1 text-white rounded-md  mx-2'><MdDeleteSweep/></button>
            </div>
            
          </div>
          })}
        </div>
    </div>
    </>
  )
}

export default App
