import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  login: (username, password) => {
    if (username && password) {
      set({ user: { username } });
      return true;
    }
    return false;
  },
  logout: () => set({ user: null }),
}));

export default useAuthStore;
