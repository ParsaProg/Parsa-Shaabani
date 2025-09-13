"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TopScrollButton from "@/components/ui/TopScrollButton";
import { useLang } from "@/contexts/languageContext";
import SmoothScrollLayout from "@/lib/smooth-scroll";
import Lenis from "@studio-freight/lenis/types";
import { ReactNode, useEffect } from "react";

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  const { lang } = useLang(); // get current languageAnimationFrame(raf);

  return (
    <div
      className={`${lang === "fa" ? "font-iransans" : "font-inter"}`}
      dir={lang === "fa" ? "rtl" : "ltr"}
    >
      <TopScrollButton />
      <Header />
      <div className="h-[50px]"></div>
      <SmoothScrollLayout>{children}</SmoothScrollLayout>
      <Footer />
    </div>
  );
};
