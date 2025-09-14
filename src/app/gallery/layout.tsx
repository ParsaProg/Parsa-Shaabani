import type { Metadata } from "next";
import { ReactNode } from "react";

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
  title: "Gallery | گالری پارسا شعبانی",
  description: "به گالری عکس‌ها و آثار هنری دیجیتال پارسا سر بزنید.",
  openGraph: {
    title: "Gallery | گالری پارسا شعبانی",
    description: "به گالری عکس‌ها و آثار هنری دیجیتال پارسا سر بزنید.",
    url: "https://parsa-shaabani.vercel.app/gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | گالری پارسا شعبانی",
    description: "به گالری عکس‌ها و آثار هنری دیجیتال پارسا سر بزنید.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
