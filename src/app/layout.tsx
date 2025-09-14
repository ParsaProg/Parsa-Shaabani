import type { Metadata } from "next";

import "./main.css";
import { ThemeProvider } from "next-themes";
import { LangProvider } from "@/contexts/languageContext";
import { ClientLayout } from "./clientLayout";

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  title: "Parsa Shaabani | پارسا شعبانی",
  description:
    "پارسا شعبانی، برنامه نویس و توسعه دهندۀ فرانت‌اند، رزومه‌ها و پروژه‌ها، علاقه‌مند به تکنولوژی و ورزش مکرر",
  openGraph: {
    title: "Parsa Shaabani | پارسا شعبانی",
    description:
      "پارسا شعبانی، برنامه نویس و توسعه دهندۀ فرانت‌اند، رزومه‌ها و پروژه‌ها، علاقه‌مند به تکنولوژی و ورزش مکرر",
  },
  twitter: {
    title: "Parsa Shaabani | پارسا شعبانی",
    description:
      "پارسا شعبانی، برنامه نویس و توسعه دهندۀ فرانت‌اند، رزومه‌ها و پروژه‌ها، علاقه‌مند به تکنولوژی و ورزش مکرر",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className=" dark:bg-background-dark bg-background-light">
        <LangProvider>
          <ThemeProvider enableSystem defaultTheme="system" attribute="class">
            <ClientLayout>{children}</ClientLayout>
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
