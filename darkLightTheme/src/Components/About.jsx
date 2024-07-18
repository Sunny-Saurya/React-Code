// About.js
import React, { useState } from 'react';
const About = () => {

    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: '#212121',
        

    })

    const [btnText, setBtnText] = useState('Enable Dark Mode')

    const toggleTheme = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: '#212121',
                backgroundColor: 'white',
                
    transition: 'all 0.5s ease',
            });
            setBtnText('Enable Dark Mode')
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: '#212121',
                
    transition: 'all 0.5s ease',
                
            })
            setBtnText('Enable Light Mode')
        }
    }
    return (
        <div className="about-container" style={myStyle}>
            <div className="about-content">
                <h2 style={myStyle}>About Us</h2>
                <p style={myStyle}>
                    Welcome to our company! We are a team of passionate individuals dedicated to delivering exceptional services to our clients. Our mission is to create innovative solutions that meet the unique needs of businesses and individuals alike.
                </p>
                <p style={myStyle}>
                    Our team consists of experienced professionals from various fields, including web development, design, marketing, and more. We believe in the power of collaboration and strive to create a positive and productive work environment for everyone.
                </p>
                <p style={myStyle}>
                    At our core, we value integrity, creativity, and commitment to excellence. We continuously seek to improve and adapt to the ever-changing landscape of technology and business. Thank you for choosing to learn more about us!
                </p>

            </div>
            <button className='btn' onClick={toggleTheme}>{btnText}</button>
            <div className="about-image">
                <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="About Us" className="img-fluid" />
            </div>
        </div>
    );
};

export default About;
