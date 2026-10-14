import { Button } from "react-bootstrap";
import {ShoppingCart} from "lucide-react";
import styles from "./CartButton.module.css";

function CartButton({ items, onClick }) {
  return (
    <>
       <Button className={styles.cartButton} variant="outline-secondary" onClick={onClick} >
          <span className="cart-count">{items}</span>
          <ShoppingCart className={styles.cartIcon} aria-hidden="true" />
      </Button>
    </>
  );
}

export default CartButton;
