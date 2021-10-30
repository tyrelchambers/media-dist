import React from "react";

const Form = (props) => {
  return (
    <form
      className={`bg-white max-w-xl w-full rounded-lg shadow-lg p-4 flex flex-col gap-6 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </form>
  );
};

export default Form;
