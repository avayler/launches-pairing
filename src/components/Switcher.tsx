import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

export default function Switcher() {
  const {colorTheme, setTheme} = useDarkMode();
  return (
    <button
      className="btn bg-slate-200 dark:bg-slate-600 mt-4"
      onClick={() => setTheme(colorTheme)}
    >
      Switch mode
    </button>
  );
}
