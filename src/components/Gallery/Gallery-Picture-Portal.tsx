"use client";

import { useLang } from "@/contexts/languageContext";
import EnToFaCn from "@/lib/convertToFarsiNumbers";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { LayoutTemplate, X } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function GalleryPicturePortal({
  isShowPortal,
  setIsShowPortal,
  picture,
  farsiTitle,
  englishTitle,
  faDesc,
  enDesc,
  faCategory,
  enCategory,
  date,
  likesCount,
}: any) {
  const { lang } = useLang();
  const galleryPictureDialog = (
    <AnimatePresence mode="wait">
      {isShowPortal ? (
        <>
          <motion.div
            key="main-portal"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{
              duration: 0.5,
            }}
            className={`z-[99999] fixed top-[50%] overflow-hidden [@media(min-width:800px)]:w-[800px] w-[95%] h-auto right-[50%] translate-y-[-50%] translate-x-[50%] border-[1px] dark:border-slate-500 border-slate-300 dark:bg-slate-900 bg-slate-100 rounded-lg p-3  dark:text-white text-black flex flex-col items-center ${
              lang === "en" ? "font-inter" : "font-iransans"
            }`}
            dir={lang === "en" ? "ltr" : "rtl"}
          >
            <div className="relative">
              <div className="relative">
                <motion.div
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={() => setIsShowPortal(false)}
                  className="border-[1px] fixed top-[5px] right-[5px] p-1 cursor-pointer dark:bg-slate-900 bg-slate-100 rounded-lg dark:border-slate-700 border-slate-300"
                >
                  <X size={18} />
                </motion.div>
              </div>
              <div className="w-auto h-auto overflow-hidden">
                <Image
                  draggable={false}
                  unoptimized
                  alt={farsiTitle}
                  src={picture}
                  className="mt-2 rounded-lg object-cover"
                  width={350}
                  height={400}
                />
              </div>
              <h1 className="text-center mt-4 dark:text-white text-black font-bold text-xl">
                {lang === "en" ? englishTitle : farsiTitle}
              </h1>
              <h1 className="text-center mt-2 dark:text-slate-200 text-slate-900 text-sm font-[400]">
                {lang === "en" ? enDesc : faDesc}
              </h1>
              <section className="mt-3 flex items-center gap-x-5 justify-center">
                <div className="flex items-center rounded-full text-[13px] dark:bg-primary-dark dark:text-black text-white bg-primary-light p-2 gap-x-2">
                  <LayoutTemplate size={15} />
                  {lang === "en" ? enCategory : faCategory}
                </div>
                <span className="text-sm font-[400] dark:text-slate-300 text-slate-800">
                  {lang === "en" ? date : EnToFaCn(date.toString())}
                </span>
              </section>
              <h1 className="text-center mt-3">
                {lang === "en"
                  ? `Pin Likes: ${likesCount}`
                  : `تعداد لایک‌ها: ${EnToFaCn(likesCount.toString())}`}
              </h1>
            </div>
          </motion.div>
          <motion.div
            key="blur-background"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{
              duration: 0.5,
            }}
            onClick={(e) => {
              e.stopPropagation();
              setIsShowPortal(false);
              console.log(isShowPortal);
            }}
            className="fixed inset-0 top-0 right-0 w-full h-screen backdrop-blur-xl z-[10000] "
          ></motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
  return createPortal(galleryPictureDialog, document.body);
}
