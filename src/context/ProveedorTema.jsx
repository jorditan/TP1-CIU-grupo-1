import { useState } from "react";
import { ContextoTema } from "./ContextoTema";
import { aplicarTema, obtenerTema } from "../utils/tema";

export default function ProveedorTema({ children }) {
  const [theme, setTheme] = useState(obtenerTema);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    aplicarTema(nextTheme);
    setTheme(nextTheme);
  };

  return (
    <ContextoTema.Provider value={{ theme, toggleTheme }}>
      {children}
    </ContextoTema.Provider>
  );
}
