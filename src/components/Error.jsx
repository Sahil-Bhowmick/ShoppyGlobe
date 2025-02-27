import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          <FaHome className="mr-2" />
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
