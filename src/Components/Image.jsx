import React, { useState, useContext } from "react";
import { Blurhash } from "react-blurhash-as";
import FavoriteImagesContext from "../Context/favorite-image-context";

const Image = ({ image, count, lastObjectObserver }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const favoriteImages = useContext(FavoriteImagesContext);

  const likeHandler = (image) => {
    favoriteImages.onLike(image.id, image);
    image.liked = true;
  };

  const dislikeHandler = (image) => {
    favoriteImages.onDislike(image.id);
    image.liked = false;
  };

  return (
    <div
      onDoubleClick={() => {
        image.liked ? dislikeHandler(image) : likeHandler(image);
      }}
      className="relative group"
      {...(count % 20 ? {} : { ref: lastObjectObserver })}
    >
      <div className="absolute z-10 inset-0 lg:group-hover:bg-neutral-900 lg:group-hover:bg-opacity-20" />
      <Blurhash
        mode="image"
        hash={image.blur_url}
        src={image.url}
        width={image.width}
        height={image.height}
        punch={1}
        alt={image.describe}
        onLoad={() => setImageLoaded(true)}
      />
      {imageLoaded && (
        <div
          className={`${
            image.liked ? "visible" : "invisible"
          } lg:group-hover:visible hover:bg-neutral-200 absolute z-20 flex items-center justify-center bottom-0 m-5 py-1 px-3 bg-neutral-100 rounded shadow-black shadow-2xl ${
            image.liked
              ? "text-red-400 hover:text-red-600"
              : "text-neutral-500 hover:text-neutral-900"
          }`}
          onClick={() => {
            image.liked ? dislikeHandler(image) : likeHandler(image);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Image;
