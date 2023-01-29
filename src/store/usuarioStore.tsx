import { create } from "zustand";

type User = {
    exist: boolean
  }
  
  type Actions = {
    cambio: () => void
    
  }
  export const userStore = create<User & Actions>((set) => ({
    exist: true,
    cambio: () => set((state) => ({ exist: !state.exist })),
   
  }))

