import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetch = (queryKey: (string|number)[], config:{}, staleTime:number = 0) => {
  const queryFunction = async () => {
    return await axios(config).then((res) => res.data);
  };
  const { data, status } = useQuery({
    queryKey: queryKey,
    queryFn: queryFunction,
    staleTime: staleTime,
  });
  return { data, status };
};

export default useFetch;
