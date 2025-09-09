"use client";

import { useLang } from "@/contexts/languegeContext";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";
import { BriefcaseBusiness, Github } from "lucide-react";
import ProjectContainer from "../ui/ProjectsContainer";
import { motion } from "framer-motion";
import {
  ProjectsModelDataEn,
  ProjectsModelDataFa,
} from "@/models/projects-model";

export default function MyProjects() {
  const { lang } = useLang();
  return (
    <div className="[@media(max-width:1200px)]:w-[95%] w-[90%] mx-auto overflow-hidden">
      <div className="flex dark:text-primary-dark text-primary-light items-center gap-x-2">
        <BriefcaseBusiness size={24} />
        <h1 className="dark:text-white text-black font-bold text-[25px]">
          {lang === "en" ? en.myProjects.title : fa.myProjects.title}
        </h1>
      </div>
      <div className="overflow-hidden mt-5 grid [@media(min-width:1240px)]:grid-cols-3 grid-cols-2 gap-5 w-auto [@media(max-width:850px)]:grid-cols-1">
        {lang === "en"
          ? ProjectsModelDataEn.map((val, index) => {
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectContainer {...val} />
                </motion.div>
              );
            })
          : ProjectsModelDataFa.map((faVal, faIndex) => {
              return (
                <motion.div
                  key={faIndex}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  transition={{ delay: faIndex * 0.1 }}
                >
                  <ProjectContainer {...faVal} />
                </motion.div>
              );
            })}
      </div>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ delay: 0.1 }}
        className="mt-10 flex flex-col items-center"
      >
        <motion.a
          href="https://github.com/ParsaProg?tab=repositories"
          target="_blank"
          whileTap={{
            scale: 0.95,
          }}
          className="rounded-full dark:bg-neutral-800 bg-slate-200 py-3 px-5 flex items-center gap-x-2 justify-center"
        >
          <Github size={18} />
          {lang === "en" ? en.myProjects.seeMore : fa.myProjects.seeMore}
        </motion.a>
      </motion.div>
    </div>
  );
}
