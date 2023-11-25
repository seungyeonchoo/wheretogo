import Image from "next/image";

interface PlaceDescriptionProps {
	place: google.maps.places.PlaceResult;
}

const PlaceDescription = ({ place }: PlaceDescriptionProps) => {
	return (
		<section>
			<div className="flex w-full h-[30vh]">
				{place?.photos?.map((photo, idx) => (
					<Image
						src={photo?.getUrl()}
						alt="image"
						key={idx}
						width={100}
						height={100}
						className="object-cover object-bottom w-full h-full"
					/>
				))}
			</div>
			<div>
				{place?.reviews?.map((review, idx) => (
					<li key={idx}>{review?.text}</li>
				))}
			</div>
			<div>{place?.website}</div>
			<div>
				{place?.types?.map((type) => (
					<div key={type}>{type}</div>
				))}
			</div>
			<div>{place?.vicinity}</div>
			<div>{place?.opening_hours?.isOpen() ? "open" : "close"}</div>
			<div>{place?.price_level}</div>
			<div>{place?.rating}</div>
		</section>
	);
};

export default PlaceDescription;
