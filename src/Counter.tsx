import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
	
  function increment() {
    setCount(count + 1);
  }

  return <div>
    Counter {count}.
    <button onClick={() => increment()}>
      Increment
    </button>
  </div>
}