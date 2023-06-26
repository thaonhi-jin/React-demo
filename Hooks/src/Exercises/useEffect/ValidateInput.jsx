import React, { useEffect, useState } from "react";

function ValidateInput() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const validationFunc = (value) => value.length < 5;
  const handleValidation = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    if (validationFunc(name))
      setError("Input is too short (minimum 5 characters)");
    else setError("");
  }, [name]);
  return (
    <div>
      <input type="text" onChange={handleValidation} value={name} />
      <p>{error}</p>
    </div>
  );
}

export default ValidateInput;
