import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://jayantrao.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jayant - Full-Stack Developer",
    template: "%s - Jayant",
  },
  description:
    "Jayant Rao is a Computer Science student and full-stack developer building web applications, backend systems, and AI-powered products.",
  keywords: [
    "Jayant Rao",
    "Full-Stack Developer",
    "AI Builder",
    "Next.js Developer",
    "Backend Engineer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "N Jayant Rao" }],
  creator: "N Jayant Rao",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "N Jayant Rao — Full-Stack Developer",
    description:
      "Building full-stack applications, backend systems, and AI-powered products — turning ideas into useful software.",
    siteName: "Jayant Rao",
  },
  twitter: {
    card: "summary_large_image",
    title: "N Jayant Rao — Full-Stack Developer",
    description:
      "Building full-stack applications, backend systems, and AI-powered products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
