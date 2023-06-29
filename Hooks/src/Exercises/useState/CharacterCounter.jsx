import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function CharacterCounter() {
  const [counter, setCounter] = useState(0);
  const handleCharacterCounter = (e) => {
    setCounter(e.target.value.length);
  };
  return (
    <div>
      <textarea
        name="characterCounter"
        id="characterCounter"
        cols="30"
        rows="10"
        onChange={handleCharacterCounter}
      ></textarea>
      <p>Character Counter: {counter}</p>

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

export default CharacterCounter;
