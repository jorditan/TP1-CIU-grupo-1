import { Search } from "lucide-react";
import styles from "./Searchbar.module.css";

function SearchBar({
  placeholder,
  onChange,
  value,
  onSearch,
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
      />
    </form>
  );
}

export default SearchBar;
