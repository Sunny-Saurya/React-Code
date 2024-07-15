import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import User from './User/User.jsx'
import Github, { githubInfoLoader } from './Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "github",
        element: <Github />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>,
)