interface OpeningStatusProp {
	isOpen?: boolean;
}

const OpeningStatus = ({ isOpen }: OpeningStatusProp) => {
	const currStatusColor = isOpen ? "bg-green-400 border-green-700" : "bg-red-400 border-red-700";
	return (
		<span className={`px-[1rem] py-1 border text-white shadow-lg ${currStatusColor} rounded-full`}>
			{isOpen ? "영업중" : "영업종료"}
		</span>
	);
};

export default OpeningStatus;
