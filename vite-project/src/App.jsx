
// import React from 'react'
// import { useState } from 'react'
// function App() {
//   // const colors=["red","green","blue","white","yellow"]
//   // const [count, setCount] = useState(0)
//   // const [text, setText] = useState(" ")
//   // const [togel, setTogel] = useState(true)
//   // const [hide, setHide] = useState(true)
//   // const [color,setColor]=useState("white")
//   // const [text,setText]=useState("")
//   // const [todo,setTodo]=useState([])
//   // const [activeState,setActiveState]=useState('home')
//   // const [age,setAge]=useState(0)
//   // const [name,setName]=useState("")
//   const [step,setStep]=useState(1)
//   return (
//     <>

//     {/* <div>
//       <div>
//         <h1>Counter App</h1>
//         <button onClick={() => {
//           setCount(count + 1)
//         }}>increse</button>
//         <div>{count}</div>
//         <button onClick={() => {
//           setCount(count - 1)
//         }}>decrese</button>
//       </div>
//       <div>

//         <input onChange={(e) => {
//           setText(e.target.value)

//         }}></input>
//         <p>{text}</p>

//       </div>
//       <div>
//         <button onClick={() => {
//           setTogel(!togel)
//         }}>
//           {togel ? "on" : "of"}
//         </button>
//       </div>


//       <div>
//         <button onClick={() => {
//           setHide(!hide)
//         }}>
//           click
//         </button>
//         <div>{hide && <p>hello aksh</p>}</div>
//       </div>

// <div>
//   <button onClick={()=>{
//      const randomIndex = Math.floor(Math.random() * colors.length);
//     setColor(colors[randomIndex])
//   }}>click</button>
//   <p>{color}</p>
// </div>

//     </div> */}

//    {/* <div>
//     <div>
//     <input type='text'
//     value={text}
//     onChange={(e)=>{
//       setText(e.target.value)
//     }}
//     ></input>
//     <p>enter the text:{text}</p>
//    </div>
//    <button onClick={()=>{
//     setTodo([...todo,text])
//     setText(" ");
//    }}>add todo</button>
    
// <ul>
//   {todo.map((to,index)=>(
// <li key={index}>{to}</li>
//   ))}
// </ul>
//    </div> */}

// {/* 
//    <div>
//     <button onClick={()=>{
//       setActiveState("home")
//     }}>home</button>
//     <button onClick={()=>{
//       setActiveState("about")
//     }}>about</button>
//     <button onClick={()=>{
//       setActiveState("content")
//     }}>content</button>


// <p>welcome to {activeState}</p>

//    </div> */}

//    {/* <div>
//     <form >
//       <input type='text' value={name} placeholder='enter your name' onChange={(e)=>{
//         setName(e.target.value)
//       }}></input>

//       <input type='number' value={age} onChange={(e)=>{
//         setAge(e.target.value)
//       }}></input>
// <button onClick={()=>{
//   setAge("")
//   setName("")
// }}>reset</button>
//     </form>
//    </div> */}



// <div>
// {step===1 && 
// <div>
//   <input placeholder='enter your name'></input>
//   <button  onClick={()=>{
//     setStep(step+1)
//   }} >next</button>
// </div>
//   }

//   {step===2 && 
// <div>
//   <input placeholder='enter your age'></input>
//   <button  onClick={()=>{
//     setStep(step-1)
//   }} >prev</button>
// </div>
//   }

// </div>


//     </>
//   )
// }

// export default App




// App.js



import React from 'react'
import UseEffectPrac from './components/useEffects/DegitalWatch'
import WidthTracker from './components/useEffects/WidthTracker'
import Featch from './components/useEffects/Featch'
function App() {
  return (
    <>
    {/* <UseEffectPrac/> */}
    {/* <WidthTracker/> */}
    <Featch/>
    </>
  )
}

export default App