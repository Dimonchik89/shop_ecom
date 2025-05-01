import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL('https://static.dnipro-m.ua/cache/products/**')],
	},
};

export default nextConfig;
