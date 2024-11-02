import React from "react";
import { BiLogOut } from "react-icons/bi";
function logout() {
  return (
    <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end">
      <div className="text-white  align-bottom">
        <form>
          <div className="">
            <button>
              <BiLogOut className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default logout;
