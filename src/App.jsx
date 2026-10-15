import "./App.css";
import MainLayout from "./pages/MainLayout.jsx";
import Inicio from "./pages/inicio/Inicio.jsx";
import Carrito from "./pages/Carrito.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Inicio />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<p>Página no encontrada</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
