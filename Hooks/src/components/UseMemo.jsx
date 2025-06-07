import React, { useMemo, useState } from 'react'

function UseMemo() {


  //useMemo hook
  //useMemo is used to memoize expensive calculations

  const [increase, setIncrease] = useState(0)
  const [decrease, setDecrease] = useState(100)
  const [count, setCount] = useState(0)
  const calculate = useMemo(() => {  //useMemo takes a function and an array of dependencies

    console.log("calculating...")
    return setCount(count + increase * 2) // This is an expensive calculation

  }, [increase])   // This will only re-calculate when 'increase' changes 
  // This function will only run when 'increase' changes

  return (
    <>
      <h1>helllo</h1>
      <button onClick={() => {
        setIncrease(increase + 1)
      }}>increase</button>
      <span>{increase}</span>
      {calculate}<br />
      <span>{count}</span>
      <br />
      <button onClick={() => {
        setDecrease(decrease - 1)
      }}>decrease</button>
      <span>{decrease}</span>
    </>
  )
}

export default UseMemo