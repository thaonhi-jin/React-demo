import React, { useState } from "react";

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
    </div>
  );
}

export default RandomGifts;
