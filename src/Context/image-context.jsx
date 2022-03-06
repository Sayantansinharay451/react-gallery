import React, { useState, useLayoutEffect } from "react";

const ImageContext = React.createContext({
	theme: "light",
	setTheme: () => {},
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
	const [theme, setApplicationTheme] = useState("");

	useLayoutEffect(() => {
		console.log("useLayoutEffect");
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
			setApplicationTheme("dark");
		} else {
			localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
			setApplicationTheme("light");
		}
	}, [theme]);

	const setTheme = (theme) => {
		setApplicationTheme(theme);
		localStorage.setItem("theme", theme);
	};

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
				theme,
				setTheme,
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
