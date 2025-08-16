import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavbarClient";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: 'black',
}

export const metadata = {
  title: 'Apeksha Verma | Full-Stack Web Developer Portfolio',
  description:
    'Apeksha Verma is a full-stack web developer and software developer based in Toronto, Canada. Explore my portfolio, skills, and projects in web development and blockchain.',
  keywords: [
    'Apeksha Verma',
    'software developer',
    'full-stack developer',
    'web developer Toronto',
    'blockchain development',
    'MERN stack',
    'portfolio',
    'York University',
    'Computer Science'
  ],
  authors: [{ name: 'Apeksha Verma' }],
  alternates: {
    canonical: 'https://apeksha-verma.me/',
  },
  appleWebApp: {
    title: "Apeksha-Verma-Portfolio"
  },
  openGraph: {
    title: 'Apeksha Verma | Full-Stack Web Developer Portfolio',
    description:
      'Explore Apeksha Verma’s portfolio, showcasing skills and projects in full-stack web development and blockchain.',
    url: 'https://apeksha-verma.me',
    siteName: 'Apeksha Verma Portfolio',
    images: [
      {
        url: 'https://apeksha-verma.me/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Apeksha Verma Portfolio Preview',
      },
    ],
    logo: 'https://apeksha-verma.me/logo/logo.png',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apeksha Verma | Full-Stack Web Developer Portfolio',
    description:
      'Explore Apeksha Verma’s portfolio, showcasing skills and projects in full-stack web development and blockchain.',
    images: ['https://apeksha-verma.me/images/og-image.png'],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Apeksha Verma',
                jobTitle: 'Full-Stack Web Developer',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Toronto',
                  addressRegion: 'ON',
                  addressCountry: 'Canada',
                },
                url: 'https://apeksha-verma.me',
                sameAs: [
                  'https://github.com/Apeksha16',
                  'https://www.linkedin.com/in/itsapeksha16/',
                  'https://www.instagram.com/itsapeksha16/',
                  'https://apeksha-verma.vercel.app/'
                ],
                description:
                  'Apeksha Verma is a full-stack web developer based in Toronto, Canada, specializing in MERN stack, Python, Java, and blockchain development.',
                image: {
                  '@type': 'ImageObject',
                  url: '/Apeksha Portfolio/portfolio-v2/app/apeksha.HEIC',
                  caption: 'Headshot of Apeksha Verma, a full-stack web developer',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'VideoObject',
                name: 'Apeksha Verma Portfolio Background Video',
                description:
                  'A background video showcasing Apeksha Verma’s portfolio, highlighting skills and projects in full-stack web development and blockchain.',
                thumbnailUrl: 'https://apeksha-verma.me/background/bg.png',
                contentUrl: 'https://apeksha-verma.me/background/bg-video.mp4',
                uploadDate: '2025-04-05',
                duration: 'PT15S',
                embedUrl: 'https://apeksha-verma.me',
              },
            ]),
          }}
        />
        <meta property="og:logo" content="https://apeksha-verma.me/logo/logo.png"></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `} suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
