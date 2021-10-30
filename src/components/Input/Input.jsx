import React from "react";

const Input = ({ className, ...rest }) => {
  return (
    <input
      className={`bg-gray-100 mt-2 border-gray-300 placeholder-gray-400 px-4 py-2 rounded-md ${
        className ? className : ""
      }`}
      {...rest}
    />
  );
};

export default Input;
