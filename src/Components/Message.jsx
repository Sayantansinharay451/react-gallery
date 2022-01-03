import React, { useContext } from "react";
import ImageContext from "../Context/image-context";

const Message = ({ loading, error }) => {
	const context = useContext(ImageContext);

	return (
		<div className="m-52">
			{loading ? (
				<div className="rounded-full border-t-neutral-800 border-2 border-neutral-200 h-10 w-10 animate-spin" />
			) : error ? (
				<div> Something went wrong... </div>
			) : !context.hasMore && context.images.length > 0 ? (
				<div> No more images </div>
			) : (
				<div>No image found as "{context.query}"</div>
			)}
		</div>
	);
};

export default Message;
