"use client";

import { useLang } from "@/contexts/languageContext";
import EnToFaCn from "@/lib/convertToFarsiNumbers";
import { motion, AnimatePresence } from "framer-motion";
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
              visible: { opacity: 1,},
            }}
            transition={{ duration: 0.4 }}
            className={`z-[9999] fixed top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]
              w-[95%] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px]
              max-h-[90vh] overflow-y-auto border dark:border-slate-700 border-slate-300
              dark:bg-slate-900 bg-slate-100 rounded-lg p-4 flex flex-col items-center
              ${lang === "en" ? "font-inter" : "font-iransans"}
            `}
            dir={lang === "en" ? "ltr" : "rtl"}
          >
            {/* Close Button */}
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsShowPortal(false)}
              className="border fixed top-3 right-3 p-2 cursor-pointer dark:bg-slate-900 bg-slate-100 rounded-lg dark:border-slate-700 border-slate-300 shadow-md"
            >
              <X size={20} />
            </motion.div>

            {/* Image Section */}
            <div className="w-full flex justify-center mt-6 rounded-lg">
              <Image
                draggable={false}
                unoptimized
                alt={farsiTitle}
                src={picture}
                width={800}
                height={600}
                className="rounded-lg object-contain w-full h-auto max-h-[60vh]"
              />
            </div>

            {/* Title */}
            <h1 className="text-center mt-4 font-bold text-lg sm:text-xl md:text-2xl">
              {lang === "en" ? englishTitle : farsiTitle}
            </h1>

            {/* Description */}
            <p className="text-center mt-2 text-sm sm:text-base dark:text-slate-300 text-slate-800 px-2">
              {lang === "en" ? enDesc : faDesc}
            </p>

            {/* Category + Date */}
            <section className="mt-3 flex flex-wrap items-center gap-3 justify-center">
              <div className="flex items-center rounded-full text-xs sm:text-sm dark:bg-primary-dark dark:text-black text-white bg-primary-light px-3 py-2 gap-x-2">
                <LayoutTemplate size={15} />
                {lang === "en" ? enCategory : faCategory}
              </div>
              <span className="text-sm font-[400] dark:text-slate-300 text-slate-800">
                {lang === "en" ? date : EnToFaCn(date.toString())}
              </span>
            </section>

            {/* Likes */}
            <h1 className="text-center mt-3 text-sm sm:text-base">
              {lang === "en"
                ? `Pin Likes: ${likesCount}`
                : `تعداد لایک‌ها: ${EnToFaCn(likesCount.toString())}`}
            </h1>
          </motion.div>

          {/* Backdrop */}
          <motion.div
            key="blur-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsShowPortal(false);
            }}
            className="fixed inset-0 w-full h-screen backdrop-blur-xl z-[9997] bg-black/40"
          />
        </>
      ) : null}
    </AnimatePresence>
  );

  return createPortal(galleryPictureDialog, document.body);
}
