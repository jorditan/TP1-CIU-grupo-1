import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import ProveedorCarrito from "./context/ProveedorCarrito.jsx";
import { BrowserRouter } from "react-router-dom";
import ProveedorTema from "./context/ProveedorTema";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProveedorCarrito>
        <ProveedorTema>
          <App />
        </ProveedorTema>
      </ProveedorCarrito>
    </BrowserRouter>
  </StrictMode>,
);