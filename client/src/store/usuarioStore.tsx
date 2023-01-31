import { create } from "zustand";
import useApi from "../hooks/useApi";
import { PostsType } from "../types";

type User = {
  exist: boolean;
  posts: PostsType[];
};

type Actions = {
  cambio: () => void;
};

  

  export const userStore = create<User & Actions>((set) => ({
    exist: true,
    cambio: () => set((state) => ({ exist: !state.exist })),
    posts: [],
  }));

