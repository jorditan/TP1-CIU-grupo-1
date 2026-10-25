import { Search } from "lucide-react";
import styles from "./BarraBusqueda.module.css";

function BarraBusqueda({
  placeholder,
  onChange,
  value,
  onSearch,
  inputProps,
}) {
  return (
    <form
      role="search"
      className={styles.searchBarContainer}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch?.(new FormData(e.currentTarget).get("search"));
      }}
    >
      <Search className={styles.searchIcon} aria-hidden="true" />
      <input
        type="search"
        name="search"
        aria-label="Buscar libros"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...inputProps}
      />
    </form>
  );
}

export default BarraBusqueda;
