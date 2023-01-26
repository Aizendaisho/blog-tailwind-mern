import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import {FcSearch } from "react-icons/fc";
import photo from "../assets/img/photo.webp"


export default function Topbar() {
  return (
    <div className="shadow-md w-full h-18 bg-white  text-gray-400 sticky top-0 flex items-center justify-between p-4 ">
      <div className="  flex gap-3 text-xl">
        <AiFillFacebook /> <AiFillInstagram /> <AiFillTwitterCircle /><AiFillGithub/>
      </div>
      <nav className=" ">
        <ul className=" flex items-center justify-around gap-5 text-2xl font-mono">
            <li>Home</li>
            <li>About</li>
            <li>Contanct</li>
            <li>Write</li>
            <li>LogOut</li>
        </ul>
      </nav>
      <div className=" flex gap-2 items-baseline">
        <img src={photo} alt="photo" className=" w-10 h-10 rounded-full object-contain" />
        <FcSearch className=" text-2xl" />
      </div>
    </div>
  );
}
