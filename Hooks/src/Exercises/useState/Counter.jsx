import React from "react";
import { useState } from "react";

/*
1. Counter
  In this exercise, you’re tasked with creating a simple counter component that increments a number every time a button is clicked.

  Expectations:
  - Every time the button is clicked, the number should increment by 1
  - Display the current number state in the text element
*/

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    /**
     * setCount(count + 1);
    console.log(count);
    setCount(count + 1);
    console.log(count);
     */
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;
