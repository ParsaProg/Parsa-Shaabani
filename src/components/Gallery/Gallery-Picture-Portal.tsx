"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export default function GalleryPicturePortal({
  isShowPortal,
  setIsShowPortal,
}: any) {
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
            className={`z-[9998] fixed top-[50%] w-[500px] h-[400px] right-[50%] translate-y-[-50%] translate-x-[50%] dark:bg-neutral-800 bg-slate-100 rounded-lg p-5 dark:border-neutral-700 border-slate-300 dark:text-white text-black shadow-sm dark:shadow-neutral-700 shadow-slate-400`}
          >
            Hello How are you?{" "}
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
            className="fixed inset-0 w-full h-screen backdrop-blur-xl z-[9997] "
          ></motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
  return createPortal(galleryPictureDialog, document.body);
}
