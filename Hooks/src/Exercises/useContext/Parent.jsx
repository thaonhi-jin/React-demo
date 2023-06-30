import React from "react";
import Form from "./Form";
import { ThemeProvider, InputProvider } from "./Context";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
/**
 * Requirement: Điều chỉnh theme dark/light cho Result (component con) từ nút Toggle ở ThemeToggle (component cha)
 *              Nhập dữ liệu từ Form, hiển thị kết quả ở Result
 */
function ThemeToggle() {
  return (
    <ThemeProvider>
      <InputProvider>
        <Form />
      </InputProvider>

      <NavLink to="/">
        <Button
          variant="outlined"
          style={{
            color: "royalblue",
            borderColor: "royalblue",
            margin: "20px",
          }}
          startIcon={
            <ArrowRightAltIcon style={{ transform: "rotate(180deg)" }} />
          }
        >
          Back
        </Button>
      </NavLink>
    </ThemeProvider>
  );
}

export default ThemeToggle;
