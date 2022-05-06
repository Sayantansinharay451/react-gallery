import React, { useState, useEffect } from "react";

const FavoriteImagesContext = React.createContext({
  images: {},
  onLike: (imageId, imageLink) => {},
  onDislike: (imageId) => {},
});

export const FavoriteImagesProvider = (props) => {
  const [images, setImages] = useState({});

  useEffect(() => {
    if (localStorage.getItem("images")) {
      setImages(JSON.parse(localStorage.getItem("images")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  const onLike = (imageId, image) => {
    console.log(imageId, image);
    setImages((prevImages) => {
      return { ...prevImages, [imageId]: image };
    });
    console.log(images);
  };

  const onDislike = (imageId) => {
    setImages((prevImages) => {
      delete prevImages[imageId];
      console.log(prevImages);
      return { ...prevImages };
    });
  };

  return (
    <FavoriteImagesContext.Provider value={{ images, onLike, onDislike }}>
      {props.children}
    </FavoriteImagesContext.Provider>
  );
};

export default FavoriteImagesContext;
