import React from "react";

const Button = ({ onClick, isLoading }) => {
  return (
    <button
      className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? "Translating..." : "Translate"}
    </button>
  );
};

export default Button;
