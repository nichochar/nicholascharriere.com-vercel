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
        <div className="flex flex-col h-screen">
          <header className="h-10 flex justify-end mx-6">
            <div className="flex justify-end gap-4 items-center">
            <a href="https://github.com/nichochar">
              <GitHubLogoIcon className="hover:text-froly-500"/>
            </a>
            <a href="https://www.linkedin.com/in/nicholas-charriere/">
              <LinkedInLogoIcon className="hover:text-froly-500"/>
            </a>
            <a href="https://twitter.com/nichochar">
              <TwitterLogoIcon className="hover:text-froly-500"/>
            </a>
            </div>
          </header>
          <main className="px-4"> {children}</main>
          <footer className="h-10"></footer>
        </div>
      </body>
    </html>
  );
}
