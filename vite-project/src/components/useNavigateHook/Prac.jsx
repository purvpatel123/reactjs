import React from 'react'
import { useNavigate } from "react-router-dom";



function Prac() {
    const navigate=useNavigate()
    const handleLogin=()=>{
        navigate('/PracTest',{state:{name:"sachin",age:22}})
    }
  return (
    <>
    <div>
     <button onClick={handleLogin}>click me</button>

    </div>
    </>
  )
}

export default Prac