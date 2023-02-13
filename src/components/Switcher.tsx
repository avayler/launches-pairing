import { ReactComponent as Sun } from "../assets/svg/sun.svg";
import { ReactComponent as Moon } from "../assets/svg/moon.svg";
import { ReactComponent as Rocket } from "../assets/svg/soloRocket.svg";
import useDarkMode from "../hooks/useDarkMode";
import { motion } from "framer-motion";
const themeVariants ={
  left:{
    rotateY:0
  },
  right:{
    rotateY:180
  }
}
export default function Switcher() {
  const {colorTheme, setTheme} = useDarkMode();
  return (
    <>
      <motion.div
      variants={themeVariants}
      animate={colorTheme==="light"?"left":"right"}
        className="m-6 flex justify-start w-28  cursor-pointer"
        onClick={() => {
          setTheme(colorTheme)
        }}
      >
        <Rocket className="w-8 h-8 rotate-45 m-1 dark:fill-slate-200  " />
        {colorTheme === "light" && (
          <Moon className=" fill-slate-200 w-8 h-8 m-1 stroke-0" />
        )}
        {colorTheme === "dark" && (
          <Sun className=" fill-slate-800 w-8 h-8 m-1" />
        )}
      </motion.div>
    </>
  );
}
