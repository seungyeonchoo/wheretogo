const DAY = ["일", "월", "화", "수", "목", "금", "토"];

const getDate = (year: number, month: number, date: number, day: number) => {
	const m = month < 10 ? `0${month}` : month;
	const d = date < 10 ? `0${date}` : date;

	return `${year}년 ${m}월 ${d}일 ${DAY[day]}요일`;
};

export default getDate;
