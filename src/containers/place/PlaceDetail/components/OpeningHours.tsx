import { CurrentOpeningHours } from "@/utils/type";

interface OpeningHoursProps {
	opening_hours?: CurrentOpeningHours;
}

const DAY = ["일", "월", "화", "수", "목", "금", "토"];

const OpeningHours = ({ opening_hours }: OpeningHoursProps) => {
	return (
		<table>
			<tbody>
				{opening_hours?.periods.map((period, idx) => {
					const date = `${period.open.date.year}년 ${period.open.date.month}월 ${
						period.open.date.day
					}일 ${DAY[period.open.day]}`;
					return (
						<tr key={idx}>
							<th>{date}</th>
							<td>
								{period.open.hour} : {period.open.minute === 0 ? "00" : period.open.minute} ~{" "}
								{period.close.hour} : {period.close.minute === 0 ? "00" : period.close.minute}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default OpeningHours;
