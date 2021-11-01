import React from "react";

const primary = (props) => (
  <button
    className={`bg-accent-primary p-3 text-sm rounded-lg font-bold text-white shadow-lg ${
      props.className ?? ""
    }`}
    type="button"
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

const secondary = (props) => (
  <button
    className={`bg-gray-200 p-3 text-sm rounded-lg font-bold text-gray-700  ${
      props.className ?? ""
    }`}
    type="button"
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

const red = (props) => (
  <button
    className={`bg-red-400 p-3 text-sm rounded-lg font-bold text-white  ${
      props.className ?? ""
    }`}
    type="button"
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

const Button = ({ variant, ...props }) => {
  if (variant === "secondary") {
    return secondary(props);
  }

  if (variant === "red") {
    return red(props);
  }

  return primary(props);
};

export default Button;
