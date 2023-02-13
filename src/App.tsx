import Card from "./components/Card";
import useFetch from "./hooks/useFetch";

import StaticHeader from "./components/StaticHeader";
import Loading from "./components/Loading";
import spaceXApiConfig from "./configs/spaceXApiConfig";
import { motion } from "framer-motion";

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

export interface LaunchDataMap {
  name: string;
  date_utc: string;
  core: string;
  payloads: string[];
  image: string;
  failureReasons: string[];
}

interface LaunchItemFromAPI {
  name: string;
  date_utc: string;
  cores: [{ core: string }];
  payloads: string[];
  links: { patch: { small: string } };
  failures: [{ reason: string }];
}

interface LaunchDataFromAPI {
  docs: LaunchItemFromAPI[];
}

function App(): JSX.Element {
  const { resData, status, error } =
    useFetch<LaunchDataFromAPI>(spaceXApiConfig);
  if (status === "loading") {
    return (
      <div id="top-container" className=" bg-slate-100 dark:bg-slate-800">
        <Loading />
      </div>
    );
  }
  let launchData;
  if (status === "success") {
    launchData = resData?.docs.map((item: LaunchItemFromAPI) => ({
      name: item.name,
      date_utc: item.date_utc,
      core: item.cores[0].core,
      payloads: item.payloads,
      image: item.links.patch.small,
      failureReasons: item.failures.map((failure) => failure.reason),
    }));
  }

  return (
    <>
      <div
        id="top-container"
        className=" bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-100"
      >
        <StaticHeader />
        <div id="central-container" className="container mx-auto px-4">
          {error instanceof Error && <span>Error: {error.message}</span>}
          {launchData && (
            <motion.div
              className="mt-8 grid lg:grid-cols-2 sm:grid-cols-1 2xl:grid-cols-3 gap-5 sm:gap-8 lg:gap-14"
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {launchData?.map((card, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card {...card} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
