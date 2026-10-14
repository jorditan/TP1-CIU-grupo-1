import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { applyTheme, getTheme } from "../utils/theme";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getTheme);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
