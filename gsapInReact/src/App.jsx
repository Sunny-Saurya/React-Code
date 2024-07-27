import { useGSAP } from "@gsap/react";

import gsap from 'gsap'
import React, { useRef, useState } from 'react'


const App = () => {

  const[xValue, setxValue] = useState(0);

  const random = gsap.utils.random(-500,500,100);

  const boxRef = useRef();

  // you can directly do like this.
  {/* useGSAP(() =>{
      gsap.to(".box",{
          x: 700,
          duration: 2,
          ease: "power2.inOut",
          delay:1,
        })
      }) */}
      
      // or else
      
      
  {/*const gsapRef = useRef();
  useGSAP(() =>{
    gsap.to(gsapRef.current, {
      x:700,
      duration:2,
      ease:"power2.inOut",
      delay:1,
      rotate:360,
    })
  }) */}


  useGSAP(() =>{
    gsap.to(boxRef.current, {
      x:random,
      duration:1,
      ease:"power2.inOut",
      delay:1,
      })

  },[xValue])

  return (
    <main>
      {/* <div ref={gsapRef} className="box">

      </div>
      <div ref={gsapRef} className="box2">

      </div> */}

      <div className="wrap">

      <button onClick={() =>{setxValue(random)}}>Animate</button>
      <div ref={boxRef} className="box3"></div>

      </div>
    </main>
  )
}

export default App
