/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'books.google.com'
            },
        ]
    },
}

module.exports = nextConfig
