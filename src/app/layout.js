import { Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/components/general.css";
import Lenis from "@/components/Lenis";
import { PageTransitionProvider } from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/next";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mykhailo Kuptsov",
  description: "Mykhailo Kuptsov - Fullstack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <PageTransitionProvider>
          <Lenis />
          {children}
        </PageTransitionProvider>
        <Analytics />
      </body>
    </html>
  );
}
