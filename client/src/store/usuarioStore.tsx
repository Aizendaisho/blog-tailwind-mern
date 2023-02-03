import { create } from "zustand";
import { persist } from "zustand/middleware";


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
      cambioFetch: () => set(() => ({ isFetching: true })),
      cambioFetchFalse: () => set(() => ({ isFetching: false })),
      cambioError: () => set(() => ({ error: true })),
      cambioErrorFalse: () => set(() => ({ error: false })),
      cambioUser: (obj) => set(() => ({ user: obj })),
    }),
    {
      name: "user",
    }
  )
);

