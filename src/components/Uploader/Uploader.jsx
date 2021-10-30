import React, { useState } from "react";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

const Uploader = ({ allowMultiple = false, maxFiles = 1 }) => {
  const [files, setFiles] = useState([]);
  return (
    <div className="mt-2">
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={allowMultiple}
        maxFiles={maxFiles}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
};

export default Uploader;
