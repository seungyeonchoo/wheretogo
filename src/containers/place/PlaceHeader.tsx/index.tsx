import Link from "next/link";

const PlaceHeader = () => {
	return (
		<header className="p-[0.5rem] text-center text-white bg-blue-400">
			<Link href={"/location"}>장소 검색 화면으로 돌아가기</Link>
		</header>
	);
};

export default PlaceHeader;
