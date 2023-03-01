import { ReactComponent as Rocket } from "../assets/svg/soloRocket.svg";
import { motion, Variants } from "framer-motion";

const rocketVariants:Variants = {
  init: {
    scale: 0.2,
    rotate: -45,
    x: 0,
    y: 0,
  },
  animate: {
    scale: 0.3,
    rotate: 10,
    x: 100,
    y: -500,
    transition: { duration: 0.5, repeat: Infinity, repeatType: "mirror" },
  },
};
const Loading: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 ">
        <motion.div variants={rocketVariants} initial="init" animate="animate">
          <Rocket className="dark:fill-slate-100 " />
        </motion.div>
        <div
          id="loading"
          className="font-head absolute top-96 left-20 rotate-90 md:rotate-0 uppercase text-6xl dark:text-slate-100"
        >
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loading;
