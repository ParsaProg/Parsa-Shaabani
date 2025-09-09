"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/languegeContext";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";
import ConnectWithMeField from "../ui/connectionForm/connectWithMeFormField";
import { Mail, Phone, Send, SendIcon } from "lucide-react";

export default function GetInTouch() {
  function submitForm(e: any) {
    e.preventDefault();
  }

  const { lang } = useLang();
  return (
    <div className="mt-[100px] flex flex-col gap-y-3 [@media(max-width:1200px)]:w-[95%] w-[90%] mx-auto overflow-hidden">
      <motion.h1
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ delay: 0.1 }}
        className="text-[#021322] dark:text-white font-bold text-3xl text-center w-full"
      >
        {lang === "en" ? en.getInTouch.title : fa.getInTouch.title}
      </motion.h1>
      <motion.form
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: -200, scale: 1 },
          visible: { x: 0, scale: 1, opacity: 1 },
        }}
        transition={{ delay: 0.1 }}
        onSubmit={submitForm}
        className="mt-5 flex flex-col gap-y-3 p-6 rounded-xl border-[1px] dark:border-neutral-800 border-slate-200"
      >
        <h1 className="text-[#021322] dark:text-white font-bold text-xl w-full">
          {lang === "en" ? en.getInTouch.form.title : fa.getInTouch.form.title}
        </h1>
        <p className="font-[400] dark:text-neutral-400 text-slate-600 leading-[30px] text sm:text-md text-[13px] w-full">
          {lang === "en"
            ? en.getInTouch.form.subTitle
            : fa.getInTouch.form.subTitle}
        </p>
        <ConnectWithMeField
          title={
            lang === "en"
              ? en.getInTouch.form.fields.fullName
              : fa.getInTouch.form.fields.fullName
          }
        />
        <ConnectWithMeField
          title={
            lang === "en"
              ? en.getInTouch.form.fields.email
              : fa.getInTouch.form.fields.email
          }
        />
        <ConnectWithMeField
          title={
            lang === "en"
              ? en.getInTouch.form.fields.message
              : fa.getInTouch.form.fields.message
          }
          message={true}
        />
        <section className="flex mt-3 w-full justify-between items-center">
          <div className="flex flex-col items-start">
            <motion.button
              type="button"
              onClick={submitForm}
              whileTap={{
                scale: 0.95,
              }}
              className="flex items-center gap-x-2 justify-center py-2 px-4 rounded-lg dark:bg-primary-dark bg-primary-light dark:text-black text-white text-md"
            >
              {lang === "en"
                ? en.getInTouch.form.confirmButtonContent
                : fa.getInTouch.form.confirmButtonContent}
              <Send size={18} />
            </motion.button>
          </div>
          <div className="flex items-center gap-x-2">
            <a
              target="_blank"
              href="mailto:parsashaabani3@gmail.com"
              className="cursor-pointer transition-all duration-200 bg-transparent p-2 rounded-xl dark:hover:bg-neutral-800 hover:bg-slate-200 border-[1px] dark:border-neutral-800 border-slate-200 dark:text-neutral-200 text-slate-700"
            >
              <Mail size={17} />
            </a>
            <a
              target="_blank"
              href="tel:+989915980854"
              className="cursor-pointer transition-all duration-200 bg-transparent p-2 rounded-xl dark:hover:bg-neutral-800 hover:bg-slate-200 border-[1px] dark:border-neutral-800 border-slate-200 dark:text-neutral-200 text-slate-700"
            >
              <Phone size={17} />
            </a>
            <a
              target="_blank"
              href="https://t.me/Parsa_Shaabani"
              className="cursor-pointer transition-all duration-200 bg-transparent p-2 rounded-xl dark:hover:bg-neutral-800 hover:bg-slate-200 border-[1px] dark:border-neutral-800 border-slate-200 dark:text-neutral-200 text-slate-700"
            >
              <SendIcon size={17} />
            </a>
          </div>
        </section>
      </motion.form>
    </div>
  );
}
