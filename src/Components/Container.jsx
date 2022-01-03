import React, { useRef, useCallback, useContext } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Blurhash } from "react-blurhash-as";
import ImageContext from "../Context/image-context";

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
						<div
							key={index}
							className="relative group"
							{...(index % 20 ? {} : { ref: lastObjectObserver })}
						>
							<div className="absolute z-10 inset-0 lg:group-hover:bg-neutral-900 lg:group-hover:bg-opacity-20" />
							<Blurhash
								mode="image"
								hash={image.blur_url}
								src={image.url}
								width={image.width}
								height={image.height}
								punch={1}
								alt={image.describe}
							/>
							<div className="invisible group-hover:visible hover:bg-neutral-200 hover:text-neutral-900 text-neutral-500 absolute z-20 flex items-center justify-center bottom-0 m-5 py-1 px-3 bg-neutral-100 rounded shadow-black shadow-2xl">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</div>
					))}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
};

export default Container;
