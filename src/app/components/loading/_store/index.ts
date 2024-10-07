import { create } from 'zustand';

interface LoadingState {
  isLoading: boolean;
  setIsLoading: (load: boolean) => void;
}

const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  setIsLoading: (load) => set({ isLoading: load }),
}));

export default useLoadingStore;
