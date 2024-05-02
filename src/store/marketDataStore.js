import { create } from "zustand";
export const useMarketDataStore = create((set) => ({
    marketData: null,
    updateMarketData: (data) => set({ marketData: data }),
}));

