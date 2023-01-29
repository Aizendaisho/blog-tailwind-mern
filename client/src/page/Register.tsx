import React from "react";
import bgLogin from "../assets/img/register.webp";
import { Link } from "react-router-dom";

export default function Register() {
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
      <form className=" flex flex-col gap-4 items-center ">
        <label className=" text-xl" htmlFor="">
          Email
        </label>
        <input
          className=" p-2 rounded-md text-black outline-none"
          type="text"
          placeholder="Enter your email..."
        />
        <label className=" text-xl" htmlFor="">
          Username
        </label>
        <input
          className=" p-2 rounded-md text-black outline-none"
          type="text"
          placeholder="Enter your Username..."
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
        />

        <button className=" px-8 py-1 bg-gray-400 text-xl rounded-md ">
          Register
        </button>
      </form>
      <button className="absolute top-24 right-8  bg-green-600 rounded-md text-2xl px-6 py-1">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
}
