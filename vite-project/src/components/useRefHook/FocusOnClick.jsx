import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
function FocusOnClick() {


    const btnclick = useRef();

    const click = () => {
        btnclick.current.focus()
    }


    return (
        <>
            <div>
                <input type='text' ref={btnclick}></input>
                <button onClick={click} >click me</button>
            </div>

        </>
    )
}

export default FocusOnClick