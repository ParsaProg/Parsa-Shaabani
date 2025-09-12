"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useState } from "react";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";

export default function ChangeLang({ toggleLang, lang }: any) {
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
        <Languages size={18} />
      </motion.div>
      <AnimatePresence mode="wait">
        {isShowDialog && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, top: 20 }}
            animate={{ opacity: 1, scale: 1, top: "50px" }}
            exit={{ opacity: 0, scale: 0.9, top: 20 }}
            transition={{ duration: 0.1 }}
            className={`z-[9999] absolute top-[50px] ${
              lang === "en" ? "right-0" : "left-0"
            } rounded-lg dark:bg-background-dark dark:text-white text-black bg-slate-100 flex flex-col items-start w-[150px] gap-y-1 
          dark:border-neutral-800 border-[#d0d7e1] border-[0.5px]`}
          >
            <h1
              onClick={() => {
                if (lang !== "fa") {
                  toggleLang();
                  window.location.reload();
                }
              }}
              className="dark:hover:bg-neutral-800 hover:bg-slate-200 px-2 mx-1 mt-1 transition-all duration-200 py-2 w-[95%] rounded-md cursor-pointer flex items-center gap-x-2"
            >
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="size-5"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill="#DA0001"
                  d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0v4z"
                ></path>
                <path fill="#EEE" d="M0 13h36v10H0z"></path>
                <path
                  fill="#239F40"
                  d="M36 13V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v4h36z"
                ></path>
                <path fill="#E96667" d="M0 23h36v1H0z"></path>
                <g fill="#BE1931">
                  <path d="M19.465 14.969c.957.49 3.038 2.953.798 5.731c1.391-.308 3.162-4.408-.798-5.731zm-2.937 0c-3.959 1.323-2.189 5.423-.798 5.731c-2.24-2.778-.159-5.241.798-5.731zm1.453-.143c.04.197 1.101.436.974-.573c-.168.408-.654.396-.968.207c-.432.241-.835.182-.988-.227c-.148.754.587.975.982.593z"></path>
                  <path d="M20.538 17.904c-.015-1.248-.677-2.352-1.329-2.799c.43.527 1.752 3.436-.785 5.351l.047-5.097l-.475-.418l-.475.398l.08 5.146l-.018-.015c-2.563-1.914-1.233-4.837-.802-5.365c-.652.447-1.315 1.551-1.329 2.799c-.013 1.071.477 2.243 1.834 3.205a6.375 6.375 0 0 1-1.678.201c.464.253 1.34.192 2.007.131l.001.068l.398.437l.4-.455v-.052c.672.062 1.567.129 2.039-.128a6.302 6.302 0 0 1-1.732-.213c1.344-.961 1.83-2.127 1.817-3.194z"></path>
                </g>
                <path fill="#7BC58C" d="M0 12h36v1H0z"></path>
              </svg>
              {lang === "en" ? en.changeLang.persian : fa.changeLang.persian}
            </h1>
            <hr className="dark:border-neutral-800 border-[#E2E8F0] border-[0.3px] h-[0.3px] w-full" />
            <h1
              onClick={() => {
                if (lang !== "en") {
                  toggleLang();
                  window.location.reload();
                }
              }}
              className="dark:hover:bg-neutral-800 hover:bg-slate-200 px-2 mx-1 mb-1 transition-all duration-200 py-2 w-[95%] rounded-md cursor-pointer flex items-center gap-x-2"
            >
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="size-5"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill="#00247D"
                  d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"
                ></path>
                <path
                  fill="#CF1B2B"
                  d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"
                ></path>
                <path
                  fill="#EEE"
                  d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"
                ></path>
                <path
                  fill="#CF1B2B"
                  d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"
                ></path>
              </svg>{" "}
              {lang === "en" ? en.changeLang.english : fa.changeLang.english}
            </h1>
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
