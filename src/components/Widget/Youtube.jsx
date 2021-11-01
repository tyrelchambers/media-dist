import React, { createRef, useRef } from "react";
import Select from "react-select";
import Input from "../Input/Input";
import InputWrapper from "../InputWrapper/InputWrapper";
import Uploader from "../Uploader/Uploader";
import Button from "../Button/Button";
import { uploadYoutube } from "../../api/uploadYoutube";
import { uploadYoutubeVideoUri } from "../../api/uploadYoutubeVideoUri";

const Youtube = ({ user }) => {
  const [state, setState] = React.useState({
    title: "",
    description: "",
    tags: "",
    visibility: "private",
  });
  const [files, setFiles] = React.useState([]);

  const videoRef = useRef(null);
  const uploadHandler = async (e) => {
    e.preventDefault();
    console.log(videoRef.current.files);
    const locationUri = await uploadYoutube(
      {
        part: "snippet,contentDetails,status",

        resource: {
          status: {
            privacyStatus: state.visibility,
          },
        },
        snippet: {
          title: state.title,
          description: state.description,
          tags: state.tags.split(","),
        },
        media: {
          mimeType: "video/*",
          body: videoRef.current.files[0],
        },
        notifySubscribers: false,
      },
      user.youtubeAccessToken
    );
    console.log(locationUri);

    // await uploadYoutubeVideoUri(locationUri, user.youtubeAccessToken);
  };

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const videoUpload = (e) => {
    uploadYoutube(user.youtubeRefreshToken);
  };
  return (
    <div className="flex flex-col gap-4">
      <InputWrapper label="Title">
        <Input
          placeholder="Title"
          name="title"
          onChange={(e) => inputHandler(e)}
        />
      </InputWrapper>

      <InputWrapper label="Description">
        <Input
          placeholder="Description"
          name="description"
          onChange={(e) => inputHandler(e)}
        />
      </InputWrapper>

      <InputWrapper label="Tags">
        <Input
          placeholder="Tags"
          name="tags"
          onChange={(e) => inputHandler(e)}
        />
      </InputWrapper>

      <InputWrapper label="Visibility">
        <Select
          className="mt-2"
          options={[
            {
              value: "public",
              label: "Public",
            },
            {
              value: "private",
              label: "Private",
            },
          ]}
          onChange={(e) => inputHandler(e)}
          name="visibility"
        />
      </InputWrapper>

      <InputWrapper label="Thumbnail">
        <Uploader files={files} setFiles={setFiles} videoRef={videoRef} />
      </InputWrapper>

      <InputWrapper label="Upload video">
        <input type="file" ref={(ref) => (videoRef.current = ref)} />
      </InputWrapper>

      <Button onClick={(e) => uploadHandler(e)}>Upload</Button>
    </div>
  );
};

export default Youtube;
