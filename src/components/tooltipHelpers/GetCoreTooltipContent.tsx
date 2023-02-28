import useFetch from "../../hooks/useFetch";
import { spaceXApiConfigCores } from "../../configs/spaceXApiConfig";
import { AxiosResponse } from "axios";

interface ISpaceXCoreResponse extends AxiosResponse {
  serial: string;
  last_update: string;
}
export const GetCoreTooltipContent = (core: string, name: string) => {
  const { data, status, error, refetch, isStale } =
    useFetch<ISpaceXCoreResponse>(spaceXApiConfigCores(core));

  const coreTooltipContent = () => {
    if (status === "error") {
      return <div>Error: {error?.message}</div>;
    }
    if (status === "loading") {
      return <div>Loading...</div>;
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
