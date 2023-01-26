import React from "react";
import Header from "../component/header/Header";
import Sidebar from "../component/sidebar/Sidebar";
import Posts from "../component/post/Posts";

export default function Home() {
  return (
    <>
      <Header />
      <div className=" grid grid-flow-row-dense grid-cols-4 mt-4 ">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
