import LandingButton from "@/containers/main/LandingButton";
import LandingMessage from "@/containers/main/LandingMessage";
import Image from "next/image";
import wallpaper from "../../public/bg_image.png";

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<LandingMessage />
			<LandingButton />
			<Image src={wallpaper} fill={true} alt="" className="-z-10 opacity-40" />
		</main>
	);
}
