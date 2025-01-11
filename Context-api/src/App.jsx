import React, { createContext } from 'react'
import A1 from './A1'



const data=createContext()
const data1=createContext()


function App() {
const name = "pranshu"
const gender = "male"
  return (
  <data.Provider value={name}>
    <data1.Provider value={gender}>
  <A1/>
  </data1.Provider>
  </data.Provider>
  )
}

export default App
export {data,data1};
