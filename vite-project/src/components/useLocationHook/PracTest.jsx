import React from 'react'
import { useLocation } from 'react-router-dom'
function PracTest() {
    const location=useLocation()
    const data=location.state?.age;
  return (
    <>
    <div>data:{data}</div>
   
    </>
  )
}

export default PracTest