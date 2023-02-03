import { create } from "zustand";
import { persist } from "zustand/middleware";
import useApi from "../hooks/useApi";
import { PostsType } from "../types";

type UserAuth = {
  _id: string;
  username: string;
  email: string;
  profilePicture: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

type User = {
  user: UserAuth | null;
  isFetching: boolean;
  error: boolean;
};

type Actions = {
  cambioFetch: () => void;
  cambioFetchFalse: () => void;
  cambioError: () => void;
  cambioErrorFalse: () => void;
  cambioUser: (obj: UserAuth | null) => void;
};

export const userStore = create(
  persist<User & Actions>(
    (set) => ({
      user: null,
      isFetching: false,
      error: false,
      cambioFetch: () => set((state) => ({ isFetching: true })),
      cambioFetchFalse: () => set((state) => ({ isFetching: false })),
      cambioError: () => set((state) => ({ error: true })),
      cambioErrorFalse: () => set((state) => ({ error: false })),
      cambioUser: (obj) => set((state) => ({ user: obj })),
    }),
    {
      name: "user",
    }
  )
);

