import type { Metadata } from 'next';

const baseUrl = 'https://mdshahriar.me';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'Md. Shahriar Mahmud | Full Stack Developer',
        template: '%s | Md. Shahriar Mahmud'
    },
    description: 'Md. Shahriar Mahmud - Full Stack Developer experienced in Laravel and Next.js. Portfolio showcasing projects and skills.',
    keywords: ['Full Stack Developer', 'Laravel', 'Next.js', 'Web Development', 'Portfolio', 'Shahriar Mahmud', 'Software Engineer', 'React'],
    authors: [{ name: 'Md. Shahriar Mahmud', url: baseUrl }],
    creator: 'Md. Shahriar Mahmud',
    publisher: 'Md. Shahriar Mahmud',
    formatDetection: {
        email: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: baseUrl,
        title: 'Md. Shahriar Mahmud | Full Stack Developer',
        description: 'Full Stack Developer specializing in modern web applications with Laravel & Next.js',
        siteName: 'Md. Shahriar Mahmud Portfolio',
        images: [
            {
                url: `${baseUrl}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: 'Md. Shahriar Mahmud Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Md. Shahriar Mahmud | Full Stack Developer',
        description: 'Full Stack Developer specializing in modern web applications with Laravel & Next.js',
        images: [`${baseUrl}/og-image.jpg`],
        creator: '@shahriarcoder',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: baseUrl,
    },
}
