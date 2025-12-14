import { create } from "zustand";

interface Comment {

}

export interface BoardItem {
  text: string;
  username: string,
  comments: [string, string][];      // [username, comment]
  reactions: [string, string][];     // [username, emoji]
}

export interface AppStore {
  drop: BoardItem[];
  setDrop: (value: BoardItem[]) => void;

  add: BoardItem[];
  setAdd: (value: BoardItem[]) => void;

  keep: BoardItem[];
  setKeep: (value: BoardItem[]) => void;

  improve: BoardItem[];
  setImprove: (value: BoardItem[]) => void;

  addReactionToDrop: (idx: number, username: string, reaction: string) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  drop: [],
  setDrop: (value) => set({ drop: value }),

  add: [],
  setAdd: (value) => set({ add: value }),

  keep: [],
  setKeep: (value) => set({ keep: value }),

  improve: [],
  setImprove: (value) => set({ improve: value }),

  addReactionToDrop: (itemIndex, username, emoji) =>
  set((state) => {
    const updated = [...state.drop];
    const item = updated[itemIndex];

    // find if user already reacted
    const existingIdx = item.reactions.findIndex(
      ([user]) => user === username
    );

    if (existingIdx !== -1) {
      // replace emoji
      item.reactions[existingIdx][1] = emoji;
    } else {
      // add emoji
      item.reactions.push([username, emoji]);
    }

    updated[itemIndex] = item;
    return { drop: updated };
  }),

}));