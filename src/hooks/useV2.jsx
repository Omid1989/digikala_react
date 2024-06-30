import useSWR from "swr";
import { useGetData } from "../store/v2";
const fetcherFunc = (...args) => fetch(...args).then((res) => res.json());
export const useV2 = () => {
  const setData = useGetData((state) => state.setData);
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_GET_DATA_V2,
    fetcherFunc,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  setData(data);
  return {
    loading: !error && !data,
    error,
  };
};
