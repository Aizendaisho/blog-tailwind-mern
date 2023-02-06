import React from "react";
import postImg from "../../assets/img/post.jpeg";
import { PostsType } from "../../types";
import { Link } from "react-router-dom";

export default function Post({ post }: { post: PostsType }) {
  const PF = "http://localhost:8080/images/";
  return (
    <div className=" mb-8 flex flex-col items-center justify-center gap-2 shadow-lg">
      <img
        src={post?.photo ? `${PF}${post?.photo}` : postImg}
        alt="postImg"
        className="rounded-md max-h-64 shadow-md"
      />
      <div className="postInfo text-center">
        <div className="tags flex gap-4 items-center justify-center text-gray-400 text-base mb-2">
          {post.categories?.map((cat: string) => (
            <span key={cat} className="tag">
              {cat}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="Titulo text-xl font-bold ">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate text-center  text-gray-400 text-sm">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <div className="desc h-16 w-4/5 ">
        <p className="text-center line-clamp-2 ">{post.desc}</p>
      </div>
    </div>
  );
}
