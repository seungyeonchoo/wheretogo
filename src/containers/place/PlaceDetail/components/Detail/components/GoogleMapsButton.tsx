import GoogleMaps from "../../../../../../../public/svgs/icon_google_maps_.svg";

interface GoogleMapsButtonProps {
	uri?: string;
}

const GoogleMapsButton = ({ uri }: GoogleMapsButtonProps) => {
	return (
		<a
			href={uri}
			aria-description={uri}
			className="absolute bottom-[1rem] right-[1rem] flex bg-white items-center border px-[1rem] py-[0.5rem] rounded-[0.5rem] font-[600]"
		>
			<GoogleMaps /> Google Map
		</a>
	);
};

export default GoogleMapsButton;
