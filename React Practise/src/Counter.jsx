import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  console.log("In console ",count);
  const handleIncrement = () => {
    setCount(prev => {
      console.log("Previous state:", prev);
      return prev + 1;
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increase</button>
    </div>
  );
}

export default Counter;