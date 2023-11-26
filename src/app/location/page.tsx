"use client";

import AutoCompleteInput from "@/containers/location/AutoCompleteInput";
import Map from "@/containers/location/MapContainer";
import { AppDispatch, ReducerType } from "@/store";
import { handlePlaces } from "@/store/slices/placesSlice";
import { useJsApiLoader } from "@react-google-maps/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Location = () => {
	const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || "";
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey,
		libraries: ["places"],
		language: "ko",
		region: "kr",
	});
	const location = useSelector((state: ReducerType) => state.location);
	const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | undefined>();
	const [address, setAddress] = useState("");

	return (
		<main className="relative">
			{isLoaded && (
				<>
					<AutoCompleteInput
						setSelectedPlace={setSelectedPlace}
						setAddress={setAddress}
						address={address}
					/>
					{address !== "" && (
						<div className="text-center w-full absolute z-10 py-[0.75rem] bg-blue-400 text-white">
							<Link href={"/place"} className="text-yellow-300 hover:font-bold">
								시작하기
							</Link>
							를 눌러 주변 음식점을 검색해보세요.
						</div>
					)}
					<Map location={location} />
				</>
			)}
		</main>
	);
};

export default Location;
