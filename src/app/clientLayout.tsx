"use client";

import { useLang } from "@/contexts/languegeContext";
import { ReactNode } from "react";

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  const { lang } = useLang(); // get current language

  return (
    <div
      className={`${lang === "fa" ? "font-iransans" : "font-inter"}`}
      dir={lang === "fa" ? "rtl" : "ltr"}
    >
      {children}
    </div>
  );
};
