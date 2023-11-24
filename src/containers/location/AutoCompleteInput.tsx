"use Client";

import { AppDispatch } from "@/store";
import { handleLocation } from "@/store/slices/locationSlice";
import { Autocomplete } from "@react-google-maps/api";
import { ChangeEvent, useRef } from "react";
import { useDispatch } from "react-redux";

interface AutoCompleteInputProps {
	address: string;
	setAddress: React.Dispatch<React.SetStateAction<string>>;
	setSelectedPlace: React.Dispatch<
		React.SetStateAction<google.maps.places.PlaceResult | undefined>
	>;
}

const AutoCompleteInput = ({ setSelectedPlace, setAddress, address }: AutoCompleteInputProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

	const onChangeAutoCompleteInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		setAddress(value);
	};

	const handlePlaceChanged = () => {
		const place = autocompleteRef.current?.getPlace();
		const placeLocation = {
			lat: place?.geometry?.location?.lat() as number,
			lng: place?.geometry?.location?.lng() as number,
		};
		setSelectedPlace(place);
		dispatch(handleLocation(placeLocation));
	};

	return (
		<Autocomplete
			onLoad={(autocomplete) => {
				autocompleteRef.current = autocomplete;
			}}
			onPlaceChanged={handlePlaceChanged}
			options={{ fields: ["all"] }}
		>
			<input
				type="text"
				onChange={onChangeAutoCompleteInput}
				value={address}
				placeholder="검색어를 입력해주세요."
			/>
		</Autocomplete>
	);
};

export default AutoCompleteInput;
