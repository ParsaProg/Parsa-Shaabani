"use client";

import { galleryData } from "@/models/fakeGalleryData";
import { useLang } from "@/contexts/languageContext";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";
import { GalleryCatSearch } from "@/models/gallerySearchCategory";
import { ArrowDown, Search } from "lucide-react";
import MansooryLayoutList from "@/components/ui/MansooryLayoutList";
export default function GalleryPage() {
  const { lang } = useLang();
  return (
    <div className=" overflow-hidden flex flex-col gap-y-5 [@media(max-width:1200px)]:w-[90%] w-[90%] mt-[80px] mx-auto ">
      <h1 className="font-bold text-center text-5xl">
        {lang === "en" ? en.gallery.title : fa.gallery.title}
      </h1>
      <p className="text-center text-lg dark:text-neutral-300 text-slate-600 font-[400]">
        {lang === "en" ? en.gallery.subTitle : fa.gallery.subTitle}
      </p>
      <div className="mt-3 flex gap-x-2 items-start mx-auto">
        <div
          className="w-2 h-2 rounded-full bg-primary-light dark:bg-primary-dark animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-2 rounded-full bg-primary-light dark:bg-primary-dark animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-2 rounded-full bg-primary-light dark:bg-primary-dark animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>

      <div className="flex flex-col items-center gap-y-2 w-full mx-auto">
        <div className="relative">
          <input
            placeholder={lang === "en" ? "Search..." : "جستجو کنید..."}
            type="text"
            className={` focus:ring-2 focus:ring-offset-4 dark:ring-offset-background-dark ring-offset-background-light transition-all duration-200 dark:focus:ring-primary-dark hover:ring-primary-light sm:w-full mx-auto rounded-xl border-[1px] dark:border-neutral-800 border-slate-200 outline-none bg-transparent py-3 px-10 font-[400] text-md`}
          />
          <Search
            size={20}
            className={`${
              lang === "en" ? "left-3" : "right-3"
            } dark:text-neutral-300 text-slate-600 absolute top-[50%] translate-y-[-50%]`}
          />
        </div>
        <ul className="mt-5 flex flex-wrap w-full items-center gap-3  mx-auto justify-center">
          <GalleryCatSearch lang={lang} />
        </ul>
      </div>
      <span className="w-full my-10 h-[0.3px] dark:bg-neutral-700 bg-slate-200"></span>
      <MansooryLayoutList items={galleryData} />
    </div>
  );
}
