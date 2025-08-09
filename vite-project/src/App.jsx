
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
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import WidthTracker from './components/useEffects/WidthTracker'
import Featch from './components/useEffects/Featch'
import SearchWithDebounce from './components/useEffects/SearchWithDebounce'


import LazyLoad from './components/LazyLoading/LazyLoad'
import FocusOnMount from './components/useRefHook/FocusOnMount'
import FocusOnClick from './components/useRefHook/FocusOnClick'
import ShowPrev from './components/useRefHook/ShowPrev'
import StopWatch from './components/useRefHook/StopWatch'
import SumCalculate from './components/useMemoHook/SumCalculate'
import Factorial from './components/useMemoHook/Factorial'
import FilterListBase from './components/useMemoHook/FilterListBase'
import Prac from './components/useNavigateHook/Prac'
import PracTest from './components/useLocationHook/PracTest'
import RenderProps from './components/props/RenderProps'
import UserProvider from './components/usecontextHook/UserProvider'
import Profile from './components/usecontextHook/Profile'
 import Profile2 from './components/usecontextHook/Profile2'
import Hello from './components/HOC/Hello'
import WithLogger from './components/HOC/WithLogger'

function App() {
  
     const HelloWithLogger = WithLogger(Hello);
     return (
    <>
     {/* <WidthTracker/> */}
    {/* <Featch/> */}
    {/* <SearchWithDebounce/> */}
{/* <DegitalWatch/> */}
     {/* <LazyLoad/> */}
     {/* <FocusOnMount/> */}
     {/* <FocusOnClick/> */}
     {/* <ShowPrev/> */}
     {/* <StopWatch/> */}
     {/* <SumCalculate/> */}
     {/* <Factorial/> */}
     {/* <FilterListBase/> */}
     
     {/* <BrowserRouter>
     <Routes>
      <Route path="/" element={<Prac/>}/>
       <Route path="/PracTest" element={<PracTest/>}/>
     </Routes>
     </BrowserRouter> */}
     {/* <RenderProps render={
      ({x,y})=>(
        <h1>render position:{x},{y}</h1>
      )
     }
     /> */}
     {/* <UserProvider>
      <Profile/>
      <Profile2/>
     </UserProvider> */}


 <div>
      <HelloWithLogger name="Purv" />
      <HelloWithLogger name="React Learner" />
    </div>
    </>
  )
}

export default App