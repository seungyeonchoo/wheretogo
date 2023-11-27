"use client";

import { Review } from "@/utils/type";
import Image from "next/image";
import { useState } from "react";

interface ItemProps {
	review: Review;
}

const Item = ({ review }: ItemProps) => {
	const [openToggle, setOpenToggle] = useState<boolean>(false);

	const handleOpenToggle = () => {
		setOpenToggle(!openToggle);
	};

	return (
		<article
			className="shadow-md flex w-[90vw] mx-auto my-[1rem] justify-between cursor-pointer border rounded-[0.5rem] py-[2rem] px-[1.25rem]"
			onClick={handleOpenToggle}
		>
			<Image
				src={review.authorAttribution.photoUri}
				alt=""
				width={200}
				height={200}
				className="w-[3rem] h-[3rem]"
			/>
			<div className="w-[60vw] text-[0.8rem]">
				<div className="flex justify-between">
					<p>{review?.authorAttribution?.displayName}</p>
					<p>{review?.relativePublishTimeDescription}</p>
				</div>
				<p className={`${!openToggle ? "line-clamp-3" : "line-clamp-none"} text-justify`}>
					{review?.originalText?.text}
				</p>
			</div>
		</article>
	);
};

export default Item;
