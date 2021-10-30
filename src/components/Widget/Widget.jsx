import React from "react";
import Select from "react-select";
import Youtube from "./Youtube";

const Widget = ({ types, setUsedType }) => {
  const [state, setState] = React.useState({
    type: "",
  });

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-lg">
      <h2 className="font-bold mb-4">Widget type</h2>
      <Select
        options={types}
        onChange={(v) => {
          setState({ ...state, type: v.value });
          setUsedType(v.value);
        }}
      />

      <div className="mt-4">{state.type === "youtube" && <Youtube />}</div>
    </div>
  );
};

export default Widget;
