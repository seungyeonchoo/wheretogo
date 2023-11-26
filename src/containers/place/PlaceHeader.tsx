import { PlaceResult } from "@/utils/type";

interface PlaceHeaderProps {
	handlePrev: () => void;
	handleNext: () => void;
	place?: PlaceResult | undefined;
}

const PlaceHeader = ({ place, handleNext, handlePrev }: PlaceHeaderProps) => {
	return (
		<div className="w-full flex justify-between">
			<button onClick={handlePrev}>이전</button>
			<button onClick={handleNext}>다음</button>
		</div>
	);
};

export default PlaceHeader;
