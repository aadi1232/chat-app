import React from "react";
import Search from "./search";
import User from "./user";
function Left() {
  return (
    <div className="  w-[30%] bg-black text-white">
      <h1 className="text-3xl font-bold p-2 items-center px-11">Chats</h1>
      <Search />
      <hr></hr>
      <User />
    </div>
  );
}

export default Left;
