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
	const dispatch = useDispatch<AppDispatch>();
	const location = useSelector((state: ReducerType) => state.location);
	// const [location, setLocation] = useState<ILocation>({ lat: 37.5734684, lng: 126.978984 });
	const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | undefined>();
	const [address, setAddress] = useState("");

	const handleFetchPlaces = () => {
		const map = document.getElementById("map") as HTMLDivElement;
		const pyrmont = new google.maps.LatLng(location);
		const service = new google.maps.places.PlacesService(map);
		const req = {
			location: pyrmont,
			radius: 1000,
			type: "restaurant",
		};

		const onSuccess = (
			res: google.maps.places.PlaceResult[] | null,
			status: google.maps.places.PlacesServiceStatus | null
			// pagination: google.maps.places.PlaceSearchPagination | null
		) => {
			dispatch(handlePlaces(res));
		};

		service.nearbySearch(req, onSuccess);
	};

	useEffect(() => {
		console.log(location);
	}, [location]);

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
							<Link
								href={"/place"}
								className="text-yellow-300 hover:font-bold"
								onClick={handleFetchPlaces}
							>
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
