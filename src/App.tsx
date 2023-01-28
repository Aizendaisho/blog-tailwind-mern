import React from 'react'
import Topbar from './component/Topbar'
import Home from './page/Home'
import Single from "./page/Single";
import Write from "./page/Write";
import Settings from "./page/Settings";

export default function App() {
  return (
    <div>
      <Topbar />
      {/* <Home/> */}
      {/* <Single /> */}
      {/* <Write /> */}
      <Settings />
    </div>
  );
}
