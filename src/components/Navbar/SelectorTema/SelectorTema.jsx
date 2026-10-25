import { useTema } from "../../../hooks/useTema";
import { Sun, Moon } from "lucide-react";
import Button from "react-bootstrap/Button";

function SelectorTema() {
  const { theme, toggleTheme } = useTema();

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

export default SelectorTema;
