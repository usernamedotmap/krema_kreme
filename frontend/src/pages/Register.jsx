import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {name, email, password} = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello", {"name": name, "email": email, "passo=word": password})
  };
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg  border-2  shadow-lg">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Krema Kreme</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6 ">HeeeLUU</h2>
          <p className="text-center mb-6">
            Enter your email and password to login
          </p>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Login
          </button>
          <p className="mt-6 text-center text-md text-gray-700">
            Already have an account? Click f8 here{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-8000">
        <div className="w-full flex flex-col justify-center items-center">
          <img
            src="https://now.krispykreme.com.ph/dist/images/kk/kk-donut-og.png"
            alt=""
            className="h-[600px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
