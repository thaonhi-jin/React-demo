import React from "react";
import Form from "./Form";
import { ThemeProvider, InputProvider } from "./Context";
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
    </ThemeProvider>
  );
}

export default ThemeToggle;
