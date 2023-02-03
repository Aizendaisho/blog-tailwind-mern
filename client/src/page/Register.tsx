import React, { useState } from "react";
import bgLogin from "../assets/img/register.webp";
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navegate = useNavigate();
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError(false);
    event.preventDefault();
    try {
      const res = await api.post("/auth/register", {
        username,
        email,
        password,
      });

      console.log(res);
      res.data && navegate("/login");
    } catch (error) {
      console.error(error);
      setError(true);
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
      <h1 className=" text-4xl text-center mb-4">Register</h1>
      <form
        onSubmit={onSubmit}
        className=" pb-4 flex flex-col gap-4 items-center "
      >
        <label className=" text-xl" htmlFor="">
          Email
        </label>
        <input
          className=" p-2 rounded-md text-black outline-none"
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className=" text-xl" htmlFor="">
          Username
        </label>
        <input
          className=" p-2 rounded-md text-black outline-none"
          type="text"
          placeholder="Enter your Username..."
          onChange={(e) => setUsername(e.target.value)}
        />

        <label
          className=" text-xl"
          htmlFor=""
          placeholder="Enter your password..."
        >
          Password
        </label>
        <input
          className=" p-2 rounded-md text-black outline-none"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className=" px-8 py-1 bg-gray-400 text-xl rounded-md ">
          Register
        </button>
        {error && (
          <span className=" rounded p-2 justify-self-center text-center bg-slate-200 text-red-500">
            Algo salio mal
          </span>
        )}
      </form>
      <button className="absolute top-24 right-8  bg-green-600 rounded-md text-2xl px-6 py-1">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
}
