import React, { useContext, useState } from "react";
import ImageContext from "../Context/image-context";

const SearchBar = () => {
  const context = useContext(ImageContext);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="flex w-full justify-center md:my-5">
      <div
        className={`relative border-b-4 ${
          isFocus
            ? "md:w-3/5 pr-10 dark:border-neutral-100 border-neutral-900"
            : "md:w-3/5 dark:border-neutral-700"
        } w-4/5 pl-3 duration-300`}
      >
        <input
          type="text"
          value={context.query}
          className="w-full dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-600 placeholder-neutral-300 outline-none text-2xl font-medium"
          placeholder="Search..."
          onChange={(e) => context.setQuery(e.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        {context.query.length > 0 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`md:h-8 p-1 mr-3 h-8 absolute top-0 right-0 rounded-full dark:text-white z-10 cursor-pointer`}
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => {
              //   if (isFocus) {
              console.log("clear");
              context.setQuery("");
              //   }
            }}
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
