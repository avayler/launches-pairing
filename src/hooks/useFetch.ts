import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Response<T> {
  resData: T | null;
  status: "error" | "success" | "loading";
  error: Error | null;
}
interface Data {
  config: {};
  key: (string | number)[];
  staleTime: number;
}
const useFetch = <T>({ config, key, staleTime }:Data): Response<T> => {
  const queryFunction = async (): Promise<Response<T>> => {
    return await axios(config).then((res) => res.data);
  };

  const { data, status, error } = useQuery({
    queryKey: key,
    queryFn: queryFunction,
    staleTime: staleTime,
  });

  return { resData: data as T, status, error: error as Error };
};

export default useFetch;
