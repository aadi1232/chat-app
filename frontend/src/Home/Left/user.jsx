import React from "react";
import Users from "./Users";
import useGetAllUsers from "../../context/userGetAllUsers"; // Custom hook to fetch all users

function User() {
  const [allUsers, loading, error] = useGetAllUsers(); // Custom hook to fetch all users

  console.log(allUsers);

  return (
    <div style={{ maxHeight: "calc(84vh - 1vh)" }} className="overflow-y-auto flex-aadi p-2">
      {loading ? (
        <p>Loading...</p> // Display loading indicator while data is being fetched
      ) : error ? (
        <p>Error: {error}</p> // Display error message if there's an error
      ) : allUsers.length > 0 ? (
        allUsers.map((user, index) => (
          <Users key={index} user={user} /> // Render each user component
        ))
      ) : (
        <p>No users found.</p> // Display a message if there are no users
      )}
    </div>
  );
}

export default User;
