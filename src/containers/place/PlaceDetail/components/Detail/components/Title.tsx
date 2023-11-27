interface TitleProps {
	title?: string;
	type?: string;
	price?: string;
}

const PRICE: { [key: string]: string } = {
	PRICE_LEVEL_INEXPENSIVE: "₩",
	PRICE_LEVEL_MODERATE: "₩₩",
	PRICE_LEVEL_EXPENSIVE: "₩₩₩",
};

const Title = ({ title, type, price }: TitleProps) => {
	return (
		<>
			<h1 className="w-[80vw] text-[2rem] font-bold text-center leading-[2rem] mt-[1rem] mb-[0.25rem] ">
				{title}
			</h1>
			<p className="text-[0.8rem] w-[80vw] text-gray-400 font-[500]">{type}</p>
			<p className="w-[80vw] text-gray-400 mb-[1rem]">{price && PRICE[price]}</p>
		</>
	);
};

export default Title;
