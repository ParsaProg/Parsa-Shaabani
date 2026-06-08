// layout.tsx

import type { Metadata } from "next";

import "./main.css";
import { ThemeProvider } from "next-themes";
import { LangProvider } from "@/contexts/languageContext";
import { ClientLayout } from "./clientLayout";

export const metadata: Metadata = {
  title: "Parsa Shaabani | Portfolio",
  description:
    "Welcome to my professional portfolio showcasing my work and projects.",
  openGraph: {
    title: "Parsa Shaabani | Portfolio",
    description: "Check out my latest projects and professional experience.",
    url: "https://www.parsashaabani.ir", // Replace with your actual deployed URL
    siteName: "Parsa Shaabani",
    images: [
      {
        url: "/images/parsa-shaabani.png", // Path to your image in public folder
        width: 1200,
        height: 630,
        alt: "Parsa Shaabani",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parsa Shaabani | Portfolio",
    description: "Check out my latest projects and professional experience.",
    images: ["/images/parsa-shaabani.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className="dark:bg-background-dark bg-background-light overflow-x-hidden">
        <LangProvider>
          <ThemeProvider enableSystem defaultTheme="system" attribute="class">
            <ClientLayout>{children}</ClientLayout>
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
