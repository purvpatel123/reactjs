import React, { useMemo, useState } from 'react'

function Factorial() {
    const [num,setNum]=useState()
    const fact=useMemo(()=>{
          let result=1;
          for(let i=1;i<=num;i++){
            result*=i
          }
          return result;
    },[num])


  return (
    <>
    <div>
        <input type='number' value={num} placeholder='Enter a number' min='0' onChange={(e)=>{
            setNum(e.target.value)
        }} />
        <h1>factorial:{fact}</h1>
    </div>
    
    </>
  )
}

export default Factorial