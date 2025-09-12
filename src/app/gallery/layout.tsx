import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Gallery | گالری پارسا شعبانی",
  description: "به گالری عکس‌ها و آثار هنری دیجیتال پارسا سر بزنید.",
  openGraph: {
    title: "Gallery | گالری پارسا شعبانی",
    description: "به گالری عکس‌ها و آثار هنری دیجیتال پارسا سر بزنید.",
    url: "https://parsa-shaabani.vercel.app/gallery",
    images: [
      {
        url: "https://www.mywebsite.com/gallery-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gallery preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
