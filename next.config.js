module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adamdemo-e4cd5d5b223944-staging.s3.ca-central-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'main.d39ke6gomzcf0r.amplifyapp.com',
        port: '',
        pathname: '/**',
      }
    ],
  },

}
