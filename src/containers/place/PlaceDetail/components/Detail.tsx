import Star from "../../../../../public/svgs/icon_rate_full.svg";
import Half from "../../../../../public/svgs/icon_rate_half.svg";
import Empty from "../../../../../public/svgs/icon_rate_empty.svg";
import GoogleMaps from "../../../../../public/svgs/icon_google_maps_.svg";
import getRate from "@/utils/getRate";
import OpeningStatus from "./OpeningStatus";
import Title from "./Title";

interface DetailProps {
	title?: string;
	type?: string;
	rate?: number;
	price?: string;
	isOpen?: boolean;
	address?: string;
	googleMapUri?: string;
}

const PRICE: { [key: string]: string } = {
	PRICE_LEVEL_INEXPENSIVE: "₩",
	PRICE_LEVEL_MODERATE: "₩₩",
	PRICE_LEVEL_EXPENSIVE: "₩₩₩",
};

const Detail = ({ title, type, isOpen, address, price, googleMapUri, rate }: DetailProps) => {
	const rates = getRate(rate as number);

	return (
		<section className="relative flex flex-col justify-between items-center py-[3rem] text-[0.8rem] text-center bg-gray-50 border-b">
			<OpeningStatus isOpen={isOpen} />
			<Title title={title} type={type} />
			<p className="w-[80vw] text-gray-400 font-[500]">{address}</p>
			<p className="w-[80vw] text-gray-400">{price && PRICE[price]}</p>
			<div className="my-[1rem] flex items-center">
				<div className="flex">
					{rates.map((r) => {
						if (r === "full") return <Star />;
						if (r === "half") return <Half />;
						else return <Empty />;
					})}
				</div>
				<span className="mx-[1rem] text-[1rem] font-[500]">{rate?.toFixed(1)}</span>
			</div>
			<a
				href={googleMapUri}
				className="absolute bottom-[1rem] right-[1rem] flex bg-white items-center border px-[1rem] py-[0.5rem] rounded-[0.5rem] font-[600]"
			>
				<GoogleMaps /> Google Map
			</a>
		</section>
	);
};

export default Detail;
