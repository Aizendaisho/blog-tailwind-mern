import React from 'react'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { VscAdd } from "react-icons/vsc";
import postImg from "../assets/img/post.jpeg";

export default function Write() {
  return (
    <div className="m-2 pt-14 grid place-content-center h-max gap-2 w-full">
      <form className=" grid gap-4 justify-items-stretch">
        <img
          src={postImg}
          alt="post"
          className=" w-full h-96 object-cover rounded-lg"
        />
        <div className="formGrupo flex gap-2 ">
          <label htmlFor="fileInput">
            <VscAdd className=" text-4xl cursor-pointer text-gray-300 border-2 rounded-full flex items-center justify-center" />
          </label>
          <input className=" hidden" type="file" id="fileInput" />
          <input
            type="text"
            placeholder="Titulo"
            autoFocus={true}
            className=" w-full focus:border-none"
          />
        </div>
        <div className="grupo ">
          <textarea
            name=""
            id=""
            placeholder="Dinos tu historia"
            className=" resize-none w-full h-auto focus:border-none"
          ></textarea>
        </div>
        <button className=" bg-green-600 text-white px-3 py-1 justify-self-end text-xl rounded-lg">
          Publicar{" "}
        </button>
      </form>
    </div>
  );
}
