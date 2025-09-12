"use client";

import { useLang } from "@/contexts/languageContext";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";
import { ExperiencesDataModelEnglish } from "@/models/experiences-model";
import { Backpack, Circle } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const { lang } = useLang();
  return (
    <div className=" [@media(max-width:1200px)]:w-[95%] w-[90%] mt-[50px] mx-auto ">
      <div className="flex dark:text-primary-dark text-primary-light items-center gap-x-2">
        <Backpack size={24} />
        <h1 className="dark:text-white text-black text-[25px] font-bold">
          {lang === "en" ? en.experience.title : fa.experience.title}
        </h1>
      </div>
      <ul className="flex flex-col gap-y-1  items-start mt-5 mx-1">
        {ExperiencesDataModelEnglish.map((experience, _i) => {
          return (
            <li key={_i} className="flex items-start gap-x-2 font-inter">
              <section className="flex flex-col items-center gap-y-1">
                <motion.div
                  whileInView={"visible"}
                  viewport={{once: true, amount: 0.3}}
                  transition={{ delay: 0.3 }}
                  initial="hidden"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <Circle
                    className={`${ExperiencesDataModelEnglish.length !== _i + 1 ? "dark:text-primary-dark text-primary-light": "text-transparent"}`}
                    size={20}
                  />
                </motion.div>
                <motion.div
                  whileInView={"visible"}
                  viewport={{once: true, amount: 0.3}}
                  transition={{ delay: 0.5 }}
                  initial="hidden"
                  variants={{
                    hidden: { opacity: 0, height: 0 },
                    visible: { opacity: 1, height: "220px" },
                  }}
                  className={`w-[2px] sm:h-[150px] h-[220px] ${ExperiencesDataModelEnglish.length !== _i + 1? "dark:bg-primary-dark bg-primary-light": "bg-transparent"} `}
                ></motion.div>
              </section>
              <section className="flex flex-col gap-y-3 overflow-hidden">
                <motion.h3
                  whileInView={"visible"}
                  viewport={{once: true, amount: 0.3}}
                  transition={{ delay: 0.2 }}
                  initial="hidden"
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="dark:text-neutral-400 text-neutral-600 font-[400] text-[14px]"
                >
                  {experience.fromData} ~ {experience.toData}
                </motion.h3>
                <motion.h1
                  whileInView={"visible"}
                  viewport={{once: true, amount: 0.3}}
                  transition={{ delay: 0.4 }}
                  initial="hidden"
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="font-[600] dark:text-white text-black text-md"
                >
                  {experience.title}
                </motion.h1>
                <motion.p
                  whileInView={"visible"}
                  viewport={{once: true, amount: 0.3}}
                  transition={{ delay: 0.6 }}
                  initial="hidden"
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="font-[400] dark:text-neutral-300 text-neutral-600 text-sm"
                >
                  {experience.desc}
                </motion.p>
                <div className="flex items-center flex-wrap gap-3">
                  {experience.cats.map((cat, catIndex) => {
                    return (
                      <motion.div
                        whileInView={"visible"}
                        viewport={{once: true, amount: 0.3}}
                        transition={{ delay: catIndex * 0.2 }}
                        initial="hidden"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        key={catIndex}
                        className="p-2 rounded-lg dark:bg-neutral-900 bg-slate-100 border-[1px] dark:border-neutral-800 border-slate-200 text-xs"
                      >
                        {cat}
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
