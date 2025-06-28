import { create } from 'zustand';

interface AppState {
  activeBorrowerId: string | null;
  setActiveBorrower: (id: string | null) => void;
  pipelineTab: string;
  setPipelineTab: (tab: string) => void;
  assistantEnabled: boolean;
  toggleAssistant: () => void;
}

export const useStore = create<AppState>((set) => ({
  activeBorrowerId: null,
  setActiveBorrower: (id) => set({ activeBorrowerId: id }),
  pipelineTab: "New",
  setPipelineTab: (tab) => set({ pipelineTab: tab }),
  assistantEnabled: false,
  toggleAssistant: () => set((state) => ({ assistantEnabled: !state.assistantEnabled })),
}));