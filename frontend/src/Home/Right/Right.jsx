import React from "react";
import Chatuser from "./chatuser";
import Message from "./Message";
import Type from "./type";
function Right() {
  return (
    <div className="  w-[70%] bg-slate-950 text-white ">
      <Chatuser />
      <div
        style={{ maxHeight: "calc(90vh - 10vh)" }}
        className="overflow-y-auto flex-aadi p-2"
      >
        <Message />
      </div>

      <Type />
    </div>
  );
}

export default Right;
