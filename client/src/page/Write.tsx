import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { VscAdd } from "react-icons/vsc";
import postImg from "../assets/img/post.jpeg";
import api from "../api";
import { userStore } from "../store/usuarioStore";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const navegate = useNavigate();
  const user = userStore((state) => state.user);

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = { username: user?.username, title, desc, file };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await api.post("/upload", data);
      } catch (error) {}
    }

    try {
      const res = await api.post("/posts", newPost);
      navegate(`/post/${res.data._id}`);
    } catch (error) {}
  };
  return (
    <div className="m-2 pt-14 grid place-content-center h-max gap-2 w-full">
      <form
        onSubmit={handlerSubmit}
        className=" grid gap-4 justify-items-stretch"
      >
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="post"
            className=" w-full h-96 object-cover rounded-lg"
          />
        )}
        <div className="formGrupo flex gap-2 ">
          <label htmlFor="fileInput">
            <VscAdd className=" text-4xl cursor-pointer text-gray-300 border-2 rounded-full flex items-center justify-center" />
          </label>
          <input
            className=" hidden"
            type="file"
            id="fileInput"
            onChange={(e: React.ChangeEvent<HTMLInputElement> | null) =>
              setFile(e.target.files[0])
            }
          />
          <input
            type="text"
            placeholder="Titulo"
            onChange={(e: any) => setTitle(e.target.value)}
            autoFocus={true}
            className=" w-full focus:border-none outline-none"
          />
        </div>
        <div className="grupo ">
          <textarea
            name=""
            id=""
            placeholder="Dinos tu historia"
            onChange={(e: any) => setDesc(e.target.value)}
            className=" resize-none w-full h-auto focus:border-none outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className=" bg-green-600 text-white px-3 py-1 justify-self-end text-xl rounded-lg"
        >
          Publicar{" "}
        </button>
      </form>
    </div>
  );
}
