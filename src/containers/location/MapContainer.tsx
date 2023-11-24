"use client";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF, CircleF } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import { ILocation } from "@/utils/type";

interface MapContainerProps {
	// map: google.maps.Map | null;
	// setMap: React.Dispatch<React.SetStateAction<google.maps.Map | null>>;
	location: ILocation;
}

const MapContainer = ({ location }: MapContainerProps) => {
	const mapContainerStyle = { width: "100%", height: "93vh" };

	const mapOption: google.maps.MapOptions = {
		scrollwheel: false,
		mapTypeControl: false,
		streetViewControl: false,
		fullscreenControl: false,
	};

	return (
		<>
			<GoogleMap
				id="map"
				mapContainerStyle={mapContainerStyle}
				center={location}
				zoom={17}
				// onUnmount={onUnmount}
				options={mapOption}
			>
				<MarkerF position={location} />
				<CircleF
					center={location}
					radius={250}
					options={{
						fillColor: "red",
						strokeColor: "red",
						fillOpacity: 0.2,
						strokeOpacity: 0.5,
					}}
				/>
				);
			</GoogleMap>
		</>
	);
};

export default MapContainer;
