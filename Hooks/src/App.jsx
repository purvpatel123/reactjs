import React, { useMemo, useState } from 'react'

function App() {


  //useMemo hook
  //useMemo is used to memoize expensive calculations

  const [increase, setIncrease] = useState(0)
  const [decrease, setDecrease] = useState(100)

  const calculate = useMemo(() => {  //useMemo takes a function and an array of dependencies
    // This function will only run when 'increase' changes
    console.log("calculating...")
  }, [increase])   // This will only re-calculate when 'increase' changes 


  return (
    <>
      <h1>helllo</h1>
      <button onClick={() => {
        setIncrease(increase + 1)
      }}>increase</button>
      <span>{increase}</span>
      {calculate}<br />
      <br />
      <button onClick={() => {
        setDecrease(decrease - 1)
      }}>decrease</button>
      <span>{decrease}</span>
    </>
  )
}

export default App