import APP_CONSTANTS from "../constants";

const toggleTheme = () => {
  const html = document.documentElement;
  const isDark = html.classList.contains(APP_CONSTANTS.DARK_THEME_VALUE);

  if (isDark) {
    html.classList.remove("dark");
    localStorage.removeItem(APP_CONSTANTS.LOCAL_STORAGE_KEY);
  } else {
    html.classList.add("dark");

    localStorage.setItem(
      APP_CONSTANTS.LOCAL_STORAGE_KEY,
      APP_CONSTANTS.DARK_THEME_VALUE
    );
  }
};

export default toggleTheme;
