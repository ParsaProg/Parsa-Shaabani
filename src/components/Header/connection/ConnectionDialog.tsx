"use client";

import { Github, Linkedin, MailIcon, Phone, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/contexts/languegeContext";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";

export default function ConnectionDialog() {
  const { lang } = useLang();
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);
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
        <Phone size={18} />
      </motion.div>
      <AnimatePresence mode="wait">
        {isShowDialog && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, top: 20 }}
            animate={{ opacity: 1, scale: 1, top: "50px" }}
            exit={{ opacity: 0, scale: 0.9, top: 20 }}
            transition={{ duration: 0.1 }}
            className={`z-[9999] absolute top-[50px] border-slate-300 rounded-lg dark:bg-background-dark dark:text-white text-black bg-neutral-100 flex flex-col items-start w-[290px] gap-y-5 
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
              <motion.a target="_blank" href="https://github.com/ParsaProg" whileTap={{
                scale: 0.95
              }} className="outline-none cursor-pointer p-3 border-[1px] dark:border-neutral-800 px-5 border-neutral-300 dark:hover:text-primary-dark hover:text-primary-light text-primray-light transition-colors duration-200 rounded-lg flex items-center gap-x-2 justify-center">
                <Github size={18} />
                {lang === "en" ? en.connection.github : fa.connection.github}
              </motion.a>
              <motion.a target="_blank" href="https://github.com/ParsaProg" whileTap={{
                scale: 0.95
              }} className="outline-none cursor-pointer p-3 border-[1px] dark:border-neutral-800 px-5 border-neutral-300 dark:hover:text-primary-dark hover:text-primary-light text-primray-light transition-colors duration-200 rounded-lg flex items-center gap-x-2 justify-center">
                <Linkedin size={18} />
                {lang === "en" ? en.connection.linkedin : fa.connection.linkedin}
              </motion.a>
            </section>
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
