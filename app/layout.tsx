import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentient GRID & ROMA | Award-Winning Multi-Agent AI Framework 2025",
  description: "Explore Sentient Labs' GRID and ROMA (Recursive Open Meta-Agents) - Minsky Awards 2024 Winner. 81.7% accuracy on FRAMES, crushing Gemini. GitHub #1 trending open-source AI framework.",
  keywords: [
    "Sentient AI",
    "GRID",
    "ROMA",
    "Recursive Open Meta-Agents",
    "multi-agent AI",
    "Minsky Awards",
    "AI framework",
    "open-source AI",
    "FRAMES benchmark",
    "SEAL-0",
    "decentralized AI",
    "AGI",
    "collaborative intelligence",
  ],
  authors: [{ name: "Sentient Labs" }],
  creator: "Sentient Labs",
  publisher: "Sentient Labs",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://grid-ai.app',
    title: 'Sentient GRID & ROMA | Minsky Awards 2024 Winner',
    description: 'ROMA (Recursive Open Meta-Agents) - Award-winning multi-agent AI framework achieving 81.7% on FRAMES, outperforming Gemini-2.5-Pro by 4x',
    siteName: 'Sentient GRID & ROMA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentient GRID & ROMA | Minsky Awards 2024 Winner',
    description: 'ROMA achieved 81.7% on FRAMES, crushing Gemini. GitHub #1 trending open-source AI framework.',
    creator: '@SentientAGI',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W7KT31DS7R"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W7KT31DS7R');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
