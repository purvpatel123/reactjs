import React from 'react';
function Hello(props) {
    return( 
   <>
    <h1>Hello, {props.name}!</h1>
    <p>You clicked <strong>{props.count}</strong> times</p>
      <button onClick={props.handleClick}>Click Me</button>
   </>
)
}
export default Hello;