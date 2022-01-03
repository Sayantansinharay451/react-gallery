import React, { useState } from "react";

const ImageContext = React.createContext({
	query: "",
	setQuery: (query) => {},
	images: [],
	searchResults: (images) => {},
	page: 1,
	setPage: (page) => {},
	nextPage: () => {},
	hasMore: true,
	setHasMore: (hasMore) => {},
	loading: false,
	setLoading: (loading) => {},
	error: false,
	setError: (error) => {},
});

export const ImageProvider = ({ children }) => {
	const [query, setSearchQuery] = useState("");
	const [images, setImages] = useState([]);
	const [page, setPageNumber] = useState(1);
	const [hasMore, setHasMoreImages] = useState(true);

	const searchResults = (images) => {
		setImages(images);
	};
	const setPage = (page) => {
		setPageNumber(page);
	};
	const nextPage = () => {
		setPageNumber((prevPage) => prevPage + 1);
	};

	const setHasMore = (hasMore) => {
		setHasMoreImages(hasMore);
	};

	const setQuery = (query) => {
		setSearchQuery(query);
	};
	return (
		<ImageContext.Provider
			value={{
				query,
				setQuery,
				images,
				searchResults,
				page,
				setPage,
				nextPage,
				hasMore,
				setHasMore,
			}}
		>
			{children}
		</ImageContext.Provider>
	);
};

export default ImageContext;
