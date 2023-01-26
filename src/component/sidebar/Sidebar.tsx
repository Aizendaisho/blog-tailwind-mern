import React from "react";
import aboutPhoto from "../../assets/img/about.webp";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
export default function Sidebar() {
  return (
    <div className=" flex flex-col gap-4">
      <div className="about grid justify-items-stretch gap-2">
        <span className=" border-y-2 border-gray-900 justify-self-auto text-center">
          ABOUT ME
        </span>
        <img
          src={aboutPhoto}
          alt="aboutMe"
          className=" w-40 h-40 object-cover justify-self-center"
        />
        <p className=" justify-self-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
          mollitia repellendus sed aperiam tempora quis architecto ad voluptates
          repellat qui.
        </p>
      </div>

      <div className="catego grid justify-items-stretch gap-2">
        <span className="  border-y-2 border-gray-900 justify-self-auto text-center">
          CATEGORIES
        </span>
        <ul className=" grid grid-cols-2 gap-2 justify-self-center">
          <li>Life</li>
          <li>Music</li>
          <li>Style</li>
          <li>Sport</li>
          <li>Tech</li>
          <li>Cinema</li>
        </ul>
      </div>

      <div className="follow grid justify-items-stretch gap-2">
        <span className="   border-y-2 border-gray-900 justify-self-auto text-center">
          FOLLOW US
        </span>

        <div className="  flex gap-3 text-xl justify-self-center">
          <AiFillFacebook /> <AiFillInstagram /> <AiFillTwitterCircle />
          <AiFillGithub />
        </div>
      </div>
    </div>
  );
}
