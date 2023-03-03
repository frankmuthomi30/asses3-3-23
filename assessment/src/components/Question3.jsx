import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(function() {
    const start = setInterval(() => {
      setCount(function (count){
        count + 1;
      } 
    , 1000);})

    return () => clearInterval(start);
  }, []);

  return (
    <div>
      <h1>Count:{count}</h1>
    </div>
  );
}

export default Timer;
