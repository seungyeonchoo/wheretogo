import { PlaceResult } from "@/utils/type";

interface PlaceHeaderProps {
	handlePrev: () => void;
	handleNext: () => void;
	place?: PlaceResult | undefined;
}

const PlaceHeader = ({ place, handleNext, handlePrev }: PlaceHeaderProps) => {
	return (
		<div className="fixed top-0 z-10 w-full flex justify-between text-gray-500">
			<button onClick={handlePrev} className="p-[1rem] text-[1.5rem] opacity-20 hover:opacity-80">
				{"<"}
			</button>
			<button onClick={handleNext} className="p-[1rem] text-[1.5rem] opacity-20 hover:opacity-80">
				{">"}
			</button>
		</div>
	);
};

export default PlaceHeader;
