import React from "react";
import { IoSend } from "react-icons/io5";
function type() {
  return (
     <div className="flex space-x-3 h-[8vh] text-center bg-gray-800">
        <div className="w-[70%] mx-4" >
            <input
              type="text"
              placeholder="Type a message"
              className="input input-bordered w-full grow outline-none bg-slate-900 px-3 py-3 m-1"
            />

        </div>
        <button>
            <IoSend className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300 " />
        </button>
     </div>
  );
}

export default type;
