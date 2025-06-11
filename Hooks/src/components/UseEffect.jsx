//in simple term if useEffect have no dependency array it will run after every render
//if useEffect have empty dependency array it will run only once after the first render
//if useEffect have dependency array it will run only when the values in the array change

// import React, { useState, useEffect } from 'react'

// function UseEffect() {

//     const [count, setCount] = useState(0)
//     const [value, setValue] = useState(0)
//     useEffect(() => {
//         console.log("useEffect called")
//     }, [count, value])

//     return (
//         <>
//             <h1>useEffect hook demo</h1>
//             <h2>count:{count}</h2>
//             <button onClick={() => setCount(count + 1)}>increment</button>

//             <h1>useEffect hook demo</h1>
//             <h2>count:{value}</h2>
//             <button onClick={() => setValue(value - 1)}>decrement</button>

//         </>
//     )
// }

// export default UseEffect

//🧠 What Is a Cleanup Function?

// In React, if you use something that keeps running in the background (like a timer, API subscription, or event listener),
// you need to stop it when the component goes away — otherwise it wastes memory or causes bugs.



// ✅ Real Example: Timer
import React, { useEffect } from 'react';
function UseEffect() {

    useEffect(() => {
    const timer = setInterval(() => {
        console.log("Running interval");
    }, 2000);

    // Cleanup part
    return () => {
        clearInterval(timer);  // Stops the timer
        console.log("Cleanup called");
    };
}, []);
    return (
        <div>
            <h1>useEffect Cleanup Example</h1>
            <p>Check the console to see the timer running and cleanup message.</p>
        </div>
    );
}

export default UseEffect