import React, { useRef } from "react";
import bgLogin from "../assets/img/bglogin.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { userStore } from "../store/usuarioStore";
import { shallow } from "zustand/shallow";
import api from "../api";

export default function LogOut() {
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const {
    cambioError,
    cambioErrorFalse,
    cambioFectch,
    cambioFectchFalse,
    cambioUser,
    user,
    error,
    isFetching,
  } = userStore(
    (state) => ({
      user: state.user,
      isFetching: state.isFetching,
      error: state.error,
      cambioErrorFalse: state.cambioErrorFalse,
      cambioError: state.cambioError,
      cambioFectch: state.cambioFetch,
      cambioFectchFalse: state.cambioFetchFalse,
      cambioUser: state.cambioUser,
    }),
    shallow
  );

  const navegate = useNavigate();

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    cambioFectch();
    cambioErrorFalse();
    try {
      const res = await api.post("/auth/login", {
        username: userRef.current?.value,
        password: passwordRef.current?.value,
      });
      cambioUser(res.data);
      cambioFectchFalse();
      navegate("/");
    } catch (error) {
      console.log(error);
      cambioFectchFalse();
      cambioError();
    }
  };
  return (
    <div
      style={{
        background: `url(${bgLogin})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={` h-[calc(100vh-80px)] flex flex-col justify-center bg-u bg-no-repeat bg-cover text-white pb-10`}
    >
      <h1 className=" text-4xl text-center mb-4">Login</h1>
      <form
        onSubmit={handlerSubmit}
        className=" flex flex-col gap-4 items-center "
      >
        <label className=" text-xl" htmlFor="">
          Username
        </label>
        <input
          className="input input-ghost w-full max-w-xs  placeholder:text-white"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />

        <label
          className=" text-xl placeholder:text-white"
          htmlFor=""
          placeholder="Enter your password..."
        >
          Password
        </label>
        <input
          className="input input-ghost w-full max-w-xs"
          type="password"
          ref={passwordRef}
        />

        <button
          type="submit"
          className=" px-8 py-1 btn btn-accent text-white   disabled:bg-slate-100 disabled:text-gray-500"
          disabled={isFetching}
        >
          Login
        </button>
        {error && (
          <span className="text-white bg-red-500 px-3 py-1 rounded">
            Ah ocurrido un problema{" "}
          </span>
        )}
      </form>
      <button className="absolute top-24 right-8  bg-green-600 rounded-md text-2xl px-6 py-1">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
}
