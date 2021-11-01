import React from "react";
import Select from "react-select";
import Youtube from "./Youtube";

const Widget = ({ types, user }) => {
  const [state, setState] = React.useState({
    type: "",
  });

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold ">Widget type</h2>
      </div>
      <Select
        options={types}
        onChange={(v) => {
          setState({ ...state, type: v });
        }}
      />
      <div className="mt-4">
        {state.type.value === "youtube" && <Youtube user={user} />}
      </div>
    </div>
  );
};

export default Widget;
