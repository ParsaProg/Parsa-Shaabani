"use client";

import { Github, Linkedin, MailIcon, Phone, PhoneCall, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "@/contexts/languegeContext";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";

export default function ConnectionDialog() {
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
    <div className="[@media(min-width:980px)]:relative">
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        transition={{ duration: 0.1, delay: 0 }}
        onClick={() => setIsShowDialog(!isShowDialog)}
        className="transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-neutral-800 p-2 rounded-lg border-[1px] dark:border-[#27272A] border-[#E2E8F0] dark:text-neutral-100 text-slate-700"
      >
        <Phone size={18} />
      </motion.div>
      <AnimatePresence mode="wait">
        {isShowDialog && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, top: 20 }}
            animate={{ opacity: 1, scale: 1, top: "50px" }}
            exit={{ opacity: 0, scale: 0.9, top: 20 }}
            transition={{ duration: 0.1 }}
            className={`z-[9999] absolute [@media(max-width:980px)]:hidden visible top-[50px] rounded-lg dark:bg-background-dark dark:text-white text-black bg-neutral-100 flex flex-col items-start w-[295px] gap-y-5 
          dark:border-neutral-800 border-[#E2E8F0] border-[0.5px] p-4 ${
            lang === "en" ? "right-0" : "left-0"
          }`}
          >
            <h1 className="font-bold text-md">
              {lang === "en" ? en.connection.title : fa.connection.title}
            </h1>
            <ul className="flex flex-col items-start gap-y-2">
              <li className="flex items-center gap-x-2 dark:text-neutral-400 text-neutral-600">
                <PhoneCall size={18} />
                <div dir="ltr">
                  {lang === "en"
                    ? en.connection.phoneNumber
                    : fa.connection.phoneNumber}
                </div>
              </li>
              <li className="font-inter flex items-center gap-x-2 dark:text-neutral-400 text-neutral-600">
                <MailIcon size={18} />
                parsashaabani3@gmail.com
              </li>
            </ul>
            <h1 className="font-bold text-md mt-2">
              {lang === "en"
                ? en.connection.socialTitle
                : fa.connection.socialTitle}
            </h1>
            <section className="flex items-center gap-x-2">
              <motion.a
                target="_blank"
                href="https://github.com/ParsaProg"
                whileTap={{
                  scale: 0.95,
                }}
                className="outline-none cursor-pointer p-3 border-[1px] dark:border-neutral-800 px-5 border-neutral-300 dark:hover:text-primary-dark hover:text-primary-light text-primray-light transition-colors duration-200 rounded-lg flex items-center gap-x-2 justify-center"
              >
                <Github size={18} />
                {lang === "en" ? en.connection.github : fa.connection.github}
              </motion.a>
              <motion.a
                target="_blank"
                href="https://github.com/ParsaProg"
                whileTap={{
                  scale: 0.95,
                }}
                className="outline-none cursor-pointer p-3 border-[1px] dark:border-neutral-800 px-5 border-neutral-300 dark:hover:text-primary-dark hover:text-primary-light text-primray-light transition-colors duration-200 rounded-lg flex items-center gap-x-2 justify-center"
              >
                <Linkedin size={18} />
                {lang === "en"
                  ? en.connection.linkedin
                  : fa.connection.linkedin}
              </motion.a>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {" "}
        {isShowDialog && (
          <motion.div
            initial={{ opacity: 0, bottom: -50 }}
            animate={{ opacity: 1, bottom: 0 }}
            exit={{ opacity: 0, bottom: -50 }}
            transition={{ duration: 0.3 }}
            className={`z-[9999] fixed [@media(min-width:980px)]:hidden visible bottom-[0] rounded-lg dark:bg-background-dark dark:text-white text-black bg-neutral-100 flex flex-col items-start w-full gap-y-5 
          dark:border-neutral-800 border-[#E2E8F0] border-[0.5px] p-4 ${
            lang === "en" ? "right-0" : "left-0"
          }`}
          >
            <h1 className="font-bold text-md">
              {lang === "en" ? en.connection.title : fa.connection.title}
            </h1>
            <ul className="flex flex-col items-start gap-y-2">
              <li className="flex items-center gap-x-2 dark:text-neutral-400 text-neutral-600">
                <PhoneCall size={18} />
                <div dir="ltr">
                  {lang === "en"
                    ? en.connection.phoneNumber
                    : fa.connection.phoneNumber}
                </div>
              </li>
              <li className="font-inter flex items-center gap-x-2 dark:text-neutral-400 text-neutral-600">
                <MailIcon size={18} />
                parsashaabani3@gmail.com
              </li>
            </ul>
            <h1 className="font-bold text-md mt-2">
              {lang === "en"
                ? en.connection.socialTitle
                : fa.connection.socialTitle}
            </h1>
            <section className="flex items-center gap-x-2 w-full">
              <motion.a
                target="_blank"
                href="https://github.com/ParsaProg"
                whileTap={{
                  scale: 0.95,
                }}
                className="outline-none cursor-pointer p-3 border-[1px] dark:border-neutral-800 px-5 border-neutral-300 dark:hover:text-primary-dark hover:text-primary-light text-primray-light transition-colors duration-200 rounded-lg flex items-center gap-x-2 justify-center w-full"
              >
                <Github size={18} />
                {lang === "en" ? en.connection.github : fa.connection.github}
              </motion.a>
              <motion.a
                target="_blank"
                href="https://github.com/ParsaProg"
                whileTap={{
                  scale: 0.95,
                }}
                className="outline-none cursor-pointer p-3 border-[1px] dark:border-neutral-800 px-5 border-neutral-300 dark:hover:text-primary-dark hover:text-primary-light text-primray-light transition-colors duration-200 rounded-lg flex items-center gap-x-2 justify-center w-full"
              >
                <Linkedin size={18} />
                {lang === "en"
                  ? en.connection.linkedin
                  : fa.connection.linkedin}
              </motion.a>
            </section>
            <motion.button
              onClick={() => {
                setIsShowDialog(false);
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="outline-none cursor-pointer py-3 border-[1px] dark:border-neutral-800 border-neutral-300 dark:hover:text-primary-dark hover:text-primary-light text-primray-light transition-colors duration-200 rounded-lg flex items-center gap-x-2 justify-center text-lg w-full"
            >
              <X size={20} />
              {lang === "en" ? "Close" : "بستن"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {" "}
        {isShowDialog && (
          <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0 }}
            onClick={() => setIsShowDialog(false)}
            className="[@media(max-width:980px)]:backdrop-blur-sm opacity-[1] z-[9998] inset-0 w-full h-screen top-0 right-0 fixed bg-transparent"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
