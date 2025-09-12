"use client";

import { useLang } from "@/contexts/languageContext";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
  return (
    <AnimatePresence>
      {isScroll && (
        <motion.button
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.95,
            },
            visible: { opacity: 1, scale: 1 },
          }}
          onClick={scrollToTop}
          whileTap={{
            scale: 0.9,
          }}
          className={`fixed z-[9997] bottom-[50px] ${
            lang === "en" ? "left-5" : "right-5"
          } cursor-default outline-none rounded-full p-3 dark:text-black text-white dark:bg-primary-dark bg-primary-light`}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
