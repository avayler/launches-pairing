import useFetch from "../../hooks/useFetch";
import { spaceXApiConfigPayloads } from "../../configs/spaceXApiConfig";
import { AxiosResponse } from "axios";

interface ISpaceXPayloadResponse extends AxiosResponse {
  name: string;
  type: string;
}
export const GetPayloadTooltipContent = (payload: string, name: string) => {
  const { data, status, error, refetch, isStale } =
    useFetch<ISpaceXPayloadResponse>(spaceXApiConfigPayloads(payload));

  const payloadTooltipContent = () => {
    if (status === "error") {
      return <div>Error: {error?.message}</div>;
    }
    if (status === "loading") {
      return <div>Loading...</div>;
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
};
