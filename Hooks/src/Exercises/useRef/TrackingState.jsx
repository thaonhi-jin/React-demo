import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
/**
 * Requirement: In ra giá trị trước và sau của đoạn text nhập vào
 * (cập nhật liên tục ngay khi thay đổi bất kì kí tự nào)
 * https://www.w3schools.com/react/showreact.asp?filename=demo2_react_useref3
 */
function TrackingState() {
  const [value, setValue] = useState("");
  const prevValue = useRef();
  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <p>Current Text: {value}</p>
      <p>Previous Text: {prevValue.current}</p>

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

export default TrackingState;
