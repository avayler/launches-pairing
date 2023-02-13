import { ReactComponent as Sun } from "../assets/svg/sun.svg";
import { ReactComponent as Moon } from "../assets/svg/moon.svg";
import { ReactComponent as Rocket } from "../assets/svg/rocket2.svg";
import useDarkMode from "../hooks/useDarkMode";
import { motion } from "framer-motion";


export default function Switcher() {
  const { colorTheme, setTheme } = useDarkMode();
  const themeVariants = {
    animate: {
      rotateY: colorTheme === "dark" ? 0 : 180,
    },
  };
  const rocketVariants = {
    init: {
      x: colorTheme === "dark" ? "-100vw" : "0vw",
    },
    animate: {
      x: colorTheme === "light" ? "0vw" : "-100vw",
      opacity: colorTheme === "dark" ? 0 : 1,
      transition: { duration: 2, delay: 1 },
    },
  };
  return (
    <>
      <motion.div
        variants={themeVariants}
        initial="animate"
        animate="animate"
        className="m-6 flex justify-start w-36 cursor-pointer"
        onClick={() => {
          setTheme(colorTheme);
        }}
      >
        <motion.div className="w-10 h10 m-1" variants={rocketVariants} initial="init" animate="animate">
          <Rocket className="rotate-45  dark:fill-slate-200  " />
        </motion.div>
        {colorTheme === "light" && (
          <Moon className=" fill-slate-200 w-8 h-8 m-2 stroke-0" />
        )}
        {colorTheme === "dark" && (
          <Sun className=" fill-slate-800 w-8 h-8 m-2" />
        )}
      </motion.div>
    </>
  );
}
