import React, { useState,useEffect } from 'react'

function UseEffectPrac() {
    const [time,setTime]=useState(new Date().toLocaleTimeString());


    useEffect(() => {
        const time=setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            
        }, 1000);
        
          return () => {
            clearInterval(time); // Cleanup the interval on component unmount
          }
        },[])
  return (
    <>
    <div>
        <h1>digital clock</h1>
        <h2>{time}</h2>

        
        

    </div>
    </>
  )
}

export default UseEffectPrac