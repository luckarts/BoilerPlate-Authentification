import React from 'react';

import { ImagePreview } from '../ImagePreview/ImagePreview';
import { Placeholder } from "../Placeholder";
import './style.scss';

const Dropzone = ({ newImage, type, name, errors, handleOnDrop, register }) => {
  return (
    <section>
      <div>
        {newImage ? <ImagePreview imagefile={newImage} /> : <Placeholder />}
        <input type={type} name={name} ref={register({})} onChange={handleOnDrop} />
        {errors && errors.type === 'required' && <span>This is required</span>}

      </div>

    </section>
  );
};
export default Dropzone;