import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
/**
 * Requirement: tạo ra 1 bộ máy countdown có thể start và stop, sử dụng useRef để hỗ trợ
 * Bonus: sau đó tìm cách in ra giá trị trước và sau của count sau mỗi giây đếm ngược.
 */
function CountDownRef() {
  const [num, setNum] = useState(60);
  const timerID = useRef();
  const prevNum = useRef();
  console.log(num);
  useEffect(() => {
    console.log("effect");
    prevNum.current = num;
    console.log(prevNum.current);
  }, [num]);

  const handleStartBtn = () => {
    timerID.current = setInterval(() => {
      console.log("start setNum");
      setNum((prev) => prev - 1);
    }, 1000);
  };
  const handleStopBtn = () => {
    clearInterval(timerID.current);
  };

  console.log(num, prevNum.current);

  return (
    <div>
      {console.log("render")}
      <h1>{num}</h1>
      <button onClick={handleStartBtn}>Start</button>
      <button onClick={handleStopBtn}>Stop</button>

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

export default CountDownRef;
