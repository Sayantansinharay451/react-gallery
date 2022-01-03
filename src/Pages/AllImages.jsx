import React, { useContext, useEffect } from "react";
import Container from "../Components/Container";
import Message from "../Components/Message";
import ImageContext from "../Context/image-context";
import { useImageSearch } from "../Hooks/useImageSearch";

const AllImages = () => {
	const context = useContext(ImageContext);

	const { images, hasMore, error, loading } = useImageSearch(context.query);

	useEffect(() => {
		context.searchResults(images);
		context.setHasMore(hasMore);
	}, [context, images, hasMore]);

	return (
		<>
			<div className="w-full">
				<Container images={context.images} />
			</div>
			<Message error={error} loading={loading} />
		</>
	);
};

export default AllImages;
