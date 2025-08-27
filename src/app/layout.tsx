import "./globals.css";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Toaster } from "sonner";

import { inter, mono, nasalization, quentine } from "./fonts";

import { keywords } from "@/constant";
import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  applicationName: "Abbu Nithees Reddy",
  title: "Abbu Nithees Reddy",
  description:
    "Abbu Nithees Reddy is a AI & ML Engineer with expertise in Machine Learning, Web Development, and Cybersecurity.",
  authors: [
    {
      name: "Abbu Nithees Reddy",
      url: "https://abbunitheesreddy.vercel.app",
    },
  ],
  creator: "Abbu Nithees Reddy",
  referrer: "origin-when-cross-origin",
  keywords: keywords,
  metadataBase: new URL("https://abbunitheesreddy.vercel.app"),

  // SEO Enhancements
  alternates: {
    canonical: "https://abbunitheesreddy.vercel.app",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }, // fallback
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",

  openGraph: {
    title: "Abbu Nithees Reddy",
    description:
      "Explore Abbu Nithees Reddy’s portfolio featuring projects in React, Next.js, AI, and developer tools.",
    url: "https://abbunitheesreddy.vercel.app",
    siteName: "Abbu Nithees Reddy",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Abbu Nithees Reddy Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abbu Nithees Reddy",
    description:
      "Check out Abbu Nithees Reddy’s personal portfolio and projects using Next.js, React, Tailwind, and modern web tech.",
    images: ["/images/thumbnail.png"],
    creator: "@abbunitheesreddy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} font-sans`}
        suppressHydrationWarning={true}
      >
        {children}
        <Toaster position="bottom-right" richColors closeButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
