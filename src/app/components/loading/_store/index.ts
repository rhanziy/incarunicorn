import { create } from 'zustand';

interface LoadingState {
  isLoading: boolean;
  setIsLoading: (load: boolean) => void;
}

const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  setIsLoading: (auth) => set({ isLoading: auth }),
}));

export default useLoadingStore;
