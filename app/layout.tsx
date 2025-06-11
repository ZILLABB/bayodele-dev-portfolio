import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";
// import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: "Bayodele Shedu | AI-Powered Developer & Master of Intelligent Prompting",
  description: "Expert AI-powered developer specializing in rapid application development using Cursor, Augment, and Windsurf. Building production-ready full-stack applications, smart contracts, and ML solutions with exceptional prompting skills.",
  keywords: [
    "AI-Powered Developer",
    "Cursor AI",
    "Augment AI",
    "Windsurf AI",
    "AI Prompting Expert",
    "Smart Contract Developer",
    "Blockchain Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "TypeScript",
    "Python",
    "Solidity",
    "Next.js",
    "React",
    "Bayodele Shedu"
  ],
  authors: [{ name: "Bayodele Shedu", url: "https://github.com/ZILLABB" }],
  category: "Technology",
  creator: "Bayodele Shedu",
  publisher: "Bayodele Shedu",
  metadataBase: new URL("https://bayodele.dev"),
  openGraph: {
    title: "Bayodele Shedu | AI-Powered Developer & Master of Intelligent Prompting",
    description: "Expert AI-powered developer specializing in rapid application development using Cursor, Augment, and Windsurf. Building production-ready applications with exceptional prompting skills.",
    url: "https://bayodele.dev",
    siteName: "Bayodele Shedu Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bayodele Shedu - AI-Powered Developer & Master of Intelligent Prompting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayodele Shedu | AI-Powered Developer & Master of Intelligent Prompting",
    description: "Expert AI-powered developer specializing in rapid application development using Cursor, Augment, and Windsurf.",
    creator: "@ZILLABB",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
        {/* <ThemeProvider> */}
          <ClientLayout>
            {children}
          </ClientLayout>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
