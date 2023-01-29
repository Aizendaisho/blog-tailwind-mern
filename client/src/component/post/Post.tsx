import React from "react";
import postImg from "../../assets/img/post.jpeg";

export default function Post() {
  return (
    <div className=" mb-8 flex flex-col items-center justify-center gap-2">
      <img src={postImg} alt="postImg" className="rounded-md" />
      <div className="postInfo text-center">
        <div className="tags flex gap-4 items-center justify-center text-gray-400 text-base mb-4">
          <span className="tag">Music</span>
          <span className="tag">life</span>
        </div>
        <span className="Titulo text-xl font-bold ">
          Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className="postDate text-center  text-gray-400 text-sm">
          1 hr ago
        </span>
      </div>
      <p className="descripcion overflow-hidden [text-overflow: ellipsis] [display: -webkit-box] [-webkit-line-clamp: 4] [-webkit-box-orient:vertical] text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut ad
        sequi pariatur corrupti distinctio a, repudiandae eum harum, eveniet
        omnis accusantium. Qui libero reiciendis id soluta fugit repudiandae
        ipsum!
      </p>
    </div>
  );
}
