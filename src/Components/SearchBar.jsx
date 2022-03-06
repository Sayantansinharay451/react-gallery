import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import ImageContext from "../Context/image-context";

const SearchBar = () => {
	const context = useContext(ImageContext);
	const [isFocus, setIsFocus] = useState(false);

	return (
		<div className="flex w-full justify-center md:my-5">
			<div
				className={`relative border-b-4 ${
					isFocus ? "md:w-3/5 pr-10 border-neutral-900" : "md:w-3/5"
				} w-4/5 pl-3 duration-300`}
			>
				<input
					type="text"
					value={context.query}
					className="w-full placeholder-neutral-300 outline-none text-2xl font-medium"
					placeholder="Search..."
					onChange={(e) => context.setQuery(e.target.value)}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
				/>
				{context.query.length > 0 && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={`md:h-8 p-1 mr-3 h-5 absolute top-0 right-0 rounded-full ${
							!isFocus
								? "opacity-0 invisible -z-0"
								: "opacity-100 visible cursor-pointer"
						} duration-300`}
						viewBox="0 0 20 20"
						fill="currentColor"
						onClick={() => {
							if (isFocus) {
								console.log("clear");
								context.setQuery("");
							}
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
