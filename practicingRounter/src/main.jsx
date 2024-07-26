import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact  from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
        },
      {
        path: '/About',
        element: <About />
        },
      {
        path: '/Contact',
        element: <Contact />
        }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
