import React, { useContext } from "react";
import { ThemeContext, InputContext } from "./Context";

function Result() {
  const ThemeContextVal = useContext(ThemeContext);
  const InputContextVal = useContext(InputContext);
  return (
    <div className={ThemeContextVal.theme}>
      Result: Hello {InputContextVal.inputVal}
    </div>
  );
}

export default Result;
