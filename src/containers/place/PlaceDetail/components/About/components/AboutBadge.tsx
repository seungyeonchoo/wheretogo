import { ReactNode } from "react";

interface AboutBadgeProps {
	children: ReactNode;
}

const AboutBadge = ({ children }: AboutBadgeProps) => {
	return (
		<span className="m-[0.25rem] p-[0.5rem] bg-blue-200 border-gray-100 border-2 shadow-md rounded-md">
			{children}
		</span>
	);
};

export default AboutBadge;
