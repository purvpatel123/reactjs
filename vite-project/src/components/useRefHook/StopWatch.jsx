import React, { useState, useRef } from "react";

function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null); // stores setInterval ID

  // Start the timer
  const handleStart = () => {
    if (intervalRef.current !== null) return; // already running
    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  // Stop the timer
  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // Reset the timer
  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2> Stopwatch</h2>
      <h1>{seconds} sec</h1>
      <button onClick={handleStart}>Start</button>{" "}
      <button onClick={handleStop}>Stop</button>{" "}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default StopWatch;
