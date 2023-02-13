import { useState, useEffect } from "react";

interface Theming {
  colorTheme: "dark" | "light",
  setTheme:React.Dispatch<string>
}
export default function useDarkMode(): Theming {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return {colorTheme, setTheme};
}
