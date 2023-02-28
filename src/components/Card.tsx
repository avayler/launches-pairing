import React, { useEffect, useState } from "react";
import { ILaunchDataMap, ISpaceXResponse } from "../App";
import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
import {
  spaceXApiConfigCores,
  spaceXApiConfigPayloads,
} from "../configs/spaceXApiConfig";
import Tooltip from "./Tooltip";
import { AxiosResponse } from "axios";

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

const Card: React.FunctionComponent<ILaunchDataMap> = (
  props: ILaunchDataMap
) => {
  const { name, date_utc, core, payloads, image, failureReasons } = props;

  const { mouseEnterCoreHandler, coreTooltipContent } = GetCoreTooltipContent(
    core,
    name
  );
  
  const { mouseEnterPayloadHandler, payloadTooltipContent } =
    GetPayloadTooltipContent(payloads[0], name);

  return (
    <motion.div className="card hover:shadow-lg dark:shadow-none hover:dark:shadow-none h-80 overflow-visible">
      <div className="bg-slate-200 dark:bg-slate-700 w-full rounded-tl-[77px]">
        <div className="font-bold font-head p-4 ml-36 text-end tracking-wider">
          Name: <span className="uppercase text-4xl ">{name}</span>
        </div>
      </div>
      <motion.div
        className="rounded-full object-cover  w-48 absolute -top-4 -left-4 bg-slate-100 dark:bg-slate-800  shadow-lg border-dashed dark:border-dashed border-4 border-slate-500"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img className="h-48 p-6" src={image} alt={name} />
      </motion.div>
      <div className="font-body text-end">
        <div
          className="font-black m-2 tracking-wide"
          onMouseEnter={mouseEnterCoreHandler}
        >
          <Tooltip
            text={coreTooltipContent()}
            children={<div>Core Id: {core} </div>}
          />
        </div>
        <div className="m-2">Date UTC: {date_utc}</div>
        <div className="m-2">
          Payloads:
          {payloads.map((item, index) => (
            <div
              className="text-end"
              key={index}
              onMouseEnter={mouseEnterPayloadHandler}
            >
              <Tooltip
                text={payloadTooltipContent()}
                children={<div>Id: {item} </div>}
              />
            </div>
          ))}
        </div>
      </div>
      {failureReasons.length > 0 && (
        <div className="absolute bottom-0 flex bg-red-100 dark:bg-red-900  p-4 w-full">
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
        <div className="font-black font-head uppercase text-2xl absolute bottom-0 bg-slate-100 dark:bg-slate-700  p-3 rounded-tr-xl">
          Success
        </div>
      )}
    </motion.div>
  );
};
export default Card;
interface ISpaceXCoreResponse extends AxiosResponse {
  serial: string;
  last_update: string;
}
function GetCoreTooltipContent(core: string, name: string) {
  const { data, status, error, refetch, isStale } =
    useFetch<ISpaceXCoreResponse>(spaceXApiConfigCores(core));

  const coreTooltipContent = () => {
    if (status === "error") {
      return <div>Error: {error?.message}</div>;
    }
    if (status === "loading") {
      return <div>"Loading..."</div>;
    }
    if (status === "success") {
      return (
        <>
          <h1 className="uppercase text-xl font-head ">{name} Core data</h1>
          <ul className="list-disc p-4 text-left">
            <li>Core Id: {core}</li>
            <li>Serial: {data?.serial}</li>
            <li>Status: {data?.status}</li>
            {data?.last_update && (
              <li className="text-sm">Last Update: {data?.last_update}</li>
            )}
          </ul>
        </>
      );
    }
  };

  const mouseEnterCoreHandler = () => {
    if (isStale) {
      refetch();
    }
  };
  return { mouseEnterCoreHandler, coreTooltipContent };
}
interface ISpaceXPayloadResponse extends AxiosResponse {
  name: string;
  type: string;
}
function GetPayloadTooltipContent(payload: string, name: string) {
  const { data, status, error, refetch, isStale } =
    useFetch<ISpaceXPayloadResponse>(spaceXApiConfigPayloads(payload));

  const payloadTooltipContent = () => {
    if (status === "error") {
      return <div>Error: {error?.message}</div>;
    }
    if (status === "loading") {
      return <div>"Loading..."</div>;
    }
    if (status === "success") {
      return (
        <>
          <h1 className="uppercase text-xl font-head ">{name} Payload data</h1>
          <ul className="list-disc p-4 text-left">
            <li>Payload Id: {payload}</li>
            <li>Name: {data?.name}</li>
            <li>Type: {data?.type}</li>
          </ul>
        </>
      );
    }
  };

  const mouseEnterPayloadHandler = () => {
    if (isStale) {
      refetch();
    }
  };
  return { mouseEnterPayloadHandler, payloadTooltipContent };
}
