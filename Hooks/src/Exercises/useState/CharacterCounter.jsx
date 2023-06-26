import React, { useState } from "react";

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
    </div>
  );
}

export default CharacterCounter;
