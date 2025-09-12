"use client";

import { useLang } from "@/contexts/languageContext";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
export default function MansooryMainLayout({ item, i }: any) {
  const { lang } = useLang();
  const [isLoad, setIsLoad] = useState(false);

  return (
    <motion.div
    key="img"
      initial="hidden"
      whileInView={"visible"}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
      
      className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-neutral-900"
    >
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-t-xl">
        <Image
          src={""}
         alt={`پارسا شعبانی | Parsa Shabani - ${item.farsiTitle}`}
          fill
          sizes="100vw"
          className={`object-cover w-full h-full 
            ${
              isLoad
                ? "blur-0 grayscale-0 scale-100 opacity-100"
                : "blur-xl grayscale scale-95 opacity-50"
            } 
            transition-all duration-700 ease-out`}
          onLoad={() => setIsLoad(true)}
        />
      </div>

      <div className="p-3">
        <h3 className="text-base font-semibold mb-1">
          {lang === "en" ? item.englishTitle : item.farsiTitle}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {lang === "en" ? item.enDesc : item.faDesc}
        </p>
      </div>
    </motion.div>
  );
}
