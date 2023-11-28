interface PlaceButtonProps {
	handlePrev: () => void;
	handleNext: () => void;
}

const PlaceButton = ({ handleNext, handlePrev }: PlaceButtonProps) => {
	return (
		<>
			<button
				onClick={handlePrev}
				className="fixed z-10 left-[0.5rem] top-[5rem] p-[1rem] text-[1.5rem] opacity-20 hover:opacity-80"
			>
				{"<"}
			</button>
			<button
				onClick={handleNext}
				className="fixed z-10 right-[0.5rem] top-[5rem] p-[1rem] text-[1.5rem] opacity-20 hover:opacity-80"
			>
				{">"}
			</button>
		</>
	);
};

export default PlaceButton;
