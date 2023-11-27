"use client";

import PlaceDescription from "@/containers/place/PlaceDetail";
import PlaceHeader from "@/containers/place/PlaceHeader";
import { ReducerType } from "@/store";
import { PlaceResult } from "@/utils/type";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Place = () => {
	const [list, setList] = useState<PlaceResult[]>([]);
	const location = useSelector((state: ReducerType) => state.location);
	const [idx, setIdx] = useState(0);

	const handleNext = () => {
		if (idx < list.length - 1) setIdx(idx + 1);
	};

	const handlePrev = () => {
		if (idx > 0) setIdx(idx - 1);
	};

	const getPlaces = async () => {
		const res = await fetch(
			`https://places.googleapis.com/v1/places:searchNearby?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"X-Goog-FieldMask": "*",
				},
				body: JSON.stringify({
					includedTypes: ["restaurant"],
					excludedTypes: [
						"hotel",
						"casino",
						"wedding_venue",
						"event_venue",
						"fast_food_restaurant",
						"department_store",
						"grocery_store",
						"store",
					],
					rankPreference: "POPULARITY",
					maxResultCount: 20,
					locationRestriction: {
						circle: {
							center: { latitude: location.lat, longitude: location.lng },
							radius: 500,
						},
					},
				}),
				cache: "force-cache",
			}
		);

		return await res.json();
	};

	useEffect(() => {
		getPlaces().then((res) => setList(res.places));
	}, []);
	console.log(list);
	return (
		<main>
			{list !== undefined && (
				<>
					<PlaceHeader handleNext={handleNext} handlePrev={handlePrev} place={list[idx]} />
					<PlaceDescription place={list[idx]} />
				</>
			)}
		</main>
	);
};

export default Place;
