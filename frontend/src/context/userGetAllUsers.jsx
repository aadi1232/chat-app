import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function UserGetAllUsers() {
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
          setLoading(false); // Added to stop loading when no token is found
          return;
        }
        const response = await axios.get(
          "/api/user/getUserProfile",
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAllUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error in useGetAllUsers: " + error);
        setError(error.message);
      } finally {
        setLoading(false); // Moved to finally to ensure loading state is updated
      }
    };
    getUsers();
  }, []);
  return [allUsers, loading, error];
}

export default UserGetAllUsers;
