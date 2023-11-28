import { ChangeEvent } from "react";
import PageRadio from "./components/PageRadio";

interface PageButtonProps {
	page: "about" | "hours" | "reviews";
	handlePageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PageButton = ({ page, handlePageChange }: PageButtonProps) => {
	return (
		<section className="flex my-[0.5rem] text-[0.85rem]">
			<PageRadio value="about" checked={page === "about"} onChange={handlePageChange} />
			<PageRadio value="hours" checked={page === "hours"} onChange={handlePageChange} />
			<PageRadio value="reviews" checked={page === "reviews"} onChange={handlePageChange} />
		</section>
	);
};

export default PageButton;
