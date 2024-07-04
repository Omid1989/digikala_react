import { createContext, useContext } from "react";
export const LivesContext = createContext(undefined);
export function useLivesContext() {
  const { ReactPortal, setReactPortal } = useContext(LivesContext);
  if (ReactPortal === undefined) {
    throw new Error("uselivecontext must be used with a LivesContext");
  }
  return { ReactPortal, setReactPortal };
}
