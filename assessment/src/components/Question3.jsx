import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  function handleClick() {
    const start = setInterval(function() {
      setCount(function(count) {
        return count + 1;
      });
    }, 1000);

    return function() {
      clearInterval(start);
    }
  }

  useEffect(function() {
    const cleanup = handleClick();
    return function() {
      cleanup();
    }
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Start</button>
    </div>
  );
}

export default Timer;
