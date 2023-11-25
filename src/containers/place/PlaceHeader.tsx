interface PlaceHeaderProps {
	handlePrev: () => void;
	handleNext: () => void;
	place: google.maps.places.PlaceResult;
}

const PlaceHeader = ({ place, handleNext, handlePrev }: PlaceHeaderProps) => {
	return (
		<div className="w-full flex justify-between">
			<button onClick={handlePrev}>이전</button>
			<span>{place?.name}</span>
			<button onClick={handleNext}>다음</button>
		</div>
	);
};

export default PlaceHeader;
