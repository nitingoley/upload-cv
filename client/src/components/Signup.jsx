import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    if (resume) {
      formData.append("resume", resume);
    }

    try {
      const response = await fetch("https://upload-cv-b.vercel.app/api/v3/signup", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        navigate("/success");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl text-center font-semibold mb-4">Signup to yourHR</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-800">
            Name:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="mt-1 block h-10 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-800">
            Email:
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            className="mt-1 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="resume" className="block text-sm font-medium text-gray-800">
            Resume:
          </label>
          <input
            id="resume"
            type="file"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={(e) => setResume(e.target.files[0])}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
