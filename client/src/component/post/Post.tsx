import React from "react";
import postImg from "../../assets/img/post.jpeg";
import { PostsType } from "../../types";

export default function Post({ post }: { post: PostsType }) {
  return (
    <div className=" mb-8 flex flex-col items-center justify-center gap-2">
      <img src={postImg} alt="postImg" className="rounded-md" />
      <div className="postInfo text-center">
        <div className="tags flex gap-4 items-center justify-center text-gray-400 text-base mb-2">
          {post.categories?.map((cat: string) => (
            <span key={cat} className="tag">
              {cat}
            </span>
          ))}
        </div>
        <span className="Titulo text-xl font-bold ">{post.title}</span>
        <hr />
        <span className="postDate text-center  text-gray-400 text-sm">
          1 hr ago
        </span>
      </div>
      <p className="descripcion overflow-hidden [text-overflow: ellipsis] [display: -webkit-box] [-webkit-line-clamp: 4] [-webkit-box-orient:vertical] text-justify">
        {post.desc}
      </p>
    </div>
  );
}
