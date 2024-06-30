import axios from "axios";
import useSWR from "swr";

// const fetcherFunc = (url) => axios.get(url).then((res) => res.data);
const fetcherFunc = (...args) => fetch(...args).then((res) => res.json());
export const useMagnet = () => {
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_GET_DATA_MAGNET,
    fetcherFunc,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    lives: data?.data?.lives,
    posts: data?.data?.posts,
    loading: isLoading,
    error,
  };
};
