import React, { useContext } from "react";
import { FiSun } from "react-icons/fi";
import "./theme.css";
import { ThemeContext, InputContext } from "./Context";
import Result from "./Result";

function Form() {
  const ThemeContextVal = useContext(ThemeContext);
  const InputContextVal = useContext(InputContext);
  return (
    <div className={ThemeContextVal.theme}>
      <FiSun
        style={{ margin: "20px" }}
        onClick={ThemeContextVal.handleToggle}
      />
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        onChange={InputContextVal.handleInputChange}
      />
      {InputContextVal.inputVal !== "" && <Result />}
    </div>
  );
}

export default Form;
