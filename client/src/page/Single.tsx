import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Posts from "../component/post/Posts";
import SinglePost from "../component/SinglePost";

export default function Single() {
  return (
    <div>
      <div className=" grid grid-flow-row-dense grid-cols-4 mt-4 gap-4 m-2 ">
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
}
