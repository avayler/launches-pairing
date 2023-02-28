import React, { useState } from "react";
import { motion } from "framer-motion";

interface TooltipProps {
  text: any;
  children: React.ReactElement;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoveredVariants = {
    animate: {
      y: isHovered ? 0 : -10,
      opacity: isHovered ? 1 : 0,
      display: "block",
      transitionEnd: {
        display: isHovered ? "block" : "none",
      },
    },
  };
  return (
    <>
      <div className="relative">
        <motion.div
          className="absolute bottom-full bg-slate-300/80 dark:bg-slate-800 p-4 rounded-lg w-full backdrop-blur-sm font-normal"
          variants={hoveredVariants}
          initial="init"
          animate="animate"
        >
          {text}
        </motion.div>
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default Tooltip;
