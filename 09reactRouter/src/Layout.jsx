import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    {/* for chnaging the middle part of the website */}
    <Outlet /> 
    <Footer />
    </>
  )
}

export default Layout