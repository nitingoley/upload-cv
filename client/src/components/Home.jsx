import React from "react";
// import {Link} from "react"
import { Link } from "react-router-dom";

const Home = () => (
  <div className="min-h-screen bg-gray-100  flex-col items-center justify-center    mb-50">
    <header className="w-full  shadow-md  py-4 bg-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className='text-3xl font-bold text-indigo-600"'>Yours HR</h1>

        <div>
          <Link to="/" className="text-green-300 hover:text-indigo-800 mr-4">
            Home
          </Link>
          <Link to="/signup" className="text-green-300 hover:text-indigo-800">
            Signup
          </Link>
        </div>
      </nav>
    </header>

    <main className="justify-center items-center pt-2">
      <h2 className="flex-grow flex flex-col  items-center justify-center">
        Welcome to your Hr
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis nemo
        sunt?
      </p>
<div className="flex items-center justify-center">
<Link to="/signup">
      <button className="px-6 py-3 bg-green-600   text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
      Get Started
      </button>
     </Link>
</div>

    </main>
  </div>
);

export default Home;
