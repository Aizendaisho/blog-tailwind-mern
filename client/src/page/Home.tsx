import React, { useEffect, useState } from "react";
import Header from "../component/header/Header";
import Sidebar from "../component/sidebar/Sidebar";
import Posts from "../component/post/Posts";
import { useQuery } from "@tanstack/react-query";
import { PostsType } from "../types";

import api from "../api";
import { useParams, useLocation } from "react-router-dom";
import Post from "../component/post/Post";

export default function Home() {
  const { search } = useLocation();

  const {
    data: postUser,
    isLoading,
    isFetched,
  } = useQuery(
    ["postUser"],
    async () => {
      return await api
        .get<PostsType[]>(`/posts${search}`)
        .then((res) => res.data);
    },
    { initialData: [] }
  );



  if(isLoading) return <h1> Cargando....</h1>


  if (postUser) {
    return (
      <>
        <Header />
        <div className=" grid grid-flow-row-dense grid-cols-4 mt-4 gap-4 m-2 ">
          <section className=" col-span-3 grid gap-8 grid-cols-2 ">
            {postUser.map((posts) => (
              <Post key={posts._id} post={posts} />
            ))}
          </section>
          <Sidebar />
        </div>
      </>
    );
  } else {
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
}