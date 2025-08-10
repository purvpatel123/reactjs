import React from 'react'
import UseCountHook from './UseCountHook'
function Counter() {
    const {count,increment,decrement,reset}=UseCountHook()
  return (
    <>
    <h1>count:{count}</h1>
    <button onClick={increment}>increase the value</button>
    <button onClick={decrement}>decrese the value</button>
    <button onClick={reset}>reset the value</button>
    </>
  )
}

export default Counter