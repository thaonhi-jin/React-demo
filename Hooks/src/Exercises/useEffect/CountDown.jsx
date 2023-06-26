import React, { useEffect, useState } from "react";

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
    </div>
  );
}

export default CountDown;
