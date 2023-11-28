import getDate from "@/utils/getDate";
import { CurrentOpeningHours } from "@/utils/type";

interface OpeningHoursProps {
	opening_hours?: CurrentOpeningHours;
}

const DAY = ["일", "월", "화", "수", "목", "금", "토"];

const OpeningHours = ({ opening_hours }: OpeningHoursProps) => {
	const today = new Date().getDay();
	return (
		<section className="w-[80vw] my-[3rem] mx-auto text-center border-b-2">
			<h3 className="w-[60vw] mx-auto p-[1rem] bg-gray-400 text-white shadow-lg">영업시간 안내</h3>
			<ul className="py-[1rem] flex flex-col text-[0.85rem] text-gray-800 font-[500]">
				{opening_hours?.weekdayDescriptions.map((des, idx) => {
					return (
						<li
							key={idx}
							className={`py-[0.5rem] ${idx === today - 1 && "text-green-500 font-[600]"}`}
						>
							{des.replace("~", "-").replace("오전", "AM").replace("오후", "PM")}
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default OpeningHours;
