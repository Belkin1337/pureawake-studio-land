import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ibb.co',
				port: '',
				pathname: '/**',
			},
		],
	},
	distDir: "build"
};

export default withNextIntl(nextConfig);