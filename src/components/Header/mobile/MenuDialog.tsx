"use client";

import { useLang } from "@/contexts/languegeContext";
import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon, Menu, Rss } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileMenuDialog() {
  const { lang } = useLang();
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);
  useEffect(() => {
    if (isShowDialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isShowDialog]);
  return (
    <div className="relative">
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        transition={{ duration: 0.1, delay: 0 }}
        onClick={() => setIsShowDialog(!isShowDialog)}
        className="transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-neutral-800 p-2 rounded-lg border-[1px] dark:border-[#27272A] border-[#E2E8F0] dark:text-neutral-100 text-slate-700"
      >
        <Menu size={18} />
      </motion.div>
      <AnimatePresence>
        {isShowDialog && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, top: 20 }}
            animate={{ opacity: 1, scale: 1, top: "50px" }}
            exit={{ opacity: 0, scale: 0.9, top: 20 }}
            transition={{ duration: 0.1 }}
            className={`z-[9999] absolute [@media(min-width:700px)]:hidden visible top-[50px] rounded-lg dark:bg-background-dark dark:text-white p-1 text-black w-[130px] bg-neutral-100 flex flex-col items-start 
          dark:border-neutral-800 border-[#E2E8F0] border-[0.5px]  ${
            lang === "en" ? "right-0" : "left-0"
          }`}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 0.1 }}
              className="w-full"
            >
              <Link
                href={"/gallery"}
                className="w-full p-2 transition-all duration-200 dark:hover:bg-neutral-800 hover:bg-neutral-300 rounded-md dark:text-neutral-300 text-neutral-700 cursor-pointer flex items-center gap-x-2"
              >
                <ImageIcon size={18} />
                Gallery
              </Link>
            </motion.div>
            <motion.div
              className="w-full"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href={"/blog"}
                className="w-full p-2 transition-all duration-200 dark:hover:bg-neutral-800 hover:bg-neutral-300 rounded-md dark:text-neutral-300 text-neutral-700 cursor-pointer flex items-center gap-x-2"
              >
                <Rss size={18} />
                Blog
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isShowDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsShowDialog(false)}
            className="[@media(max-width:700px)]:backdrop-blur-sm opacity-[1] z-[999] inset-0 w-full h-screen top-[80px] right-0 fixed bg-transparent"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
