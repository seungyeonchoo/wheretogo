interface TitleProps {
	title?: string;
	type?: string;
}

const Title = ({ title, type }: TitleProps) => {
	return (
		<h1 className="w-[80vw] text-[2rem] font-bold text-center leading-[2rem] my-[0.75rem] ">
			{title}
			<p className="text-[0.8rem] w-[80vw] text-gray-400 font-[500]">{type}</p>
		</h1>
	);
};

export default Title;
