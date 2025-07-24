import React, { useEffect, useRef } from 'react'

function FocusOnMount() {
    const inputRef = useRef(null);
    
useEffect(()=>{
inputRef.current.focus();
},[])



    return (
        <>
            <div>
                <input type='text' placeholder='enter the text' ref={inputRef}></input>
            </div>


        </>
    )
}

export default FocusOnMount