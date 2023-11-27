import OpeningStatus from "./components/OpeningStatus";
import Title from "./components/Title";
import Rating from "./components/Rating";
import GoogleMapsButton from "./components/GoogleMapsButton";
import WebsiteButton from "./components/WebsiteButton";

interface DetailProps {
	title?: string;
	type?: string;
	rate?: number;
	price?: string;
	isOpen?: boolean;
	address?: string;
	googleMapUri?: string;
	contact?: string;
	websiteUri?: string;
}

const Detail = ({
	title,
	type,
	isOpen,
	address,
	price,
	googleMapUri,
	rate,
	contact,
	websiteUri,
}: DetailProps) => {
	return (
		<section className="relative flex flex-col justify-between items-center py-[3rem] text-[0.8rem] text-center bg-gray-50 rounded-b-[1rem] shadow-md">
			<OpeningStatus isOpen={isOpen} />
			<Title title={title} type={type} price={price} />
			<p className="w-[80vw] text-gray-400 font-[500]">{address}</p>
			<p className="w-[80vw] text-gray-400 font-[500]">{contact}</p>
			{rate && <Rating rate={rate} />}
			{websiteUri && <WebsiteButton uri={websiteUri} />}
			<GoogleMapsButton uri={googleMapUri} />
		</section>
	);
};

export default Detail;
