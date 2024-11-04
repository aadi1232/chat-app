import React from "react";
import Users from "./Users";
import UserGetAllUsers from "../../context/userGetAllUsers"; // Update the import to match hook naming convention

function User() {
  const [allUsers, loading] = UserGetAllUsers(); 

  console.log(allUsers);
  
  return (
    <div style={{ maxHeight: "calc(84vh - 1vh)" }} className="overflow-y-auto flex-aadi p-2">
    <Users/>
    <Users/>
    <Users/>
    <Users/>
    </div>
  );
}

export default User;
