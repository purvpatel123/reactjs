import React from "react";
import { useState, useRef, useEffect } from "react";
function ShowPrev() {
    const [inputValue, setInputValue] = useState()
const prevRef=useRef("")

    useEffect(() => {
prevRef.current=inputValue;
    },[inputValue])

    
    return (
        <>
            <div>
             <p>previous value:{prevRef.current}</p>


                <input type="text" onChange={(e) => {
                    setInputValue(e.target.value)
                }}></input>
                <p>current value : {inputValue}</p>
            </div>

        </>
    )
}

export default ShowPrev