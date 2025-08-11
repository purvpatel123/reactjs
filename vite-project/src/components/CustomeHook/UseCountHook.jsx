import React, { useState } from 'react'

function UseCountHook(initialCount=0) {

    const [count,setCount]=useState(initialCount);
    const increment=()=>{
        setCount(count=>(Math.min(count+1,10))
        )
    }
    const decrement=()=>{
        setCount(count=>Math.max(
             count-1, 0
        ))
    }
    const reset=()=>{
        setCount(count=>{
            return count=initialCount
        })
    }
  return {count,increment,decrement,reset}
}

export default UseCountHook;