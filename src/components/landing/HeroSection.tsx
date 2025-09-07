"use client";

import Image from "next/image";
import profilePicture from "@/../public/images/profilePicture.png";
import { useLang } from "@/contexts/languegeContext";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const { lang } = useLang();
  return (
    <div className="flex [@media(max-width:980px)]:flex-col-reverse items-center gap-y-3 justify-between  [@media(max-width:1200px)]:w-[95%] w-[90%] mx-auto">
      <div className="flex flex-col items-start [@media(max-width:980px)]:p-5 [@media(max-width:980px)]:text-center [@media(max-width:980px)]:items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.3 }}
          className="font-bold [@media(min-width:980px)]:text-[40px] text-2xl mb-3"
        >
          {lang === "en" ? en.hero.title : fa.hero.title}
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.5 }}
          className="font-[500] text-lg"
        >
          {lang === "en" ? en.hero.skillTitle : fa.hero.skillTitle}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.7 }}
          className="[@media(max-width:980px)]:text-sm font-[400] [@media(max-width:980px)]:leading-[25px] leading-[30px] text-md [@media(min-width:980px)]:w-[600px] mt-3 dark:text-neutral-300 text-neutral-700"
        >
          {lang === "en" ? en.hero.description : fa.hero.description}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.9 }}
          whileTap={{ scale: 0.95 }}
          className="font-[400] mt-5 outline-none ring dark:ring-neutral-700 ring-neutral-300 ring-offset-4
          dark:ring-offset-background-dark ring-offset-background-light
             flex items-center gap-x-3 justify-center py-3 px-5 rounded-full 
             dark:text-black text-white dark:bg-primary-dark bg-primary-light group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-download-icon lucide-download"
          >
            <path
              d="M12 15V3"
              className="transition-transform duration-300 group-hover:translate-y-[2px]"
            />
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path
              d="m7 10 5 5 5-5"
              className="transition-transform duration-300 group-hover:translate-y-[2px]"
            />
          </svg>
          {lang === "en" ? en.hero.buttonContent : fa.hero.buttonContent}
        </motion.button>
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.5 }} className="border-[3px] [@media(max-width:980px)]:w-[250px] [@media(max-width:980px)]:h-[250px] w-[300px] h-[300px] dark:border-neutral-500 border-neutral-200 rounded-full p-1">
        <Image
          onLoad={() => {setIsLoad(true)}}
          width={800}
          height={800}
          alt="Parsa-Shaabani"
          src={"https://avatars.githubusercontent.com/u/122119546?v=4"}
          className={`${
              isLoad
                ? "scale-[1] blur-0 grayscale-0"
                : "grayscale scale-[0.9] blur-lg"
            } transition-all duration-1000 rounded-full z-[-1]`}
          unoptimized
          quality={100}
        />
      </motion.div>
    </div>
  );
}
