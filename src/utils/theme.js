export function getTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    console.error(error);
  }
}
