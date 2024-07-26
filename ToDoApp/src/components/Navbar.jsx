import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between bg-slate-700 text-white py-2'>

        <div className="logo">
            <span className="font-bold text-xl mx-8">iTask</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all duration-500'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-500'>Your Tasks</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
