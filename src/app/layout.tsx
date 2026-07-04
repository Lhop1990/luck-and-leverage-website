import type { Metadata } from "next";
import { Barlow_Condensed, Space_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

// Barlow Condensed is used as a visually equivalent substitute for
// "Open Sans Condensed" (which Google removed as a standalone family in
// favor of Open Sans + width axis). Same compressed editorial feel.
const heading = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const body = Space_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luckandleverage.com"),
  title: {
    default: "Luck & Leverage — Win the best recruiters",
    template: "%s · Luck & Leverage",
  },
  description:
    "Systems that win the best recruiters and talent leaders quickly and within budget. Advisory and search for firms hiring top recruiters, search professionals, and Heads of Talent in America.",
  applicationName: "Luck & Leverage",
  authors: [{ name: "Jack Saxton" }, { name: "Ollie Medwin" }],
  keywords: [
    "recruiter hiring",
    "executive search",
    "head of talent",
    "talent acquisition",
    "advisory",
    "recruitment firm",
    "R2R",
    "America",
  ],
  openGraph: {
    title: "Luck & Leverage — Win the best recruiters",
    description:
      "Most firms want to hire great recruiters. Few are obsessive enough to win them.",
    type: "website",
    siteName: "Luck & Leverage",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luck & Leverage",
    description:
      "Most firms want to hire great recruiters. Few are obsessive enough to win them.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport = {
  themeColor: "#000000",
  colorScheme: "dark" as const,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg text-ink">
        <GoogleAnalytics />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:bg-lime focus:text-bg focus:font-bold focus:text-xs focus:uppercase focus:tracking-wider focus:outline-none"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
