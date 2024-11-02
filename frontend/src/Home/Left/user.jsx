import React from "react";
import Users from "./Users";

function User() {
  return (
    <div style={{ maxHeight: "calc(84vh - 1vh)" }} className="overflow-y-auto flex-aadi p-2">
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
    </div>
  );
}

export default User;

