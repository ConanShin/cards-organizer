/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',  // For GitHub Pages deployment as per original project
    images: {
        unoptimized: true, // Required for static export
    },
    basePath: '/cards-organizer', // Assuming GitHub Pages repo name
};

module.exports = nextConfig;
