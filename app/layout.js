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
  title: 'Apeksha Verma | Front End Developer Portfolio',
  description:
    'Apeksha a Front-end developer, software engineer, and SQL Server DBA. Passionate about crafting seamless web experiences, robust applications, and optimized databases.',
  keywords: [
    'Apeksha Verma',
    'Software developer',
    'Full-stack developer',
    'Web developer',
    'MERN stack',
    'portfolio',
    'Computer Science',
    'React developer',
    'UI Developer',
    'Front End Developer',
  ],
  authors: [{ name: 'Apeksha Verma' }],
  alternates: {
    canonical: 'https://apekshaverma.com/',
  },
  appleWebApp: {
    title: "Apeksha-Verma-Portfolio"
  },
  openGraph: {
    title: 'Apeksha Verma | Full-Stack Web Developer Portfolio',
    description:
      'Explore Apeksha Verma’s portfolio, showcasing skills and projects in front end development.',
    url: 'https://apekshaverma.com',
    siteName: 'Apeksha Verma Portfolio',
    images: [
      {
        url: 'https://apekshaverma.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Apeksha Verma Portfolio Preview',
      },
    ],
    logo: 'https://apekshaverma.com/logo/logo.png',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apeksha Verma | Full-Stack Web Developer Portfolio',
    description:
      'Explore Apeksha Verma’s portfolio, showcasing skills and projects in front end development.',
    images: ['https://apekshaverma.com/images/og-image.png'],
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
                url: 'https://apekshaverma.com',
                sameAs: [
                  'https://github.com/Apeksha16',
                  'https://www.linkedin.com/in/itsapeksha16/',
                  'https://www.instagram.com/itsapeksha16/',
                  'https://apeksha-verma.vercel.app/'
                ],
                description:
    'Apeksha a Front-end developer, software engineer, and SQL Server DBA. Passionate about crafting seamless web experiences, robust applications, and optimized databases.',
                image: {
                  '@type': 'ImageObject',
                  url: '/Apeksha Portfolio/portfolio-v2/app/apeksha.HEIC',
                  caption: 'Headshot of Apeksha Verma, a front end developer',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'VideoObject',
                name: 'Apeksha Verma Portfolio Background Video',
                description:
                  'A background video showcasing Apeksha Verma’s portfolio, highlighting skills and projects in front end development.',
                thumbnailUrl: 'https://apekshaverma.com/background/bg.png',
                contentUrl: 'https://apekshaverma.com/background/bg-video.mp4',
                uploadDate: '2025-04-05',
                duration: 'PT15S',
                embedUrl: 'https://apekshaverma.com',
              },
            ]),
          }}
        />
        <meta property="og:logo" content="https://apekshaverma.com/logo/logo.png"></meta>
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
