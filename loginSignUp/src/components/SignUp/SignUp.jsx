import React, { useState } from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { isAction } from '@reduxjs/toolkit';

const SignUp = () => {
    const [action, setAction] = useState("Login");

    return (
        <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 to-sky-500">
            <div className="flex flex-col gap-6 p-6 bg-white w-96 rounded-lg shadow-lg transform translate-y-1/8">
                <div className="text-center text-purple-900 font-semibold text-xl mb-5">{action}
                    <div className="h-1 w-12 mt-2 mx-auto bg-purple-900"></div>
                </div>

                <form className="flex flex-col gap-6">
                    {action === "Login" ? null : 
                    <div className="flex items-center bg-gray-200 p-2 rounded-md">
                        <IoPersonCircleSharp className='text-2xl mr-2' /> 
                        <input type="text" placeholder="Name" className="bg-transparent outline-none flex-1" />
                    </div>}
                    
                    <div className="flex items-center bg-gray-200 p-2 rounded-md">
                        <MdEmail className='text-2xl mr-2' /> 
                        <input type="email" placeholder="Email" className="bg-transparent outline-none flex-1" />
                    </div>
                    <div className="flex items-center bg-gray-200 p-2 rounded-md">
                        <RiLockPasswordFill className='text-2xl mr-2' />   
                        <input type="password" placeholder="Password" className="bg-transparent outline-none flex-1" />
                    </div>
                </form>

                <div className="text-sm mt-5 ml-2">
                    {action === "Sign Up" ? null : <p>Lost Password ? <span className="text-purple-900 underline cursor-pointer"> Click Here!</span></p>}
                </div>

                <div className="flex justify-around items-center gap-6 mt-6">
                    <button className={`h-10 w-28 text-base font-medium rounded-full ${action === "Login" ? "bg-gray-300 text-gray-600" : "bg-purple-900 text-white"}`} onClick={() => setAction("Sign Up")}>Sign Up</button>
                    <button className={`h-10 w-28 text-base font-medium rounded-full ${action === "Sign Up" ? "bg-gray-300 text-gray-600" : "bg-purple-900 text-white"}`} onClick={() => setAction("Login")}>Login</button>
                </div>
            </div>
        </main>
    )
}

export default SignUp;
