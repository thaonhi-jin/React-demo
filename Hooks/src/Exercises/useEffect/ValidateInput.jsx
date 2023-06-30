import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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

export default ValidateInput;
