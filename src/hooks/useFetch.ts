import { useQuery } from "@tanstack/react-query";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

interface IResponse<T> {
  data: T | undefined;
  status: "error" | "success" | "loading";
  error: AxiosError | null;
}
interface IData {
  config: AxiosRequestConfig;
  key: (string | number)[];
  staleTime: number;
}
const useFetch = <T extends AxiosResponse>({
  config,
  key,
  staleTime = 0,
}: IData): IResponse<T> => {
  const queryFunction = async (): Promise<IResponse<T>> => {
    return await axios(config).then((res) => res.data);
  };

  const { data, status, error }: IResponse<T> = useQuery({
    queryKey: key,
    queryFn: queryFunction,
    staleTime: staleTime,
  });

  return { data, status, error };
};

export default useFetch;
