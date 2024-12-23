/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      type: 'asset/resource'
    });
    return config;
  },
  images: {
    domains: ['localhost'],
  }
}

export default nextConfig
