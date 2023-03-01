import { ReactComponent as Sun } from "../assets/svg/sun.svg";
import { ReactComponent as Moon } from "../assets/svg/moon.svg";
import { ReactComponent as Rocket } from "../assets/svg/rocket2.svg";
import useDarkMode from "../hooks/useDarkMode";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Switcher() {
  const { themeMode, toggle } = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
 

  useEffect(() => {
     setIsDarkMode(themeMode === "dark" ? true : false);
    const root = window.document.documentElement;
    root.classList.remove(themeMode === "dark" ? "light" : "dark");
    root.classList.add(themeMode);
  }, [themeMode]);

  const themeVariants = {
    animate: {
      rotateY: !isDarkMode ? 0 : 180,
    },
  };
  const rocketVariants = {
    init: {
      x: "-70vw",
      opacity: 0,
    },
    animate: {
      x: isDarkMode ? "0vw" : "-70vw",
      opacity: !isDarkMode ? 0 : 1,
      transition: { duration: 2, delay: 2 },
    },
  };
  return (
    <>
      <motion.button
        id="theme-toggle"
        variants={themeVariants}
        initial="animate"
        animate="animate"
        className="m-6 flex justify-start w-36 cursor-pointer"
        onClick={() => {
          toggle();
        }}
      >
        <motion.div
          className="w-10 h10 m-1"
          variants={rocketVariants}
          initial="init"
          animate="animate"
        >
          <Rocket className="rotate-45  dark:fill-slate-200  " />
        </motion.div>
        {isDarkMode && (
          <Moon
            id="moon-icon"
            className=" fill-slate-200 w-8 h-8 m-2 stroke-0"
          />
        )}
        {!isDarkMode && (
          <Sun id="sun-icon" className=" fill-slate-800 w-8 h-8 m-2 z-10" />
        )}
      </motion.button>
    </>
  );
}
