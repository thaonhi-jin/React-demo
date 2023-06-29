import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function RandomGifts() {
  const [gift, setGift] = useState();
  const gifts = ["CPU i9", "RAM 32GB", "RGB Keyboard"];
  const handleTakeGift = () => {
    let randomNum = Math.floor(Math.random() * gifts.length);
    setGift(gifts[randomNum]);
    console.log(randomNum);
  };
  return (
    <div>
      <h1>{gift || "No gifts here."}</h1>
      <button onClick={handleTakeGift}>Take it!</button>

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

export default RandomGifts;
