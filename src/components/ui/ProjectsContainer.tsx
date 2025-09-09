import ProjectsType from "@/models/projects-model";
import { Github, Link, Moon, Sun, SunMoon } from "lucide-react";
import Image from "next/image";
import ProjectImage from "./connectionForm/image/Image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/contexts/languegeContext";

export default function ProjectContainer({
  title,
  description,
  cats,
  tag,
  githubLink,
  deployLink,
  posterImage,
  supportTheme,
}: ProjectsType) {
  const { lang } = useLang();
  const [isShowThemeToolTip, setIsShowThemeToolTip] = useState<boolean>(false);
  return (
    <div
      suppressHydrationWarning
      className="shadow-md shadow-[#00000012] dark:shadow-[#ffffff08] w-[100%] rounded-xl p-5 border-[1px] dark:border-neutral-800 border-slate-200 overflow-hidden flex flex-col justify-between gap-y-2"
    >
      <ProjectImage title={title} posterImage={posterImage} />
      <h1 className="dark:text-white text-black font-bold text-xl">{title}</h1>
      <p className="font-[400] dark:text-neutral-300 text-neutral-700 text-sm">
        {description}
      </p>
      <div className="z-[-2] flex flex-row flex-wrap gap-3 mt-1 font-inter">
        {cats.map((val, index) => {
          return (
            <div
              className="rounded-xl p-2 border-[1px] dark:bg-neutral-900 bg-slate-100 dark:border-neutral-800 border-neutral-300 text-xs"
              key={index}
            >
              {val}
            </div>
          );
        })}
      </div>
      <span className="mt-2 h-[.3px] dark:bg-neutral-800 bg-neutral-200 w-full z-[-2]" />
      <section
        dir="ltr"
        className="flex justify-between items-center w-full mt-2"
      >
        <h1 className="font-bold font-inter">{tag}</h1>
        <section className="flex items-center gap-x-2">
          {deployLink && (
            <a
              target="_blank"
              href={deployLink}
              className="cursor-pointer transition-all duration-200 bg-transparent p-2 rounded-xl dark:hover:bg-neutral-800 hover:bg-slate-200 border-[1px] dark:border-neutral-800 border-slate-200 dark:text-neutral-200 text-slate-700"
            >
              <Link size={18} />
            </a>
          )}

          <a
            target="_blank"
            href={githubLink}
            className="z-[99] cursor-pointer transition-all duration-200 bg-transparent p-2 rounded-xl dark:hover:bg-neutral-800 hover:bg-slate-200 border-[1px] dark:border-neutral-800 border-slate-200 dark:text-neutral-200 text-slate-700"
          >
            <Github size={18} />
          </a>
          <section className="relative">
            <AnimatePresence>
              {isShowThemeToolTip && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0, rotateZ: 30, rotateX: 100, y: 50 },
                    visible: { opacity: 1, rotateZ: 0, rotateX: 0, y: 0 },
                  }}
                  transition={{ delay: 0.1 }}
                  className={`z-[-1] absolute text-sm top-[-45px] shadow-xl rounded-lg right-[0] p-2 dark:bg-neutral-900 flex justify-center w-[190px] bg-neutral-100 gap-x-2 dark:text-white text-black border-[1px] dark:border-neutral-700 border-neutral-300`}
                >
                  {supportTheme === "multiTheme" ? (
                    <SunMoon size={18} />
                  ) : supportTheme === "light" ? (
                    <Sun size={18} />
                  ) : (
                    <Moon size={18} />
                  )}
                  {supportTheme === "multiTheme"
                    ? lang === "en"
                      ? "Multi Theme Support"
                      : "پشتیبانی از تم شب و روز"
                    : supportTheme === "light"
                    ? lang === "en"
                      ? "Light Theme Support"
                      : "پشتیبانی فقط از تم روشن"
                    : supportTheme === "dark"
                    ? lang === "en"? "Dark Theme Support": "پشتیبانی فقط از تم تاریک"
                    : "No Theme"}
                </motion.div>
              )}
            </AnimatePresence>
            {supportTheme && (
              <div
                onMouseEnter={() => setIsShowThemeToolTip(true)}
                onMouseLeave={() => setIsShowThemeToolTip(false)}
                className="z-[999] cursor-pointer transition-all duration-200 bg-transparent p-2 rounded-xl dark:hover:bg-neutral-800 hover:bg-slate-200 border-[1px] dark:border-neutral-800 border-slate-200 dark:text-neutral-200 text-slate-700 select-none"
              >
                {supportTheme === "multiTheme" ? (
                  <SunMoon className="pointer-events-none" size={18} />
                ) : supportTheme === "light" ? (
                  <Sun className="pointer-events-none" size={18} />
                ) : (
                  <Moon className="pointer-events-none" size={18} />
                )}
              </div>
            )}
          </section>
        </section>
      </section>
    </div>
  );
}
