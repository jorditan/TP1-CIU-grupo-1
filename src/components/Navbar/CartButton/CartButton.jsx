import { Button } from "react-bootstrap";
import { ShoppingCart } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCarrito } from "../../../hooks/useCarrito";
import styles from "./CartButton.module.css";

function CartButton() {
  const { totalProductos } = useCarrito();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    if (pathname === "/carrito") {
      navigate("/");
    } else {
      navigate("/carrito");
    }
  };

  return (
    <>
      <Button
        className={styles.cartButton}
        variant="outline-secondary"
        onClick={handleClick}
      >
        <span className="cart-count">{totalProductos}</span>
        <ShoppingCart className={styles.cartIcon} aria-hidden="true" />
      </Button>
    </>
  );
}

export default CartButton;