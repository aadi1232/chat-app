import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    console.log(userInfo); // Debugging: Check data being sent
    axios
      .post("http://localhost:5002/user/login", userInfo) // Ensure port matches backend
      .then((res) => {
        console.log("login successful:", res.data);
        if (res.data) {
          alert("login successful you can now chat");
        }
        localStorage.setItem("messenger", JSON.stringify(res.data));
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-black px-8 py-4 rounded-md space-y-3 w-auto"
        >
          <h1 className="text-blue-600 font-bold text-2xl">Messager</h1>
          <h1 className="text-3xl items-center ">
            Login With Your{" "}
            <span className="text-blue-600 font-semibold ">Account</span>
          </h1>

          {/* Email */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && (
            <span className="text-red-600 text-sm font-semibold">
              This field is required
            </span>
          )}
          {/* Password */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-600 text-sm font-semibold">
              This field is required
            </span>
          )}

          {/* Text And Button */}
          <div className="ml-1 justify-between">
            <input
              type="submit"
              value={"Login"}
              className="text-white bg-blue-600 justify-center w-full rounded-lg py-2 cursor-pointer"
            ></input>
          </div>
          <div className="px-3">
            <p>
              Have Any Account?{" "}
              <span className="text-blue-500 underline cursor-pointer">
                Signup
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
