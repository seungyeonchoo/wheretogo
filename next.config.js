/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "maps.googleapis.com",
				port: "",
				pathname: "/maps/api/place/js/PhotoService.GetPhoto/**",
			},
		],
	},
};

module.exports = nextConfig;
