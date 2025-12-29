/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "homesourcesystems.com" },
      { protocol: "https", hostname: "mybeta.ca" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "www.osler.com" },
      { protocol: "https", hostname: "www.vecteezy.com" },
      { protocol: "https", hostname: "thumbs.dreamstime.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "www.telefonica.com" }, // newly added
    ],
  },
};

module.exports = nextConfig;
