import { useState } from "react"
import React from "react"
export default function LudoBoard() {
   let [moves, setMoves] = useState({blue:0, red:0, yellow:0, green:0})
   

let updateBlue=()=>{
    setMoves({...moves, blue:moves.blue+1})
    console.log("Blue moves=", moves.blue)

}
let updateYellow=()=>{
    setMoves({...moves, yellow:moves.yellow+1})
    console.log("yellow moves=", moves.yellow)

}
let updateRed=()=>{
    setMoves({...moves, red:moves.red+1})
    console.log("Red moves=", moves.red)

}
let updateGreen=()=>{
    setMoves({...moves, green:moves.green+1})
    console.log("green moves=", moves.green)

}

    return (
       
       
       <>
          <p>Game begin!</p>
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>red moves={moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
                <p>yellow moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>green moves={moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>

                </div>

        </>

    )
}