import React, { useContext } from "react";
import ImageContext from "../Context/image-context";

const SearchBar = () => {
	const context = useContext(ImageContext);

	return (
		<input
			type="text"
			value={context.query}
			className="border-b-4 my-5 w-2/3 md:w-1/3 placeholder-neutral-300 outline-none text-2xl rounded-ful font-medium duration-300 md:focus:w-3/5 focus:border-neutral-900"
			placeholder="Search..."
			onChange={(e) => context.setQuery(e.target.value)}
		/>
	);
};

export default SearchBar;
