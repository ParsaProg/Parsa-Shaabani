"use client";

import { motion } from "framer-motion";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";
import { Rocket } from "lucide-react";
import { useLang } from "@/contexts/languageContext";
import { TopSkillsModel } from "@/models/top-skills";

export default function MySkills() {
  const { lang } = useLang();
  return (
    <div className="flex flex-col items-start mt-[100px] md:w-[90%] w-full md:p-0 p-3 mx-auto">
      <div className="flex dark:text-primary-dark text-primary-light items-center gap-x-2">
        <Rocket size={24} />
        <h1 className=" dark:text-white text-black font-bold text-[25px]">
          {lang === "en" ? en.mySkills.title : fa.mySkills.title}
        </h1>
      </div>
      <motion.div className="mt-5 flex flex-wrap md:gap-5 gap-2 md:w-[80%] w-full font-inter">
        {TopSkillsModel.map((skill, _i) => {
          return (
            <motion.div
            initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -15 },
              }}
              exit={{ opacity: 0, x: -15 }}
              transition={{
                delay: _i * 0.1,
              }}
              key={_i}
              className="flex items-center md:gap-x-3 gap-x-2 md:px-5 px-3 py-3 rounded-full dark:bg-[#27272A] bg-[#F1F5F9]"
            >
              <div className="flex items-center gap-x-2">
                <div className="md:w-[18px] md:h-[18px] w-[15px] h-[15px]">
                  {skill.logo}
                </div>
                <h1 className="font-bold dark:text-white text-black text-[12px] md:text-md">
                  {skill.tag}
                </h1>
              </div>
              <h5 className="dark:text-slate-400 text-slate-700 font-[400] md:text-sm text-[13px]">
                {skill.level}
              </h5>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
