import React, { useRef, useCallback, useContext } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageContext from "../Context/image-context";
// import { useState } from "react/cjs/react.production.min";
import Image from "./Image";

const Container = ({ images }) => {
	const imageRef = useRef(null);
	const context = useContext(ImageContext);
	const lastObjectObserver = useCallback(
		(node) => {
			if (!node) return;
			if (imageRef.current) imageRef.current.disconnect();
			imageRef.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && context.hasMore) {
					context.nextPage();
					imageRef.current.disconnect();
				}
			});
			if (node) {
				imageRef.current.observe(node);
			}
		},
		[context]
	);

	return (
		<div className="m-10">
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry gutter="20px">
					{images.map((image, index) => (
						<Image
							key={index}
							image={image}
							count={index}
							lastObjectObserver={lastObjectObserver}
						/>
					))}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
};

export default Container;
