import React from "react";

const InputWrapper = (props) => {
  return (
    <div className="flex flex-col">
      <label
        className="text-gray-600 font-bold text-md"
        htmlFor={props.htmlFor}
      >
        {props.label}
      </label>
      {props.children}
    </div>
  );
};

export default InputWrapper;
