import { create } from "zustand";
const initialState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
  full_slider: null,
  deep_links: null,
  products_cart: null,
};
export const useGetData = create((set) => ({
  ...initialState,
  setData: (data) => set(() => ({ ...initialState, data })),
}));
