

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AuthContext";

const Register = () => {
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn = async () => {
    console.log("hi"); // fixed missing quotes
  };

  // Register user
  const { RegisterUser } = useContext(AppContext);
  const onSubmit = async (data) => {
    try {
      await RegisterUser(data.email, data.password);
      console.log(data);
      alert("user Register Success");
      navigate("/login");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };
  return (
    <div>
      <div className="h-[calc(100vh-120px)] flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm sm:max-w-md mx-auto bg-white shadow-md rounded px-6 sm:px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
            Please Register
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>
            {message && (
              <p className="text-red-500 text-xs italic mb-3">{message}</p>
            )}
            <div>
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
                Register
              </button>
            </div>
          </form>
          <p className="align-baseline font-medium mt-4 text-sm text-center">
            Already have an account? Please{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Login
            </Link>
          </p>

          {/* google sign in */}
          <div className="mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>
          </div>

          <p className="mt-5 text-center text-gray-500 text-xs">
            ©2025 Book Store. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

