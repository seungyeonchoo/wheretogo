import { ComponentPropsWithoutRef } from "react";

const PageRadio = ({ ...rest }: ComponentPropsWithoutRef<"input">) => {
	return (
		<label className="w-[calc(100vw/3)] text-center border-b shadow-lg bg-gray-50 cursor-pointer">
			<input type="radio" name="page" className="sr-only peer" {...rest} />
			<p className="peer-checked:bg-gray-600 peer-checked:text-white text-gray-600 font-[600] py-[1rem]">
				{rest.value}
			</p>
		</label>
	);
};

export default PageRadio;
