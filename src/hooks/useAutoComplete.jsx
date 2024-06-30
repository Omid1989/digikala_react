import { useState } from "react";
import useSWR from "swr";

const fetcherFunc = (...args) => fetch(...args).then((res) => res.json());

export const useAutoComplete = () => {
  const [keysearch, setkeysearch] = useState("");
  const { data, error, isLoading } = useSWR(
    keysearch
      ? import.meta.env.VITE_API_GET_DATA_AUTOCOMPLETE + keysearch
      : import.meta.env.VITE_API_GET_DATA_AUTOCOMPLETE,
    fetcherFunc
  );

  const result = data?.data;
  console.log(data?.data.auto_complete);
  return {
    result,
    isLoading,
    error,
    setkeysearch,
    keysearch,
  };
};
