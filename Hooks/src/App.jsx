import React from 'react'
import UseMemo from './components/useMemo'
import UseReducer from './components/UseReducer'
import UseEffect from './components/UseEffect'
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Timer</button>
      {show && <UseEffect />}
     {/* <UseMemo/> */}
     {/* <UseReducer/> */}
    </div>
  );
}

export default App;