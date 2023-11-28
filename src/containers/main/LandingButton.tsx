import Link from "next/link";

const LandingButton = () => {
	return (
		<Link
			href={"/location"}
			className="rounded-[0.5rem] text-white bg-green-400 p-[1rem] text-[1.25rem] font-[500] mx-auto"
		>
			장소 검색하여 시작하기
		</Link>
	);
};

export default LandingButton;
