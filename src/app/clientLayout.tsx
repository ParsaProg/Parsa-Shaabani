"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TopScrollButton from "@/components/ui/TopScrollButton";
import { useLang } from "@/contexts/languageContext";
import SmoothScrollLayout from "@/lib/smooth-scroll";
import { ToastProvider } from "@/providers/react-hot-toast-provider";
import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MainIntroScreenModal from "@/components/ui/modals/IntroScreenModel";

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  const { lang } = useLang();
  const [introModal, setIntroModal] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroModal(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${lang === "fa" ? "font-iransans" : "font-inter"}`}
      dir={lang === "fa" ? "rtl" : "ltr"}
    >
      <ToastProvider />
      <TopScrollButton />
      <Header />

      <AnimatePresence>
        {introModal && <MainIntroScreenModal />}
      </AnimatePresence>

      <div className="h-[50px]"></div>
      <SmoothScrollLayout>{!introModal && children}</SmoothScrollLayout>
      <Footer />
    </div>
  );
};
