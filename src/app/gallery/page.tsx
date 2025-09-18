"use client";
import { useLang } from "@/contexts/languageContext";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";
import { GalleryCatSearch } from "@/models/gallerySearchCategory";
import { CatIcon, Search } from "lucide-react";
import MansooryLayoutList from "@/components/ui/MansooryLayoutList";
import { useEffect, useState } from "react";
import { GalleryItem } from "@/types/GalleryItems";
import ApiService from "@/services/GalleryClass";
import { usePathname, useRouter } from "next/navigation";

const apiService = new ApiService(
  "https://parsa-shaabani-backend.vercel.app/gallery",
  "honoParsaPortfolioBackend54"
);

export default function GalleryPage() {
  const [activeButton, setActiveButton] = useState<string | undefined>(
    undefined
  );
  const router = useRouter();
  const pathname = usePathname();
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);
  const [filtredGalleryData, setFiltredGalleryData] = useState<
    GalleryItem[] | undefined
  >([]);

  const clearQuery = () => {
    // Replace current URL with query-less version
    router.replace(pathname);
  };

  useEffect(() => {
    apiService.getData().then((galleryApiData) => {
      setGalleryData(galleryApiData);
      setFiltredGalleryData(galleryApiData);
    });
  }, []);

  useEffect(() => {
    const query = window.location.search.substring(
      window.location.search.indexOf("=") + 1
    );

    if (query && galleryData.length > 0) {
      setActiveButton(
        query === "social-relations"
          ? "social relations"
          : query === "computer-engineering"
          ? "computer engineering"
          : query.toLowerCase()
      );

      FilterGalleryData(
        query === "social-relations"
          ? "Social Relations"
          : query === "computer-engineering"
          ? "Computer Engineering"
          : query
      );
    } else if(!query) {
      setActiveButton("all");
    }
  }, [galleryData]);

  function FilterGalleryData(cat: string) {
    const filteredGallery = galleryData.filter(
      (v) => v.enCategory.toLowerCase() === cat.toLowerCase()
    );
    setFiltredGalleryData(filteredGallery);
  }

  const { lang } = useLang();
  return (
    <div className="select-none flex flex-col gap-y-5 [@media(max-width:1200px)]:w-[90%] w-[90%] mt-[80px] mx-auto">
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
        {/* <div className="relative w-[90%] mx-auto">
          <input
            placeholder={lang === "en" ? "Search..." : "جستجو کنید..."}
            type="text"
            className={` focus:ring-2 focus:ring-offset-4 dark:ring-offset-background-dark ring-offset-background-light transition-all duration-200 dark:focus:ring-primary-dark hover:ring-primary-light w-full mx-auto rounded-xl border-[1px] dark:border-neutral-800 border-slate-200 outline-none bg-transparent py-3 px-10 font-[400] text-md`}
          />
          <Search
            size={20}
            className={`${
              lang === "en" ? "left-3" : "right-3"
            } dark:text-neutral-300 text-slate-600 absolute top-[50%] translate-y-[-50%]`}
          />
        </div> */}
        <ul className="mt-5 flex flex-wrap w-full items-center gap-3  mx-auto justify-center">
          <div
            onClick={() => {
              clearQuery();
              setFiltredGalleryData(galleryData);
              setActiveButton("all");
            }}
            className={`dark:hover:bg-primary-dark hover:bg-primary-light dark:hover:text-black hover:text-white ${
              activeButton === "all" &&
              "dark:bg-primary-dark bg-primary-light dark:text-black text-white"
            } transition-all duration-200 group cursor-pointer flex items-center gap-x-2 justify-center rounded-lg py-2 px-2 dark:bg-neutral-900 bg-slate-100 dark:border-neutral-700 border-slate-300 border-[1px] dark:text-WHITE text-slate700`}
          >
            <CatIcon
              size={18}
              className={`${
                activeButton === "all"
                  ? "dark:text-black text-white"
                  : "dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white"
              } transition-all duration-200`}
            />{" "}
            {lang === "en" ? "All": "همه"}
          </div>
          <GalleryCatSearch
            activeButton={activeButton ?? ""}
            setActiveButton={setActiveButton}
            FilterGalleryData={FilterGalleryData}
            lang={lang}
          />
        </ul>
      </div>
      <span className="text-center font-[400] text-md mt-5 dark:text-neutral-300 text-slate-700">
        {galleryData.length} {lang === "en" ? "Pins found" : "پین پیدا شد"}
      </span>
      <MansooryLayoutList items={filtredGalleryData} />
    </div>
  );
}
