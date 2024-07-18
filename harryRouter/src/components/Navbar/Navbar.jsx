import React from 'react'
import { NavLink } from 'react-router-dom'

export default function App(){
    return (
        <>
            <nav>
                <ul>
                    <NavLink className = {(e) =>{return e.isActive? "red" : ""}} to={'/'} href="/"><li>Home</li></NavLink>
                    <NavLink className = {(e) =>{return e.isActive? "red" : ""}} to={'/about'} href="/"><li>About</li></NavLink>
                    <NavLink className = {(e) =>{return e.isActive? "red" : ""}} to={'/contact'} href="/"><li>Contact</li></NavLink>
                </ul>
            </nav>
        </>
    )
}