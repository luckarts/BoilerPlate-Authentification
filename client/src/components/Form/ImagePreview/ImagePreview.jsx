import React from "react";

export const ImagePreview = ({ imagefile }) =>
  imagefile.map(({ name, preview }) =>
    <div key={name} className="imgPreview">
      <img src={preview} alt={name} />
    </div>);

