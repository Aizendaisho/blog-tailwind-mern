import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import { AiOutlineUser } from "react-icons/ai";
import about from "../assets/img/post.jpeg";

export default function Settings() {
  return (
    <div className=" grid grid-flow-row-dense grid-cols-4 mt-4 gap-4 m-2 w-full">
      <div className=" col-span-3">
        <div className="settitle flex gap-2 justify-between items-baseline w-full mb-2">
          <span className=" text-4xl text-red-400">Update your Acount</span>
          <span className=" text-red-400 cursor-pointer">Delete Acount</span>
        </div>
        <form className="flex flex-col">
          <label htmlFor="" className=" text-xl">
            Profile Picture
          </label>
          <div className="img flex items-center gap-4 my-4">
            <img
              src={about}
              alt=""
              className=" w-20 h-20 rounded-md object-cover"
            />
            <label htmlFor="fileInput">
              <AiOutlineUser className="cursor-pointer w-7 h-7 bg-red-300 text-white flex items-center justify-center rounded-full" />
            </label>
            <input type="file" id="fileInput" className=" hidden" />
          </div>
          <div className="labels flex flex-col gap-4 text-xl">
            <label htmlFor="">Username </label>
            <input
              className=" outline-none shadow-sm"
              type="text"
              placeholder="Araldi Garcia"
            />

            <label htmlFor="">Email </label>
            <input
              className=" outline-none shadow-sm"
              type="email"
              placeholder="AraldiGarcia@hotmail.com"
            />

            <label htmlFor="">Password </label>
            <input className=" outline-none shadow-sm" type="password" />

            <button className=" self-center bg-green-500 text-white px-7 py-1 rounded-lg	">
              Update
            </button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
