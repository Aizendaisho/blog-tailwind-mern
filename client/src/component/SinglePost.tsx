import React from "react";
import postImg from "../assets/img/post.jpeg";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";

export default function SinglePost() {
  const { postsFetched } = useApi();
  const { postId } = useParams();
  const postSelect = postsFetched.find((post) => post._id === postId);

  return (
    <div className=" col-span-3 ">
      <div className="wraper ">
        <img
          src={postImg}
          alt="post"
          className=" w-full h-96 object-cover rounded-lg"
        />

        <h1 className=" text-4xl text-center">
          {postSelect?.title}
          <div className="icons flex gap-2 text-3xl float-right">
            <AiFillEdit className=" cursor-pointer text-blue-500" />
            <AiFillDelete className=" cursor-pointer text-red-700" />
          </div>
        </h1>
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
        <p className=" text-justify leading-7 first-letter:ml-5 first-letter:text-4xl first-letter:font-bold">
          {postSelect?.desc}
        </p>
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