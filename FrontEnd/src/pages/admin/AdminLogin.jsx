
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setMessage("");
    setLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_backEndUrl + "/api/auth/admin",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const auth = response.data;
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        // Expire token after 1 hour
        const oneHour = 3600 * 1000;
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Token has expired! Please login again.");
          navigate("/");
        }, oneHour);
      }

      alert("Admin Login successful!");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Please provide a valid Username and password");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Clear message on input change
  const handleInputChange = () => {
    if (message) setMessage("");
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("username", { required: "Username is required" })}
              type="text"
              id="username"
              placeholder="username"
              onChange={handleInputChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow ${
                errors.username ? "border-red-500" : ""
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleInputChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div className="w-full">
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <p className="mt-5 text-center text-gray-500 text-xs">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
