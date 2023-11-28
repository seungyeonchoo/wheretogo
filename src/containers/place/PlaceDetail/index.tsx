"use client";

import { PlaceResult } from "@/utils/type";
import OpeningHours from "./components/OpeningHours";
import Detail from "./components/Detail";
import About from "./components/About";
import { ChangeEvent, useEffect, useState } from "react";
import PageButton from "./components/PageButton";
import Reviews from "./components/Reviews";

interface PlaceDetailProps {
	place?: PlaceResult | undefined;
}

const PlaceDetail = ({ place }: PlaceDetailProps) => {
	const [input, setInput] = useState<{ page: "about" | "hours" | "reviews" }>({ page: "about" });

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setInput({ page: value as "about" | "hours" | "reviews" });
	};

	useEffect(() => {
		setInput({ page: "about" });
	}, [place]);

	return (
		<section>
			<Detail
				title={place?.displayName?.text}
				type={place?.primaryTypeDisplayName?.text}
				isOpen={place?.currentOpeningHours?.openNow}
				address={place?.shortFormattedAddress}
				price={place?.priceLevel}
				rate={place?.rating}
				googleMapUri={place?.googleMapsUri}
				websiteUri={place?.websiteUri}
				contact={place?.internationalPhoneNumber || place?.nationalPhoneNumber}
			/>
			<PageButton page={input.page} handlePageChange={handleInputChange} />
			{input.page === "about" && (
				<About
					pet_friendly={place?.allowsDogs}
					alcohol={place?.servesBeer || place?.servesCocktails || place?.servesWine}
					dine_in={place?.dineIn}
					booking={place?.reservable}
					takeaway={place?.takeout}
					vegan={place?.servesVegetarianFood}
					toilet={place?.restroom}
					breakfast={place?.servesBreakfast}
					outdoor={place?.outdoorSeating}
					delivery={place?.delivery}
					cash_only={place?.paymentOptions?.acceptsCashOnly}
					parking={place?.parkingOptions?.freeParkingLot || place?.parkingOptions?.paidParkingLot}
				/>
			)}
			{input.page === "hours" && <OpeningHours opening_hours={place?.currentOpeningHours} />}
			{input.page === "reviews" && <Reviews reviews={place?.reviews} />}
		</section>
	);
};

export default PlaceDetail;
