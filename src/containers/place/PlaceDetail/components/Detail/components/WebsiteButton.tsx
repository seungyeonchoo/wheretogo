import Website from "../../../../../../../public/svgs/icon_website_click_.svg";

interface WebsiteButtonProps {
	uri?: string;
}

const WebsiteButton = ({ uri }: WebsiteButtonProps) => {
	return (
		<a
			href={uri}
			className="absolute p-[0.25rem] bg-white shadow-md bottom-[1rem] left-[1rem] cursor-pointer border rounded-full"
		>
			<Website />
		</a>
	);
};

export default WebsiteButton;
