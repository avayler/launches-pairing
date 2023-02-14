import React from "react";
import { LaunchDataMap } from "../App";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    scale: 0.7,
    opacity: 1,
    transition: { type: "spring", delay: 0.75 },
  },
};

const Card: React.FunctionComponent<LaunchDataMap> = (props: LaunchDataMap) => {
  const { name, date_utc, core, payloads, image, failureReasons } = props;
  return (
    <motion.div className="card hover:shadow-lg dark:shadow-none hover:dark:shadow-none h-80 overflow-hidden ">
      <div className="bg-slate-200 dark:bg-slate-700 w-full ">
        <div className="font-bold font-head p-4 ml-36 text-end tracking-wider">
          Name: <span className="uppercase text-4xl ">{name}</span>
        </div>
      </div>
      <motion.div
        className="rounded-full object-cover overflow-hidden w-48 absolute -top-4 -left-4 bg-slate-100 dark:bg-slate-800 shadow-lg border-dashed dark:border-dashed border-4 border-slate-500  "
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img className="h-48 p-6 " src={image} alt={name} />
      </motion.div>
      <div className="font-body text-end">
        <div className=" font-black m-2 tracking-wide">Core Id: {core}</div>
        <div className="m-2">Date UTC: {date_utc}</div>
        <div className="m-2">
          Payloads:
          {payloads.map((item, index) => (
            <div className="text-end" key={index}>
              Id: {item}
            </div>
          ))}
        </div>
      </div>
      {failureReasons.length > 0 && (
        <div className="absolute bottom-0 flex bg-red-100 dark:bg-red-900 p-4 w-full">
          <div className="absolute bottom-0 left-0 font-black font-head uppercase text-2xl p-2 h-13 ">
            Failure
          </div>
          {failureReasons.map((reason, index) => (
            <div className=" ml-28 font-body text-xs text-end" key={index}>
              {reason}
            </div>
          ))}
        </div>
      )}
      {failureReasons.length === 0 && (
        <div className="font-black font-head uppercase text-2xl absolute bottom-0 bg-slate-100 dark:bg-slate-700 p-3 rounded-tr-xl">
          Success
        </div>
      )}
    </motion.div>
  );
};
export default Card;
