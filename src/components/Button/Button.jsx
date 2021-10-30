import React from "react";

const primary = (props) => (
  <button
    className={`bg-accent-primary p-3 rounded-lg font-bold text-white shadow-lg ${
      props.className ?? ""
    }`}
    type="button"
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

const secondary = (props) => (
  <button
    className={` ${props.className ?? ""}`}
    type="button"
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

const Button = ({ variant, ...props }) => {
  if (variant === "secondary") {
    return secondary(props);
  }

  return primary(props);
};

export default Button;
