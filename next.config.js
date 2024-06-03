/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });

    return config;
  },
  images: {
    domains: ["uploadthing.com", "localhost", "192.168.0.108", "utfs.io"],
    // remotePatterns: [
    //   {
    //     protocol: "https, http",
    //     hostname: "utfs.io, localhost, 192.168.0.1:3000,192.168.0.1",
    //     port: "http://localhost:3000/ , http://192.168.0.108:3000/",
    //     pathname: "",
    //   },
    // ],
  },
};

module.exports = nextConfig;
