import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface IResponse<T> {
  data: T | undefined;
  status: "error" | "success" | "loading";
  error: Error | null;
}
interface IData {
  config: {};
  key: (string | number)[];
  staleTime: number;
}
const useFetch = <T extends Response>({ config, key, staleTime = 0 }: IData): IResponse<T> => {
  const queryFunction = async (): Promise<IResponse<T>> => {
    return await axios(config).then((res) => res.data);
  };

  const { data, status, error }: IResponse<T> = useQuery({
    queryKey: key,
    queryFn: queryFunction,
    staleTime: staleTime,
  });

  return { data, status, error};
};

export default useFetch;
