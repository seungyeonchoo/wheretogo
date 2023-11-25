"use client";

import PlaceDescription from "@/containers/place/PlaceDescription";
import PlaceHeader from "@/containers/place/PlaceHeader";
import { ReducerType } from "@/store";
import { useState } from "react";
import { useSelector } from "react-redux";

const Place = () => {
	const places = useSelector((state: ReducerType) => state.places);
	const [idx, setIdx] = useState(0);

	const handleNext = () => {
		if (idx < places.length - 1) setIdx(idx + 1);
	};

	const handlePrev = () => {
		if (idx > 0) setIdx(idx - 1);
	};

	return (
		<main>
			<PlaceHeader handleNext={handleNext} handlePrev={handlePrev} place={places[idx]} />
			<PlaceDescription place={places[idx]} />
		</main>
	);
};

export default Place;
