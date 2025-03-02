import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Navbar } from "./_components/navbar";


export const metadata: Metadata = {
  metadataBase: new URL('https://colorado-robosub-test.vercel.app/'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  keywords: [
    "Autonomous Underwater Vehicles", 
    "AUV", 
    "Underwater Robotics", 
    "Marine Technology", 
    "Underwater Exploration",
    "University of Colorado Boulder",
    "Colorado Robosub",
    "Student Engineering Club",
    "Robotics Competition"
  ],
  title: {
    default: 'Colorado Robosub - CU Boulder Underwater Robotics',
    template: '%s | Colorado Robosub'
  },
  description: 'University of Colorado Boulder\'s premier student-led autonomous underwater vehicle (AUV) design team. Innovating marine robotics through hands-on engineering and technical challenge.',
  openGraph: {
    type: 'website',
    siteName: 'Colorado Robosub',
    url: 'https://colorado-robosub-test.vercel.app/',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Colorado Robosub Autonomous Underwater Vehicle'
      }
    ]
  },
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-inter bg-blue-50`}
      >
        <Navbar/>
        {children}

      </body>
    </html>
  );
}
