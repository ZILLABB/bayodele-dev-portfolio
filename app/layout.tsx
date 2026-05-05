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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ],
};

export const metadata: Metadata = {
  title: "Bayodele Shedu | Full-Stack Software Engineer",
  description: "Full-stack software engineer building production-grade web applications, DeFi platforms, and ML-powered products. Specializing in TypeScript, React, Node.js, Python, and Solidity.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "TypeScript Developer",
    "React Developer",
    "Node.js",
    "Python",
    "Solidity",
    "Smart Contract Developer",
    "Blockchain Engineer",
    "Next.js",
    "DeFi",
    "Machine Learning",
    "Lagos Nigeria",
    "Bayodele Shedu"
  ],
  authors: [{ name: "Bayodele Shedu", url: "https://github.com/ZILLABB" }],
  category: "Technology",
  creator: "Bayodele Shedu",
  publisher: "Bayodele Shedu",
  metadataBase: new URL("https://bayodele.dev"),
  openGraph: {
    title: "Bayodele Shedu | Full-Stack Software Engineer",
    description: "Full-stack software engineer building production-grade web applications, DeFi platforms, and ML-powered products.",
    url: "https://bayodele.dev",
    siteName: "Bayodele Shedu",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bayodele Shedu - Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayodele Shedu | Full-Stack Software Engineer",
    description: "Building production-grade web apps, DeFi platforms, and ML-powered products. TypeScript, React, Python, Solidity.",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                  localStorage.setItem('theme', 'dark');
                }
              })();
            `,
          }}
        />
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
