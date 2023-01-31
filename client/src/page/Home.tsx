import React, { useEffect, useState } from "react";
import Header from "../component/header/Header";
import Sidebar from "../component/sidebar/Sidebar";
import Posts from "../component/post/Posts";
import { useQuery } from "@tanstack/react-query";
import { PostsType } from "../types";

import api from "../api";

export default function Home() {
  const [Post, setPost] = useState([]);

  // const { data } = useQuery(
  //   ["post"],
  //   async () => {
  //     return await api.get<PostsType[]>("/posts").then((res) => res.data);
  //   },
  //   { initialData: [] }
  // );

  // useEffect(() => {
  //   const fetchedPosts = async () => {
  //     const res = await api.get("/posts");
  //     console.log(res);
  //   };
  //   fetchedPosts();
  // }, []);

  // console.log(data);
  return (
    <>
      <Header />
      <div className=" grid grid-flow-row-dense grid-cols-4 mt-4 gap-4 m-2 ">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
