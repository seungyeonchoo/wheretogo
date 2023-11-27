import Star from "../../../../../../../public/svgs/icon_rate_full.svg";
import Half from "../../../../../../../public/svgs/icon_rate_half.svg";
import Empty from "../../../../../../../public/svgs/icon_rate_empty.svg";
import getRate from "@/utils/getRate";

interface RatingProps {
	rate?: number;
}

const Rating = ({ rate }: RatingProps) => {
	const rates = getRate(rate as number);

	return (
		<div className="my-[1rem] flex items-center">
			<div className="flex">
				{rates.map((r, idx) => {
					if (r === "full") return <Star key={idx} />;
					if (r === "half") return <Half key={idx} />;
					else return <Empty key={idx} />;
				})}
			</div>
			<span className="mx-[0.5rem] text-[0.95rem] text-gray-500 font-[600]">
				{rate?.toFixed(1)}
			</span>
		</div>
	);
};

export default Rating;
