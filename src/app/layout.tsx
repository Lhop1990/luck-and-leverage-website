import type { Metadata } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

// Brand display face. The brand package ships Chakra Petch as a .ttc
// collection, which browsers cannot load, so it is served from Google
// Fonts — identical typeface, different delivery.
const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Brand body face. Supplied as OTFs in the brand package; served here
// from Google Fonts as a variable font.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
  // Icons come from the app/icon.svg file convention — the brand mark on
  // a charcoal ground. No `icons` entry here, or it would override it.
};

export const viewport = {
  themeColor: "#f5f3ee",
  colorScheme: "light" as const,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${chakra.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory-100 text-charcoal-700">
        <GoogleAnalytics />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:bg-green-500 focus:text-charcoal-800 focus:font-heading focus:font-medium focus:text-xs focus:uppercase focus:tracking-nav"
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
