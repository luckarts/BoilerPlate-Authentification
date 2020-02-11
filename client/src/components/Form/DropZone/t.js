import React from 'react';
import { useDropzone } from "react-dropzone";
import { ImagePreview } from '../ImagePreview/ImagePreview';
import { Placeholder } from "../Placeholder";


const Dropzone = ({ newImage, type, name, errors, handleOnDrop, register }, props) => {
    const { getRootProps, getInputProps } = useDropzone();

    return (
        <section>
            <div {...getRootProps({ className: "form-input dropzone" })} ref={register({ required: "required" })}>
                <input {...getInputProps()} type="file" name="test" />
                {errors && errors.type === 'required' && <span>This is required</span>}
                {newImage.length > 0 ? <ImagePreview imagefile={newImage} /> : <Placeholder />}
            </div>

        </section>
    );
};
export default Dropzone;