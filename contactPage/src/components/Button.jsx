import React from 'react'
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";

const Button = (props) => {
  return (
    <button className="primary_btn">
      
        {props.icon}
        {props.text}
        
    </button>
  )
}

export default Button
