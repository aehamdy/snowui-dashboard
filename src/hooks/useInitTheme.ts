import { useEffect, useState } from "react";
import APP_CONSTANTS from "../constants";

function useInitTheme() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains(APP_CONSTANTS.DARK_THEME_VALUE)
  );
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_KEY);

    if (stored === APP_CONSTANTS.DARK_THEME_VALUE) {
      document.documentElement.classList.add(APP_CONSTANTS.DARK_THEME_VALUE);
      setIsDark(true);
    } else {
      document.documentElement.classList.remove(APP_CONSTANTS.DARK_THEME_VALUE);
      setIsDark(false);
    }

    setReady(true);
  }, []);

  return { ready, isDark };
}

export default useInitTheme;
