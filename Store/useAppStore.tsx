import { create } from "zustand";

interface AppStore {
  drop: string[];
  setDrop: (value: string[]) => void;

  add: string[];
  setAdd: (value: string[]) => void;

  keep: string[];
  setKeep: (value: string[]) => void;

  improve: string[];
  setImprove: (value: string[]) => void;
}

export const useAppStore = create<AppStore>((set) => ({
    drop: [],
    setDrop: (value) => set({drop: value}),

    add: [],
    setAdd: (value) => set({add: value}),

    keep: [],
    setKeep: (value) => set({keep: value}),

    improve: [],
    setImprove: (value) => set({improve: value}),
}));