import React, { createContext, useState } from "react";

const ThemeContext = createContext();
const InputContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const value = {
    theme,
    handleToggle,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function InputProvider({ children }) {
  const [inputVal, setInputVal] = useState("");
  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };
  const value = {
    inputVal,
    handleInputChange,
  };
  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
}

export { ThemeContext, ThemeProvider, InputContext, InputProvider };
