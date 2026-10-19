import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import CarritoProvider from "./context/CarritoProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CarritoProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CarritoProvider>
    </BrowserRouter>
  </StrictMode>,
);