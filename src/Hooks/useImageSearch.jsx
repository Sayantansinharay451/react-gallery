import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ImageContext from "../Context/image-context";

export const useImageSearch = (query) => {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	const context = useContext(ImageContext);

	useEffect(() => {
		setImages([]);
	}, [query]);

	useEffect(() => {
		const controller = new AbortController();
		const fetchImages = async () => {
			setLoading(true);
			setError(false);
			try {
				const response = await axios({
					method: "GET",
					baseURL: "https://api.unsplash.com",
					url: query.length === 0 ? "/photos" : "/search/photos",
					params: {
						client_id: process.env.REACT_APP_UNSPLASH_API_KEY,
						query: query,
						page: context.page,
						per_page: 30,
					},
					signal: controller.signal,
				});
				const data = query.length === 0 ? response.data : response.data.results;
				setImages((prevImages) => [
					...prevImages,
					...Object.values(data).map((image) => {
						return {
							url: image.urls.regular,
							blur_url: image.blur_hash,
							width: image.width,
							height: image.height,
							describe: image.alt_descriptioN,
						};
					}),
				]);
				setHasMore(
					query.length === 0
						? true
						: images.length !== data.total && context.page <= data.total_pages
				);
				setLoading(false);
			} catch (error) {
				if (error.message === "canceled") {
					return;
				}
				setError(error);
				setLoading(false);
			}
		};
		fetchImages();
		return () => controller.abort();
	}, [query, context.page, setHasMore]);
	return { images, hasMore, loading, error };
};
