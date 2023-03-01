import { ILaunchDataMap } from "../App";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";
import { GetCoreTooltipContent } from "./tooltipHelpers/GetCoreTooltipContent";
import { GetPayloadTooltipContent } from "./tooltipHelpers/GetPayloadTooltipContent";

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

const Card: React.FC<ILaunchDataMap> = ({
  name,
  date_utc,
  core,
  payloads,
  image,
  failureReasons,
}: ILaunchDataMap) => {
  const { mouseEnterCoreHandler, coreTooltipContent } = GetCoreTooltipContent(
    core,
    name
  );

  return (
    <motion.div
      id="card"
      className="card hover:shadow-lg dark:shadow-none hover:dark:shadow-none  overflow-visible"
    >
      <div className="bg-slate-200 dark:bg-slate-700 w-full rounded-tl-[77px] rounded-tr-xl">
        <div className="font-bold font-head p-4 ml-36 text-end tracking-wider">
          Name: <span className="uppercase text-4xl ">{name}</span>
        </div>
      </div>
      <motion.div
        className="rounded-full object-cover w-[180px] h-[180px] absolute -top-4 -left-4 bg-slate-100 dark:bg-slate-800  shadow-lg border-dashed dark:border-dashed border-4 border-slate-500"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img className="h-44 p-6" src={image} alt={name} />
      </motion.div>
      <div className="font-body text-end">
        <div
          className="font-black m-2 tracking-wide"
          onMouseEnter={mouseEnterCoreHandler}
        >
          <Tooltip
            tooltipContent={coreTooltipContent()}
            children={<div className="pl-[130px]">Core Id: {core} </div>}
          />
        </div>
        <div className="m-2">Date UTC: {date_utc}</div>
        <div className="m-2">
          Payloads:
          {payloads.map((payload, index) => {
            const { mouseEnterPayloadHandler, payloadTooltipContent } =
              GetPayloadTooltipContent(payload, name);
            return (
              <div
                className="text-end"
                key={index}
                onMouseEnter={mouseEnterPayloadHandler}
              >
                <Tooltip
                  tooltipContent={payloadTooltipContent()}
                  children={<div>Id: {payload} </div>}
                />
              </div>
            );
          })}
        </div>
      </div>
      {failureReasons.length > 0 && (
        <div>
          <Tooltip
            children={
              <div className="font-black font-head uppercase text-2xl w-fit bg-red-200 dark:bg-red-900 p-3 rounded-tr-xl rounded-bl-xl ">
                Failure
              </div>
            }
            tooltipContent={
              <div>
                {failureReasons.map((reason, index) => (
                  <div key={index}>{reason}</div>
                ))}
              </div>
            }
            addStyle="bg-red-100/80 dark:bg-red-900/80"
          />
        </div>
      )}
      {failureReasons.length === 0 && (
        <div className="font-black font-head uppercase text-2xl w-fit bg-slate-100 dark:bg-slate-700 p-3 rounded-tr-xl rounded-bl-xl">
          Success
        </div>
      )}
    </motion.div>
  );
};
export default Card;
