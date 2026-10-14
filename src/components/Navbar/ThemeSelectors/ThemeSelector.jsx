import { useState } from "react";
import {Sun, Moon} from "lucide-react";
import Button from "react-bootstrap/Button";

function ThemeSelector() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <>
      <Button variant="outline-secondary" onClick={toggleTheme} className="theme-selector">
          {theme === "light" ? <Sun /> : <Moon />}
      </Button>
    </>
  );
}

export default ThemeSelector;
