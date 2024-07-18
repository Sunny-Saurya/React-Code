import React from 'react'

import { createBrowserRouter , RouterProvider} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

import Home from './components/Home'

import Login from './components/Login'

import About from './components/About'

import Contact from './components/Contact'

import User from './components/User';


function App() {

    const router = createBrowserRouter([
      {
        path: '/',
        element: <>  <Navbar/><Home />     </>  
      },
      {
        path: '/login',
        element: <>     <Navbar/><Login />   </> 
      },
      {
        path: '/about',
        element: <>   <Navbar/> <About />    </> 
      },
      {
        path: '/contact',
        element: <>   <Navbar/> <Contact />    </> 
      },
      {
        path: '/user/:username',
        element: <> <Navbar/> <User/> </> 
      }
      
    ])

  return (
    <>  
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
