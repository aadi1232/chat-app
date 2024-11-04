import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";

function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/user/logout");
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      setLoading(false);
      alert("Logout successful");
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end">
      <div className="text-white  align-bottom">
        <form>
          <div className="">
            <button onClick={handleLogout}>
              <BiLogOut className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Logout;
  