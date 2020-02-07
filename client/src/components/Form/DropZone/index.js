import React from 'react';
import DropZone from "react-dropzone";
import { ImagePreview } from '../ImagePreview/ImagePreview';
import { Placeholder } from "../Placeholder";


const Dropzone = ({ newImage, type, name, errors, ref, handleOnDrop }, props) =>
  <DropZone
    accept="image/jpeg, image/png "
    onDrop={handleOnDrop}
    onChange={file => props.input.onChange(file)}>
    {({ getRootProps, getInputProps }) =>

      <div {...getRootProps({ className: "form-input dropzone" })}>
        <input {...getInputProps()} type={type} name={name} errors={errors} />
        {errors && errors.type === 'required' && <span>This is required</span>}
        {newImage.length > 0 ? <ImagePreview imagefile={newImage} /> : <Placeholder />}
      </div>


    }

  </DropZone>;

export default Dropzone;