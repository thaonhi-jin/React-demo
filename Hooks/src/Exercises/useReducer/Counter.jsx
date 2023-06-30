import React, { useReducer, useRef } from "react";

import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
/**
 * Requirement: Counter tăng giảm với số lượng tùy ý, reset về giá trị khởi tạo
 * Basic: Counter tăng giảm 1
 */

/**
 * const reducer = (state, action) => {
  switch (action) {
    case "Up":
      return state + 1;
    case "Down":
      return state - 1;
    default:
      return state;
  }
};
 */
const initialVal = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "Up":
      return state + Number(action.payload);
    case "Down":
      return state - Number(action.payload);
    case "Reset":
      return initialVal;
    default:
      return state;
  }
};

function Counter() {
  const [counter, dispatch] = useReducer(reducer, initialVal);
  const payload = useRef();
  return (
    <div>
      <h1>{counter}</h1>
      {console.log("render")}
      <label htmlFor="payload">Nhập số lượng tăng/giảm: </label>
      <input
        type="number"
        id="payload"
        onChange={(e) => (payload.current = e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          dispatch({
            type: "Up",
            payload: payload.current,
          });
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "Down",
            payload: payload.current,
          });
        }}
      >
        Down
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({
            type: "Reset",
          });
        }}
      >
        Reset
      </button>
      <br />

      <NavLink to="/">
        <Button
          variant="outlined"
          style={{
            color: "orangered",
            borderColor: "orangered",
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
