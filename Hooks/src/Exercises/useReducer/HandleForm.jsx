import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const initialInfo = {
  username: "",
  age: "",
  email: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Update":
      return {
        ...state,
        ...action.data,
      };
    case "Reset":
      return initialInfo;
    default:
      return state;
  }
};
function HandleForm() {
  const [info, dispatch] = useReducer(reducer, initialInfo);
  const handleInput = (e) => {
    dispatch({
      type: "Update",
      data: {
        [e.target.name]: e.target.value,
      },
    });
  };
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="usename" onChange={handleInput} />
      <br />
      <label htmlFor="age">Age</label>
      <input type="text" name="age" id="age" onChange={handleInput} />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={handleInput} />
      <hr />
      <p>Username: {info.username}</p>
      <p>Age: {info.age}</p>
      <p>Email: {info.email}</p>
      <button
        onClick={() =>
          dispatch({
            type: "Reset",
          })
        }
      >
        Reset
      </button>{" "}
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

export default HandleForm;
