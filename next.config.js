/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/posts/login", // 사용자 접근 경로
				destination: "/posts", // 리다이렉트 시킬 경로
				permanent: true, // 캐싱 관련 여부
			}, // 위와 같은 형식으로 여러 개 만들 수 있습니다.
		];
	},
};

module.exports = nextConfig;
