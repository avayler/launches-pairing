import React, { useState } from "react";
import { motion } from "framer-motion";

interface ITooltipProps {
  tooltipContent: any;
  children: React.ReactElement;
  addStyle?: string;
}

const Tooltip: React.FC<ITooltipProps> = ({
  tooltipContent,
  children,
  addStyle = "bg-slate-300/80 dark:bg-slate-900/90",
}: ITooltipProps) => {
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
    <div className="relative">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
      <motion.div
        className={`absolute bottom-full ${addStyle} p-4 rounded-lg w-full backdrop-blur-sm font-normal`}
        variants={hoveredVariants}
        initial="init"
        animate="animate"
      >
        {tooltipContent}
      </motion.div>
    </div>
  );
};

export default Tooltip;
