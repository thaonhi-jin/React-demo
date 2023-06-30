import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
/**
 * Requirement: Nhập dữ liệu trong input và thay đổi title theo dữ liệu
 */
function UpdateTitle() {
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    document.title = title;
  });
  return (
    <div>
      <input type="text" onChange={handleTitleChange} />

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

export default UpdateTitle;
