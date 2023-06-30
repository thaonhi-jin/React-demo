import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function CountDown() {
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    if (timer <= 0) return;
    // const handleCountDown = setInterval(() => setTimer(timer - 1), 1000);
    const handleCountDown = setInterval(() => {
      setTimer((prev) => prev - 1);
      console.log(timer);
    }, 1000);
    return () => {
      clearInterval(handleCountDown);
    };
  }, [timer]);
  return (
    <div>
      <h1>CountDown Timer</h1>
      <p>Time remaining: {timer}</p>

      <NavLink to="/">
        <Button
          variant="outlined"
          style={{
            color: "green",
            borderColor: "green",
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

export default CountDown;
