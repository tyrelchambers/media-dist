import React from "react";
import Input from "../Input/Input";
import InputWrapper from "../InputWrapper/InputWrapper";
import Uploader from "../Uploader/Uploader";
const Youtube = () => {
  const [state, setState] = React.useState({});
  return (
    <div className="flex flex-col gap-4">
      <InputWrapper label="Title">
        <Input placeholder="Title" />
      </InputWrapper>

      <InputWrapper label="Description">
        <Input placeholder="Description" />
      </InputWrapper>

      <InputWrapper label="Thumbnail">
        <Uploader />
      </InputWrapper>

      <InputWrapper label="Upload video">
        <Uploader />
      </InputWrapper>
    </div>
  );
};

export default Youtube;
