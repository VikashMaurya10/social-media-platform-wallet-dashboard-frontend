import React from "react";
import Error from "../assets/404.svg";

const NotFound = () => {
  return (
    <div title="Page Not Found" className="flex max-h-screen w-full">
      <img className="object-contain" src={Error} alt="Page Not Found" />
    </div>
  );
};

export default NotFound;
