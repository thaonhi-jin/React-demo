import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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

      <NavLink to="/">
        <Button
          variant="outlined"
          style={{
            color: "plum",
            borderColor: "plum",
            margin: "20px",
          }}
          startIcon={
            <ArrowRightAltIcon style={{ transform: "rotate(180deg)" }} />
          }
        >
          Back
        </Button>
      </NavLink>
    </div>
  );
}

export default Counter;
