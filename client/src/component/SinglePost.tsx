import React, { useEffect, useState } from "react";
import postImg from "../assets/img/post.jpeg";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { userStore } from "../store/usuarioStore";
import useApi from "../hooks/useApi";
import api from "../api";

export default function SinglePost() {
  const { postsFetched } = useApi();
  const { postId } = useParams();
  const postSelect = postsFetched.find((post) => post._id === postId);
  const PF = "http://localhost:8080/images/";
  const user = userStore((state) => state.user);
  const navegate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const handlerDelete = async () => {
    try {
      await api.delete(`/posts/${postSelect?._id}`, {
        data: {
          username: user?.username,
        },
      });
      navegate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const render = async () => {
      if (postSelect) {
        setTitle(postSelect.title);
        setDesc(postSelect.desc);
      }
    };
    render();
  }, [postSelect]);

  const handlerEdit = async () => {
    try {
      await api.put(`/posts/${postSelect?._id}`, {
        username: user?.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" col-span-3 ">
      <div className="wraper ">
        <img
          src={postSelect?.photo ? `${PF}${postSelect?.photo}` : postImg}
          className=" w-full h-96 object-contain rounded-lg"
        />
        {updateMode ? (
          <input
            className=" text-center text-2xl w-full focus:border-none outline-none"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className=" text-4xl text-center">
            {title}
            {postSelect?.username === user?.username && (
              <div className="icons flex gap-2 text-3xl float-right">
                <AiFillEdit
                  className=" cursor-pointer text-blue-500"
                  onClick={() => setUpdateMode(true)}
                />
                <AiFillDelete
                  className=" cursor-pointer text-red-700"
                  onClick={handlerDelete}
                />
              </div>
            )}
          </h1>
        )}
        <div className="autor flex justify-between mb-4">
          <span className="">
            Autor:
            <Link to={`/?user=${postSelect?.username}`}>
              <b>{postSelect?.username}</b>
            </Link>
          </span>
          <span className="text-gray-300">
            {" "}
            {postSelect
              ? new Date(postSelect.createdAt).toDateString()
              : "No se sabe"}
          </span>
        </div>
        {updateMode ? (
          <textarea
            value={desc}
            className=" outline-none resize-none w-full text-justify leading-7 first-letter:ml-5 first-letter:text-4xl first-letter:font-bold"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        ) : (
          <p className=" text-justify leading-7 first-letter:ml-5 first-letter:text-4xl first-letter:font-bold">
            {desc}
          </p>
        )}
      </div>
      <div className="button w-full flex">
        {updateMode && (
          <button
            className=" bg-blue-400 px-3 py-1 rounded text-white self-center"
            onClick={handlerEdit}
          >
            Actualizar
          </button>
        )}
      </div>
    </div>
  );
}

// <div className=" col-span-3 ">
// <div className="wraper ">
//   <img
//     src={postImg}
//     alt="post"
//     className=" w-full h-96 object-cover rounded-lg"
//   />

//   <h1 className=" text-4xl text-center">
//     Titulo Random para post
//     <div className="icons flex gap-2 text-3xl float-right">
//       <AiFillEdit className=" cursor-pointer text-blue-500" />
//       <AiFillDelete className=" cursor-pointer text-red-700" />
//     </div>
//   </h1>
//   <div className="autor flex justify-between mb-4">
//     <span className="">
//       Autor: <b>Araldi Garcia</b>
//     </span>
//     <span className="text-gray-300">1 hour ago</span>
//   </div>
//   <p className=" text-justify leading-7 first-letter:ml-5 first-letter:text-4xl first-letter:font-bold">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod
//     nemo cum possimus! Eos sint cupiditate, neque autem rerum corrupti
//     maiores dicta reprehenderit, incidunt quod fuga nihil excepturi sed
//     rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
//     quod nemo cum possimus! Eos sint cupiditate, neque autem rerum
//     corrupti maiores dicta reprehenderit, incidunt quod fuga nihil
//     excepturi sed rem? Lorem ipsum dolor sit amet consectetur adipisicing
//     elit. Quos quod nemo cum possimus! Eos sint cupiditate, neque autem
//     rerum corrupti maiores dicta reprehenderit, incidunt quod fuga nihil
//     excepturi sed rem?
//   </p>
// </div>
// </div>
