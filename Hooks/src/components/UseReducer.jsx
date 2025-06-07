//state → "What is the current data?"
//dispatch → "Send a command to change the state"
//reducer → "Handles what to do when a command comes"
//initialState → "The starting point for the state"

import React, { useReducer } from 'react'
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count : state.count + 1 }
        case 'decrement':
            return { count : state.count - 1 }
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

function UseReducer() {


    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (

        <>
            <button onClick={()=>dispatch({type:'increment'})}>increment</button><br /><span>{state.count}</span><br/>
            <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
        </>
    )
}

export default UseReducer