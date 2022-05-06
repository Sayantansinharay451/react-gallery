import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import ImageContext from "../Context/image-context";

const NavBar = () => {
  const context = useContext(ImageContext);

  const setThemeHandler = () => {
    context.setTheme(context.theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex fixed top-0 z-50 dark:bg-neutral-800 bg-white w-full items-center py-2 px-4 shadow dark:shadow-neutral-800 shadow-neutral-100">
      <div className="flex items-center flex-grow">
        <Link
          to="/"
          className="flex dark:text-neutral-100 text-neutral-900 font-bold text-2xl md:text-4xl"
        >
          React Gallery
        </Link>
      </div>

      <div className="flex items-center">
        <NavLink
          id="like"
          to="favorite"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-red-400"
                : "text-neutral-200 dark:text-neutral-600"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`md:h-12 h-10 hover:fill-red-400 fill-current duration-100`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </NavLink>
        <div className="md:flex items-center ml-10 hidden dark:bg-neutral-900 dark:text-neutral-600 text-neutral-300 bg-neutral-100 p-3 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:h-7 h-5 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <div
            className="dark:bg-neutral-600 bg-neutral-200 shadow-inner relative p-3 px-8 rounded-full cursor-pointer"
            onClick={setThemeHandler}
          >
            <span
              className={`dark:bg-neutral-800 bg-neutral-50 absolute left-0 top-0 ${
                context.theme === "dark" ? "translate-x-10" : ""
              } p-3 rounded-full drop-shadow-md duration-300`}
            ></span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:h-7 h-5 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
