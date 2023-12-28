import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicholas Charriere",
  keywords: ['Nicholas Charriere', 'Axflow', 'founder', 'personal page nicholas charriere', 'programmer AI'],
  metadataBase: new URL('https://nicholascharriere.com'),
  openGraph: {
    title: 'Nicholas Charriere',
    description: 'The personal website of Nicholas Charriere.',
    url: 'https://nicholascharriere.com',
    siteName: 'Nicholas Charriere',
    images: '/nicholas2.jpg',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicholas Charriere',
    description: 'The personal website of Nicholas Charriere.',
    creator: '@nichochar',
    images: ['https://nicholascharriere.com/nicholas2.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-api="/api/event"
          data-domain="nicholascharriere.com"
          src="/js/script.js"
        ></script>
      </head>
      <body className={`${roboto.className} bg-bg text-text-500`}>
        <div className="flex flex-col min-h-screen">
          <header className="h-10 flex justify-end mx-6">
            <div className="flex justify-end gap-4 items-center">
            <a href="https://github.com/nichochar">
              <GitHubLogoIcon className="hover:text-froly-500 transition-all"/>
            </a>
            <a href="https://www.linkedin.com/in/nicholas-charriere/">
              <LinkedInLogoIcon className="hover:text-froly-500 transition-all"/>
            </a>
            <a href="https://twitter.com/nichochar">
              <TwitterLogoIcon className="hover:text-froly-500 transition-all"/>
            </a>
            </div>
          </header>
          <main className="px-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
