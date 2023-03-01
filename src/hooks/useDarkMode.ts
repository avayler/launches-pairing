// import { useState, useEffect } from "react";

// interface Theming {
//   colorTheme: "dark" | "light";
//   setTheme: React.Dispatch<string>;
// }

// export default function useDarkMode(): Theming {
//   const [theme, setTheme] = useState(localStorage.theme);
//   const colorTheme = theme === "dark" ? "light" : "dark";

//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.classList.remove(colorTheme);
//     root.classList.add(theme);
//     localStorage.setItem("theme", theme);
//   }, [theme, colorTheme]);

//   return { colorTheme, setTheme };
// }
import { useLocalStorage } from "usehooks-ts";

interface UseDarkModeOutput {
  themeMode: string;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

function useDarkMode(defaultValue?: string): UseDarkModeOutput {
  const [themeMode, setThemeMode] = useLocalStorage<string>("theme", "dark");

  return {
    themeMode,
    toggle: () => setThemeMode((prev) => (prev === "dark" ? "light" : "dark")),
    enable: () => setThemeMode("dark"),
    disable: () => setThemeMode("light"),
  };
}

export default useDarkMode;
