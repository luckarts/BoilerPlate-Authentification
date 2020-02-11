import React from 'react';
import { useDropzone } from "react-dropzone";
import { ImagePreview } from '../ImagePreview/ImagePreview';
import { Placeholder } from "../Placeholder";
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { getDroppedOrSelectedFiles } from 'html5-file-selector'

const InputImg = ({ accept, onFiles, files, getFilesFromEvent, inputContent }) => {
  const text = files.length > 0 ? 'Add more files' : 'Choose files';
  console.log(inputContent);
  return (
    <label style={{ backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', padding: 15, borderRadius: 3 }}>
      {text}
      <input
        style={{ display: 'none' }}
        type="file"
        accept={accept}
        onChange={e => {
          getFilesFromEvent(e).then(chosenFiles => {
            onFiles(chosenFiles);
          });
        }}
      />
    </label>
  )
};
export default InputImg;