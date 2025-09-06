import type { Metadata } from "next";

import "./main.css";
import { ThemeProvider } from "next-themes";
import { LangProvider } from "@/contexts/languegeContext";
import { ClientLayout } from "./clientLayout";

export const metadata: Metadata = {
  title: "Parsa Shaabani | پارسا شعبانی",
  description: "ParsaShaabani portfolio website",
  openGraph: {
    title: "Parsa Shaabani | پارسا شعبانی",
    description: "ParsaShaabani portfolio website",
  },
  twitter: {
    title: "Parsa Shaabani | پارسا شعبانی",
    description: "ParsaShaabani portfolio website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className="select-none dark:bg-background-dark bg-background-light">
        <LangProvider>
          <ThemeProvider enableSystem defaultTheme="system" attribute="class">
            <ClientLayout>{children}</ClientLayout>
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
