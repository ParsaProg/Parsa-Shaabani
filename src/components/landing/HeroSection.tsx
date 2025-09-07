"use client";

import Image from "next/image";
import profilePicture from "@/../public/images/profilePicture.png";
import { useLang } from "@/contexts/languegeContext";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { lang } = useLang();
  return (
    <div className="flex items-center justify-around w-[85%] mx-auto justify-center">
      <div className="flex flex-col items-start">
        <h1 className="font-bold text-[40px]">
          {lang === "en" ? en.hero.title : fa.hero.title}
        </h1>
        <h3 className="font-[500] text-lg">
          {lang === "en" ? en.hero.skillTitle : fa.hero.skillTitle}
        </h3>
        <p className="font-[400] leading-[30px] text-md w-[580px] mt-3 dark:text-neutral-300 text-neutral-700">
          {lang === "en" ? en.hero.description : fa.hero.description}
        </p>
        <motion.button
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
            <path d="M12 15V3" className="transition-transform duration-300 group-hover:translate-y-[2px]"/>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m7 10 5 5 5-5" className="transition-transform duration-300 group-hover:translate-y-[2px]" />
          </svg>
          {lang === "en" ? en.hero.buttonContent : fa.hero.buttonContent}
        </motion.button>
      </div>
      <div className="border-[3px] w-[300px] h-[300px] dark:border-neutral-500 border-neutral-200 rounded-full p-1">
        <Image
          alt="Parsa-Shaabani"
          src={profilePicture}
          className="rounded-full "
          unoptimized
          quality={100}
        />
      </div>
    </div>
  );
}
