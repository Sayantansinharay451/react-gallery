import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="flex items-center p-5 mb-10 shadow-xl shadow-neutral-100 text-neutral-700">
			<div className="flex items-center flex-grow">
				<Link
					to="/"
					className="flex text-neutral-900 font-bold text-2xl md:text-4xl lg:text-6xl"
				>
					React Gallery
				</Link>
			</div>

			<div className="flex items-center">
				<NavLink
					id="ho"
					to="favorite"
					className={({ isActive }) =>
						`mr-10 ${isActive ? "text-red-400" : "text-neutral-200"}`
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
				<div className="flex text-neutral-300 bg-neutral-100 p-3 rounded-xl">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="md:h-7 h-5"
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="md:h-7 h-5"
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
