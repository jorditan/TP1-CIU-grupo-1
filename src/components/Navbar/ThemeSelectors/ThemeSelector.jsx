import { useTheme } from "../../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import Button from "react-bootstrap/Button";

function ThemeSelector() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Button
        variant="outline-secondary"
        onClick={toggleTheme}
        className="theme-selector"
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </Button>
    </>
  );
}

export default ThemeSelector;
