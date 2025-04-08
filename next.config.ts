import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // for static export (next export)
    trailingSlash: true, // important for GitHub Pages to work
    images: {
        unoptimized: true, // <— THIS disables image optimization for static export
    },
};

export default nextConfig;
