import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductImg = ({ images }) => {
  const [mainImg, setMainImg] = useState(images?.[0]?.url);
  if (!images || images.length === 0) {
    return (
      <div className="w-[500px] h-[500px] bg-gray-100 flex items-center justify-center text-gray-400">
        No image available
      </div>
    );
  }
  return (
    <div className="flex gap-5 w-max">
      {/* Thumbnail Images */}
      <div className="flex flex-col gap-5">
        {images.map((img, index) => (
          <img
            key={index}
            onClick={() => setMainImg(img.url)}
            src={img.url}
            alt=""
            className="cursor-pointer w-20 h-20 border shadow-lg object-cover"
          />
        ))}
      </div>

      {/* Main Image */}
      <Zoom>
        <img src={mainImg} alt="" className="w-[500px] border shadow-lg" />
      </Zoom>
    </div>
  );
};

export default ProductImg;
