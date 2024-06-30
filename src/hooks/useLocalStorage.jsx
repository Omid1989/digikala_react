import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialState) => {
  const [value, setvalue] = useState(() => {
    return JSON.parse(
      localStorage.getItem(key) || JSON.stringify(initialState)
    );
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setvalue];
};
