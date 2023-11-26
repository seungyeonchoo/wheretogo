"use client";

import { PlaceResult } from "@/utils/type";
import OpeningHours from "./components/OpeningHours";
import Detail from "./components/Detail";

interface PlaceDetailProps {
	place?: PlaceResult | undefined;
}

const PlaceDetail = ({ place }: PlaceDetailProps) => {
	return (
		<section>
			{/* basic info */}
			<Detail
				title={place?.displayName.text}
				type={place?.primaryTypeDisplayName.text}
				isOpen={place?.currentOpeningHours?.openNow}
				address={place?.shortFormattedAddress}
				price={place?.priceLevel}
				rate={place?.rating}
				googleMapUri={place?.googleMapsUri}
			/>
			<div>{place?.googleMapsUri}</div>
			{place?.paymentOptions?.acceptsCashOnly && <div>현금결제만 가능</div>}
			<section className="w-full flex justify-between">
				<label className="py-[1rem] w-[calc(100vw/3)] text-center">
					<input type="radio" className="sr-only peer" />
					<span>About</span>
				</label>
				<label className="py-[1rem] w-[calc(100vw/3)] text-center">
					<input type="radio" className="sr-only peer" />
					<span>Contact</span>
				</label>
				<label className="py-[1rem] w-[calc(100vw/3)] text-center">
					<input type="radio" className="sr-only peer" />
					<span>Hours</span>
				</label>
			</section>

			{/* contact */}
			{place?.websiteUri && <a href={place?.websiteUri}>홈페이지로</a>}
			<div>{place?.internationalPhoneNumber}</div>

			{/* description */}
			{place?.allowsDogs && <div>Pet friendly</div>}
			{place?.dineIn && <div>Dine-in</div>}
			{place?.liveMusic && <div>Live Music</div>}
			{place?.outdoorSeating && <div>Outdoor Seating</div>}
			{(place?.servesBeer || place?.servesCocktails || place?.servesWine) && <div>주류</div>}
			{place?.servesBreakfast && <div>아침식사</div>}
			{place?.servesVegetarianFood && <div>Vegiterian Menu</div>}
			{place?.takeout && <div>테이크아웃</div>}
			{place?.restroom && <div>화장실</div>}
			{place?.reservable && <div>예약가능</div>}

			{/* schedule */}
			<OpeningHours opening_hours={place?.currentOpeningHours} />

			{/* reviews */}
			{/* {place?.reviews?.map((review, idx) => (
				<div key={idx}>{review.originalText?.text}</div>
			))} */}
		</section>
	);
};

export default PlaceDetail;
