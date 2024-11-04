import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function useGetAllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = Cookies.get("jwt");
        if (!token) {
          setError("No token found in cookies");
          setLoading(false);
          return;
        }

        const response = await axios.get("/api/user/getUserProfile", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Assuming response.data has a structure like { users: [...] }
        const usersArray = response.data.users;
        if (Array.isArray(usersArray)) {
          setAllUsers(usersArray); // Set only the users array
        } else {
          setError("Invalid response structure");
        }
      } catch (error) {
        console.error("Error in useGetAllUsers:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return [allUsers, loading, error];
}

export default useGetAllUsers;
