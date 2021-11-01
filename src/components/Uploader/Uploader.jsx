import React, { useState } from "react";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

const Uploader = React.forwardRef((props, ref) => {
  const [files, setFiles] = React.useState([]);
  return (
    <div className="mt-2">
      <FilePond
        ref={ref}
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={props.allowMultiple || false}
        maxFiles={props.maxFiles || 1}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
});

export default Uploader;
