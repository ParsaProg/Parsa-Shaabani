"use client";

import { useLang } from "@/contexts/languageContext";
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
            className={`z-[9999] absolute [@media(min-width:700px)]:hidden visible top-[50px] rounded-lg dark:bg-background-dark dark:text-white p-1 text-black w-[130px] bg-slate-100 flex flex-col items-start 
          dark:border-neutral-800 border-[#d0d7e1] border-[0.5px]  ${
            lang === "en" ? "right-0" : "left-0"
          }`}
          >
            <motion.div
              onClick={() => setIsShowDialog(false)}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: lang === "en" ? -50 : 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 0.1 }}
              className="w-full overflow-hidden"
            >
              <Link
                href={"/gallery"}
                className="w-full p-2 transition-all duration-200 dark:hover:bg-neutral-800 hover:bg-slate-300 rounded-md dark:text-neutral-300 text-neutral-700 cursor-pointer flex items-center gap-x-2"
              >
                <ImageIcon size={18} />
                {lang === "en" ? "Gallery" : "گالری"}
              </Link>
            </motion.div>
            <motion.div
              onClick={() => setIsShowDialog(false)}
              className="w-full oveflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: lang === "en" ? -50 : 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href={"/blog"}
                className="w-full p-2 transition-all duration-200 dark:hover:bg-neutral-800 hover:bg-slate-300 rounded-md dark:text-neutral-300 text-neutral-700 cursor-pointer flex items-center gap-x-2"
              >
                <Rss size={18} />
                {lang === "en" ? "Blog" : "وبلاگ"}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {isShowDialog && (
        <div
          onClick={() => setIsShowDialog(false)}
          className="z-[9998] inset-0 w-full h-screen top-0 right-0 fixed bg-transparent"
        ></div>
      )}
    </div>
  );
}
