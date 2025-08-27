import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Abbu Nithees Reddy",
  description:
    "View and download Abbu Nithees Reddy's professional resume. AI & ML Engineer with expertise in Machine Learning, Web Development, and Cybersecurity.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Abbu Nithees Reddy",
    description:
      "View and download Abbu Nithees Reddy's professional resume featuring his experience and skills as an AI & ML Engineer.",
    url: "https://abbunitheesreddy.vercel.app/resume",
    siteName: "Abbu Nithees Reddy",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Abbu Nithees Reddy Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Abbu Nithees Reddy",
    description:
      "View Abbu Nithees Reddy's professional resume and experience as an AI & ML Engineer.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      {/* Preload the PDF for better performance */}
      <link
        rel="preload"
        href="/docs/Abbu_Nithees_Resume.pdf"
        as="document"
        type="application/pdf"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
