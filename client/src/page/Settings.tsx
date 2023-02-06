import Sidebar from "../component/sidebar/Sidebar";
import { AiOutlineUser } from "react-icons/ai";
import about from "../assets/img/post.jpeg";
import { userStore } from "../store/usuarioStore";
import { useState } from "react";
import api from "../api";

export default function Settings() {
  const PF = "http://localhost:8080/images/";
  const user = userStore((state) => state.user);
  const cambioUser = userStore((state) => state.cambioUser);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updateUser = {
      userId: user?._id,
      username,
      email,
      password,
      profilePicture: "",
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePicture = filename;
      try {
        await api.post("/upload", data);
      } catch (error) {}
    }

    try {
      const res = await api.put(`/users/${user?._id}`, updateUser);
      await cambioUser(res.data);
      await userStore.persist.rehydrate();
    } catch (error) {}
  };

  return (
    <div className=" grid grid-flow-row-dense grid-cols-4 mt-4 gap-4 m-2 w-full">
      <div className=" col-span-3">
        <div className="settitle flex gap-2 justify-between items-baseline w-full mb-2">
          <span className=" text-4xl text-red-400">Update your Acount</span>
          <span className=" text-red-400 cursor-pointer">Delete Acount</span>
        </div>
        <form onSubmit={handlerSubmit} className="flex flex-col">
          <label htmlFor="" className=" text-xl">
            Profile Picture
          </label>
          <div className="img flex items-center gap-4 my-4">
            <img
              src={file ? URL.createObjectURL(file) : PF + user?.profilePicture}
              alt=""
              className=" w-20 h-20 rounded-md object-cover"
            />
            <label htmlFor="fileInput">
              <AiOutlineUser className="cursor-pointer w-7 h-7 bg-red-300 text-white flex items-center justify-center rounded-full" />
            </label>
            <input
              onChange={(e) =>
                setFile(e.target.files ? e.target.files[0] : null)
              }
              type="file"
              id="fileInput"
              className=" hidden "
            />
          </div>
          <div className="labels flex flex-col gap-4 text-xl">
            <label htmlFor="">Username </label>
            <input
              className=" outline-none shadow-sm input w-full max-w-xs"
              type="text"
              placeholder={user?.username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="">Email </label>
            <input
              className=" outline-none shadow-sm input w-full max-w-xs"
              type="email"
              placeholder={user?.email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="">Password </label>
            <input
              className=" outline-none shadow-sm input w-full max-w-xs"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className=" btn self-center bg-green-500 text-white px-7 py-1 rounded-lg	"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
