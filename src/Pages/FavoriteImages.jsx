import React, { useState, useEffect, useContext } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "../Components/Image";
import FavoriteImagesContext from "../Context/favorite-image-context";

const FavoriteImages = () => {
  const favoriteImages = useContext(FavoriteImagesContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(Object.values(favoriteImages.images));
  }, [favoriteImages.images]);

  console.log(images);
  return (
    <div className="w-full flex flex-col">
      <div className="m-10">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, index) => (
              <Image key={index} image={image} count={index} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default FavoriteImages;
