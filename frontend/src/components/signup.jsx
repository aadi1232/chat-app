import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmpassword, // Corrected to use 'confirmpassword'
    };
    console.log(userInfo); // Debugging: Check data being sent
    axios
      .post("http://localhost:5002/user/signup", userInfo) // Ensure port matches backend
      .then((res) => {
        console.log("Signup successful:", res.data);
      })
      .catch((err) => {
        console.error("Signup error:", err.response?.data || err.message);
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-black px-8 py-4 rounded-md space-y-3 w-96"
      >
        <h1 className="text-blue-600 font-bold text-2xl">Messager</h1>
        <h1 className="text-3xl items-center ">
          Create a New{" "}
          <span className="text-blue-600 font-semibold ">Account</span>
        </h1>

        {/* Username */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Username"
            {...register("name", { required: true })}
          />
        </label>
        {errors.name && (
          <span className="text-red-600 text-sm font-semibold">
            This field is required
          </span>
        )}

        {/* Email */}
        <label className="input input-bordered flex items-center gap-2">
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
          <input
            type="password"
            className="grow"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </label>
        {errors.password && (
          <span className="text-red-600 text-sm font-semibold">
            This field is required
          </span>
        )}

        {/* Confirm Password */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="password"
            className="grow"
            placeholder="Confirm Password"
            {...register("confirmpassword", {
              required: true,
              validate: (value) => value === watch("password"),
            })}
          />
        </label>
        {errors.confirmpassword && errors.confirmpassword.type === "validate" && (
          <span className="text-red-600 text-sm font-semibold">
            Passwords do not match
          </span>
        )}

        {/* Submit Button */}
        <div className="ml-1 justify-between">
          <input
            type="submit"
            value="Signup"
            className="text-white bg-blue-600 justify-center w-full rounded-lg py-2 cursor-pointer"
          />
        </div>
        <div className="px-3">
          <p>
            Have an account?{" "}
            <span className="text-blue-500 underline cursor-pointer">
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
