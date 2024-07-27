import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function Layout() {

    return(
        <>

            <Navbar />
            <Outlet />
            <Footer />
            
        </>
    )
}

export default Layout