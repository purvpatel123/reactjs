import React from 'react'

function WithLogger(WrappedComponent) {
  return function Enhanced(props){
    const [count, setCount] = React.useState(0);

  
   
    const handleClick = () => {
      setCount(prev => prev + 1);
      console.log(' Clicked! Count:', count + 1);
    };

    return (
    <WrappedComponent {...props}
    count={count}
    handleClick={handleClick}
    />
  )
  }
}

export default WithLogger;