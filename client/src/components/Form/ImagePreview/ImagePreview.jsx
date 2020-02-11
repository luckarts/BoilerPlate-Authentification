import React from "react";

export const ImagePreview = ({ imagefile }) =>

  <div className="imgPreview">
    <img src={imagefile.preview} />
  </div>;

