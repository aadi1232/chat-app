import React from "react";
import Left from "./Home/Left/Left";
import Right from "./Home/Right/Right";
import Logout from "./Home/left1/logout";
import Signup from "./components/signup";
import Login from "./components/login";
import { useAuth } from "./context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { authUser } = useAuth();

  return (
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Logout />
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Signup Route */}
      <Route
        path="/signup"
        element={  <Signup />}
      />

      {/* Login Route */}
      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <Login />}
      />
    </Routes>
  );
}

export default App;
