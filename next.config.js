/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.unsplash.com', 'unsplash.com'],
	},
	env: {
		REACT_APP_MAPBOX:
			'pk.eyJ1IjoibW9ubGVzIiwiYSI6ImNsMTFrNmc1YjJ2ZGwzbG9wdmttajNwZngifQ.JbFOnabQQFRQ_d62ZtSYgQ',
	},
};

module.exports = nextConfig;
