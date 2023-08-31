import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl text-white mb-4">Coming <span className="text-blue-800">Soon!</span></h1>
        <p className="text-gray-300">
          We're working on something awesome. Stay tuned!
        </p>
        <p className="text-2xl mt-4 text-gray-300">
          Return to{" "}
          <Link to="/dashboard">
            <span className="border-b-2 text-blue-800 border-b-blue-500 font-bold">Home</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
