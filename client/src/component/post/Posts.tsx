import React from 'react'
import Post from './Post'
import useApi from "../../hooks/useApi";

export default function Posts() {
  const { postsFetched } = useApi();

  return (
    <section className=" col-span-3 grid gap-8 grid-cols-2 ">
      {postsFetched.map((posts) => (
        <Post key={posts._id} post={posts} />
      ))}
    </section>
  );
}
