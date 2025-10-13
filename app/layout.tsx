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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://grid-ai.app/#organization",
        "name": "Sentient Labs",
        "url": "https://grid-ai.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://grid-ai.app/logo.png"
        },
        "description": "Building the world's largest decentralized AI network with GRID and ROMA",
        "sameAs": [
          "https://github.com/sentient-agi/ROMA",
          "https://twitter.com/SentientAGI",
          "https://sentient.xyz"
        ],
        "award": "Minsky Awards 2024 - AI Startup of the Year"
      },
      {
        "@type": "WebSite",
        "@id": "https://grid-ai.app/#website",
        "url": "https://grid-ai.app",
        "name": "Sentient GRID & ROMA",
        "description": "Award-winning multi-agent AI framework achieving 81.7% on FRAMES",
        "publisher": {
          "@id": "https://grid-ai.app/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://grid-ai.app/#roma",
        "name": "ROMA - Recursive Open Meta-Agents",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Cross-platform",
        "description": "Open-source multi-agent AI framework achieving 81.7% accuracy on FRAMES benchmark, outperforming Gemini-2.5-Pro by 4x",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "creator": {
          "@id": "https://grid-ai.app/#organization"
        },
        "softwareVersion": "1.0",
        "url": "https://github.com/sentient-agi/ROMA",
        "award": "Minsky Awards 2024 Winner",
        "featureList": [
          "81.7% accuracy on FRAMES benchmark",
          "45.6% accuracy on SEAL-0 benchmark",
          "Recursive task decomposition",
          "Multi-agent coordination",
          "Open-source MIT license"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://grid-ai.app/#grid",
        "name": "GRID - Decentralized AI Network",
        "applicationCategory": "WebApplication",
        "description": "World's largest decentralized AI network connecting 100+ specialized intelligence artifacts",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "creator": {
          "@id": "https://grid-ai.app/#organization"
        },
        "url": "https://chat.sentient.xyz",
        "featureList": [
          "100+ partner artifacts",
          "Decentralized AI coordination",
          "Collaborative intelligence",
          "Multi-agent workflows"
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
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
