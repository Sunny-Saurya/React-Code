import React from 'react'
import Button from './Button'
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const Form = () => {
    return (
        <div>

            <section className="formContainer">
            

                <div className='contact-form'>

                    <div className="top_btn">
                        <Button text="VIA SUPPORT CHAT" icon={<BiSolidMessageAltDetail fontSize="24px" />} />

                        <Button text="VIA CALL" icon={<IoCall fontSize="24px" />} />


                    </div>
                        <Button className = "outline_btn"  text="VIA EMAIL FORM" icon={<MdEmail  fontSize="24px" />} />


                </div>
                <div className='.contact-img'>
                    <img src="" alt="" />
                </div>

            </section>
        </div>
    )
}

export default Form
