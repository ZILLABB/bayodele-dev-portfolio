import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  title: "Bayodele Shedu | Full-Stack Developer & AI Enthusiast",
  description: "Building intelligent systems and modern web applications with cutting-edge technologies and AI integration. Full-stack developer specializing in Next.js, React, and AI technologies.",
  keywords: [
    "Full-Stack Developer",
    "AI Integration",
    "Web Development",
    "Next.js Developer",
    "React Developer",
    "AI Applications",
    "Modern Web Apps",
    "TypeScript",
    "Python",
    "Node.js",
    "Bayodele Shedu"
  ],
  authors: [{ name: "Bayodele Shedu", url: "https://github.com/ZILLABB" }],
  category: "Technology",
  creator: "Bayodele Shedu",
  publisher: "Bayodele Shedu",
  metadataBase: new URL("https://bayodele.dev"),
  openGraph: {
    title: "Bayodele Shedu | Full-Stack Developer & AI Enthusiast",
    description: "Building intelligent systems and modern web applications with cutting-edge technologies and AI integration.",
    url: "https://bayodele.dev",
    siteName: "Bayodele Shedu Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bayodele Shedu - Full-Stack Developer & AI Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayodele Shedu | Full-Stack Developer & AI Enthusiast",
    description: "Building intelligent systems and modern web applications with cutting-edge technologies and AI integration.",
    creator: "@yourusername",
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
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
