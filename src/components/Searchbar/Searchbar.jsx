import { Search } from "lucide-react";
import styles from "./Searchbar.module.css";

function SearchBar({ placeholder = "Buscar en...", onChange, value, onSearch }) {
  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        aria-label="Buscar"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch?.(e.currentTarget.value);
        }}

      />
      <Search className={styles.searchIcon} aria-hidden="true" />

    </div>
  );
}

export default SearchBar;
