import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import photo from "../assets/img/photo.webp";
import { Link } from "react-router-dom";
const user = false;

export default function Topbar() {
  return (
    <div className="shadow-md w-full h-20 bg-white  text-gray-400 sticky top-0 flex items-center justify-between p-4 z-20 ">
      <div className="  flex gap-3 text-xl">
        <AiFillFacebook /> <AiFillInstagram /> <AiFillTwitterCircle />
        <AiFillGithub />
      </div>
      <nav className=" ">
        <ul className=" flex items-center justify-around gap-5 text-2xl font-mono">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/write">WRITE</Link>
          </li>
          <li>{user && "LOGOUT"}</li>
        </ul>
      </nav>
      {user ? (
        <div className=" flex gap-2 items-baseline">
          <img
            src={photo}
            alt="photo"
            className=" w-10 h-10 rounded-full object-contain"
          />
          <FcSearch className=" text-2xl" />
        </div>
      ) : (
        <ul className="log flex gap-2">
          <li>
            <Link
              className=" text-lg bg-green-600 text-white px-3 py-1 rounded"
              to="/register"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              className=" text-lg px-3 py-1 rounded text-white bg-gray-500"
              to="/login"
            >
              LogIn
            </Link>
          </li>
          <FcSearch className=" text-2xl" />
        </ul>
      )}
    </div>
  );
}
