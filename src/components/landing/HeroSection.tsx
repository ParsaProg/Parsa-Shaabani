"use client";

import Image from "next/image";
import { useLang } from "@/contexts/languageContext";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";
import { motion } from "framer-motion";
import { Braces, Code2, SquareTerminal } from "lucide-react";
import { useState } from "react";
import ParsaShaabani from "@/../public/images/parsa-shaabani.png";
import JsIcon from "@/../public/icons/Js.svg";
import NextJsIcon from "@/../public/icons/Nextjs.svg";
import NodeJsIcon from "@/../public/icons/nodejs-logo.gif";
import ReactJsIcon from "@/../public/icons/ReactJs.svg";
import TailwindIcon from "@/../public/icons/Tailwindcss.svg";
import TypeScriptIcon from "@/../public/icons/TypeScript.svg";

const floatingTechItems = [
  {
    label: "React",
    icon: ReactJsIcon,
    left: "7%",
    delay: 0.2,
    duration: 12,
    drift: 18,
    rotate: -10,
  },
  {
    label: "TypeScript",
    icon: TypeScriptIcon,
    left: "23%",
    delay: 2.3,
    duration: 14,
    drift: -22,
    rotate: 8,
  },
  {
    label: "Next.js",
    icon: NextJsIcon,
    left: "45%",
    delay: 1.1,
    duration: 13,
    drift: 16,
    rotate: -6,
  },
  {
    label: "JavaScript",
    icon: JsIcon,
    left: "64%",
    delay: 3.4,
    duration: 11,
    drift: -18,
    rotate: 12,
  },
  {
    label: "Tailwind",
    icon: TailwindIcon,
    left: "79%",
    delay: 0.8,
    duration: 15,
    drift: 20,
    rotate: -14,
  },
  {
    label: "Node.js",
    icon: NodeJsIcon,
    left: "88%",
    delay: 4.5,
    duration: 12,
    drift: -16,
    rotate: 10,
  },
];

const floatingCodeSnippets = [
  {
    code: "const craft = ideas.map(build);",
    left: "2%",
    delay: 1.2,
    duration: 16,
    drift: 18,
  },
  {
    code: "await portfolio.deploy();",
    left: "36%",
    delay: 4.1,
    duration: 15,
    drift: -20,
  },
  {
    code: "function shipCleanUI() {}",
    left: "13%",
    delay: 6.5,
    duration: 18,
    drift: -12,
  },
  {
    code: "useMotionValue(scrollY);",
    left: "55%",
    delay: 2.7,
    duration: 17,
    drift: 16,
  },
  {
    code: "Yasin-Shahrzad",
    left: "55%",
    delay: 2.7,
    duration: 17,
    drift: 16,
  },
];

const floatingCodeIcons = [
  { Icon: Code2, left: "16%", delay: 0.6, duration: 10, drift: 12 },
  { Icon: Braces, left: "52%", delay: 3.1, duration: 12, drift: -18 },
  {
    Icon: SquareTerminal,
    left: "73%",
    delay: 1.8,
    duration: 11,
    drift: 14,
  },
];

export default function HeroSection() {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const { lang } = useLang();
  return (
    <div className="flex [@media(max-width:980px)]:flex-col-reverse items-center gap-y-3 justify-between [@media(max-width:1200px)]:w-[100%] w-[100%] mx-auto">
      <div className="flex flex-col items-start [@media(max-width:980px)]:p-5 [@media(max-width:980px)]:text-center [@media(max-width:980px)]:items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.3 }}
          className="[@media(min-width:980px)]:text-[40px] font-bold text-2xl mb-3"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.9 }}
        >
          <motion.a
            href={"/pdf/parsa-shaabani-resume-cv.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95, transition: { delay: 0 } }}
            className="font-[400] mt-5 outline-none ring dark:ring-neutral-700 ring-neutral-300 ring-offset-4
          dark:ring-offset-background-dark ring-offset-background-light
             flex items-center gap-x-3 justify-center py-3 px-5 rounded-full 
             dark:text-black text-white dark:bg-primary-dark bg-primary-light group cursor-pointer"
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
          </motion.a>
        </motion.div>
      </div>

      <div className="relative isolate flex h-[430px] w-[430px] items-center justify-center overflow-hidden [@media(max-width:980px)]:h-[330px] [@media(max-width:980px)]:w-full">
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.85, 0.55] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-12 rounded-full bg-primary-light/15 blur-2xl dark:bg-primary-dark/20"
        />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-dashed border-primary-light/25 dark:border-primary-dark/30"
        />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: -360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          className="absolute inset-16 rounded-full border border-neutral-300/50 dark:border-neutral-700/60"
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {floatingCodeSnippets.map((snippet) => (
            <motion.div
              key={snippet.code}
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: [60, -390],
                x: [0, snippet.drift, snippet.drift * -0.45],
                opacity: [0, 0.68, 0],
              }}
              transition={{
                duration: snippet.duration,
                delay: snippet.delay,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ left: snippet.left }}
              className="absolute bottom-[-64px] z-0 whitespace-nowrap rounded-full border border-primary-light/15 bg-white/70 px-3 py-1 font-inter text-[11px] text-neutral-600 shadow-lg shadow-primary-light/5 backdrop-blur-md dark:border-primary-dark/20 dark:bg-neutral-900/70 dark:text-neutral-300 dark:shadow-primary-dark/10"
            >
              <span className="text-primary-light dark:text-primary-dark">
                {"{ "}
              </span>
              {snippet.code}
              <span className="text-primary-light dark:text-primary-dark">
                {" }"}
              </span>
            </motion.div>
          ))}

          {floatingTechItems.map((tech) => (
            <motion.div
              key={tech.label}
              initial={{ y: 45, opacity: 0, rotate: tech.rotate, scale: 0.9 }}
              animate={{
                y: [45, -385],
                x: [0, tech.drift, tech.drift * -0.4],
                rotate: [tech.rotate, tech.rotate + 20],
                scale: [0.85, 1, 0.9],
                opacity: [0, 0.82, 0],
              }}
              transition={{
                duration: tech.duration,
                delay: tech.delay,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ left: tech.left }}
              className="absolute bottom-[-58px] z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/80 shadow-xl shadow-primary-light/10 backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/75 dark:shadow-primary-dark/10"
            >
              <Image
                src={tech.icon}
                alt=""
                width={30}
                height={30}
                className="h-7 w-7 object-contain"
              />
            </motion.div>
          ))}

          {floatingCodeIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 35, opacity: 0, scale: 0.9 }}
              animate={{
                y: [35, -350],
                x: [0, item.drift, item.drift * -0.5],
                opacity: [0, 0.75, 0],
                scale: [0.9, 1.08, 0.95],
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ left: item.left }}
              className="absolute bottom-[-52px] z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary-light/20 bg-primary-light/10 text-primary-light backdrop-blur-md dark:border-primary-dark/25 dark:bg-primary-dark/10 dark:text-primary-dark"
            >
              <item.Icon size={18} strokeWidth={1.8} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
          className="relative z-20 h-[350px] w-[350px] [@media(max-width:980px)]:h-[285px] [@media(max-width:980px)]:w-[285px]"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full animate-morph-radius bg-gradient-to-br from-primary-light/35 via-sky-200/25 to-cyan-300/20 p-[3px] shadow-[0_24px_70px_-35px_rgba(77,107,254,0.9)] dark:from-primary-dark/40 dark:via-orange-300/10 dark:to-amber-300/10 dark:shadow-[0_24px_70px_-35px_rgba(255,126,61,0.95)]"
          >
            <div className="h-full w-full overflow-hidden animate-morph-radius bg-background-light/70 dark:bg-background-dark/70">
              <Image
                onLoad={() => {
                  setIsLoad(true);
                }}
                draggable={false}
                width={800}
                height={800}
                alt="Parsa Shabani - programmer and developer"
                src={ParsaShaabani.src}
                className={`${
                  isLoad
                    ? "scale-100 blur-0 grayscale-0"
                    : "grayscale scale-95 blur-lg"
                } h-full w-full animate-morph-radius object-contain transition-all duration-1000`}
                unoptimized
                quality={100}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
