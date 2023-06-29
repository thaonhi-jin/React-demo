import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Toggle() {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Hello! How do you feel? ^^</p>}

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

export default Toggle;
