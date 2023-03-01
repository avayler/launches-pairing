import { useState, createContext } from "react";
import useFetch from "./hooks/useFetch";
import StaticHeader from "./components/StaticHeader";
import Loading from "./components/Loading";
import { spaceXApiConfig } from "./configs/spaceXApiConfig";
import ListOfCards from "./components/ListOfCards";
import Error from "./components/Error";
import { AxiosResponse } from "axios";
import ParticlesBackground from "./components/ParticlesBackground";

export interface ILaunchDataMap {
  name: string;
  date_utc: string;
  core: string;
  payloads: string[];
  image: string;
  failureReasons: string[];
}

export interface ILaunchDataMapList {
  launchData: ILaunchDataMap[] | undefined;
}

interface ILaunchItemFromAPI {
  name: string;
  date_utc: string;
  cores: [{ core: string }];
  payloads: string[];
  links: { patch: { small: string } };
  failures: [{ reason: string }];
}

export interface ISpaceXResponse extends AxiosResponse {
  docs: ILaunchItemFromAPI[];
}

function App(): JSX.Element {
  const { data, status, error } = useFetch<ISpaceXResponse>(spaceXApiConfig);
  const DisplayContent = () => {
    if (status === "error" && error !== null) {
      return <Error error={error} />;
    }
    if (status === "loading") {
      return <Loading />;
    }
    const launchData = data?.docs.map((item: ILaunchItemFromAPI) => ({
      name: item.name,
      date_utc: item.date_utc,
      core: item.cores[0].core,
      payloads: item.payloads,
      image: item.links.patch.small,
      failureReasons: item.failures.map((failure) => failure.reason),
    }));
    return <ListOfCards launchData={launchData} />;
  };

  return (

      <div id="top-container" className="text-slate-700 dark:text-slate-100">
        <ParticlesBackground />
        <StaticHeader />

        <div id="central-container" className="container mx-auto px-4">
          <DisplayContent />
        </div>
      </div>

  );
}

export default App;
