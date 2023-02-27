import useFetch from "./hooks/useFetch";
import StaticHeader from "./components/StaticHeader";
import Loading from "./components/Loading";
import spaceXApiConfig from "./configs/spaceXApiConfig";
import ListOfCards from "./components/ListOfCards";
import Error from "./components/Error";

export interface LaunchDataMap {
  name: string;
  date_utc: string;
  core: string;
  payloads: string[];
  image: string;
  failureReasons: string[];
}

export interface LaunchDataMapList {
  launchData: LaunchDataMap[] | undefined;
}

interface LaunchItemFromAPI {
  name: string;
  date_utc: string;
  cores: [{ core: string }];
  payloads: string[];
  links: { patch: { small: string } };
  failures: [{ reason: string }];
}

interface SpaceXResponse extends Response {
  docs: LaunchItemFromAPI[];
}


function App(): JSX.Element {
  const { data, status, error } = useFetch<SpaceXResponse>(spaceXApiConfig);

  if (status === "loading") {
    return (
      <div id="top-container" className=" bg-slate-100 dark:bg-slate-800">
        <Loading />
      </div>
    );
  }

  if (status === "error") {
    if (error !== null) {
      return (
        <div id="top-container" className=" bg-slate-100 dark:bg-slate-800">
          <Error error={error} />
        </div>
      );
    }
  }

  let launchData;
  if (status === "success") {
    launchData = data?.docs.map((item: LaunchItemFromAPI) => ({
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
          {launchData && <ListOfCards launchData={launchData} />}
        </div>
      </div>
    </>
  );
}

export default App;
