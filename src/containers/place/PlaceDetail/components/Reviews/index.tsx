import { Review } from "@/utils/type";
import Item from "./components/Item";

interface ReviewsProps {
	reviews?: Review[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
	return (
		<section className="my-[2rem]">
			{reviews?.map((review, idx) => (
				<Item key={idx} review={review} />
			))}
		</section>
	);
};

export default Reviews;
