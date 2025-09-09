"use client";

import { useLang } from "@/contexts/languegeContext";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TopScrollButton() {
  function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }
  const [isScroll, setIsScroll] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const scrollNeed = window.scrollY >= 50;
    setIsScroll(scrollNeed);
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  const { lang } = useLang();
  return isScroll ? (
    <motion.button
      onClick={scrollToTop}
      whileTap={{
        scale: 0.9,
      }}
      className={`fixed z-[9997] bottom-10 ${
        lang === "en" ? "left-5" : "right-5"
      } outline-none rounded-lg p-2 dark:text-black text-white dark:bg-primary-dark bg-primary-light`}
    >
      <ArrowUp size={20} />
    </motion.button>
  ) : (
    <div></div>
  );
}
