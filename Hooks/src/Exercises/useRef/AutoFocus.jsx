import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
/**
 * Requirement: Khi click vào button thì con trỏ chuột sẽ nằm ở ô Input (ô Input được focus)
 * https://www.w3schools.com/react/showreact.asp?filename=demo2_react_useref2
 *
 * Bonus: Sau khi submit những thông tin đã điền vào form, app sẽ quay lại focus vào input đầu tiên
 *        để tiếp tục nhập thông tin cho lần sau.
 * https://blog.logrocket.com/how-to-autofocus-using-react-hooks/
 * https://surajsharma.net/blog/auto-focus-input-element-in-react
 */
function AutoFocus() {
  //Basic:
  const focusInput = useRef();
  const handleFocusInput = () => {
    focusInput.current.focus();
  };

  return (
    <div>
      <input type="text" ref={focusInput} />
      <button onClick={handleFocusInput}>Focus Input</button>

      <NavLink to="/">
        <Button
          variant="outlined"
          style={{
            color: "goldenrod",
            borderColor: "goldenrod",
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

export default AutoFocus;
