import AboutBadge from "./components/AboutBadge";
import Alocohol from "../../../../../../public/svgs/icon_alcohol.svg";
import DineIn from "../../../../../../public/svgs/icon_dine_in.svg";
import BreakFast from "../../../../../../public/svgs/icon_breakfast.svg";
import Pet from "../../../../../../public/svgs/icon_pet.svg";
import Toilet from "../../../../../../public/svgs/icon_toilet.svg";
import TakeAway from "../../../../../../public/svgs/icon_takeaway.svg";
import Vegan from "../../../../../../public/svgs/icon_vegan.svg";
import Outdoor from "../../../../../../public/svgs/icon_outdoor.svg";
import Delivery from "../../../../../../public/svgs/icon_delivery.svg";
import Cash from "../../../../../../public/svgs/icon_cash.svg";
import Parking from "../../../../../../public/svgs/icon_parking.svg";
import Booking from "../../../../../../public/svgs/icon_booking.svg";
import { ReactNode } from "react";

interface AboutProps {
	[key: string]: boolean | undefined;
}

const ICON: { [key: string]: ReactNode } = {
	alcohol: <Alocohol />,
	dine_in: <DineIn />,
	breakfast: <BreakFast />,
	pet_friendly: <Pet />,
	takeaway: <TakeAway />,
	toilet: <Toilet />,
	vegan: <Vegan />,
	outdoor: <Outdoor />,
	delivery: <Delivery />,
	cash_only: <Cash />,
	parking: <Parking />,
	booking: <Booking />,
};

const About = (props: AboutProps) => {
	const propsArr = Object.entries(props);
	return (
		<section className="flex flex-wrap w-[78vw] mx-auto p-[2rem] border-[0.125rem] rounded-[0.5rem] my-[3rem]">
			{propsArr.map((k) => {
				if (k[1]) return <AboutBadge key={k[0]}>{ICON[k[0]]}</AboutBadge>;
			})}
		</section>
	);
};

export default About;
