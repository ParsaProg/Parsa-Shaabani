"use client";

import { useLang } from "@/contexts/languageContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Download,
  Eye,
  Heart,
  LayoutTemplate,
  Upload,
} from "lucide-react";
import EnToFaCn from "@/lib/convertToFarsiNumbers";
import ApiService from "@/services/GalleryClass";

export default function MansooryMainLayout({ item, i, randomHeight }: any) {
  const [likeAccess, setLikeAccess] = useState<string | null>(null);
  useEffect(() => {
    const canLike = localStorage.getItem("likeAccess");
    if (canLike === undefined || canLike === null) {
      setLikeAccess("true");
    } else {
      setLikeAccess("false");
    }
  }, []);
  const [likesCount, setLikesCount] = useState<number>(Number(item.likes));
  const Api = new ApiService(
    `https://parsa-shaabani-backend.vercel.app/gallery/${item.id}`,
    "honoParsaPortfolioBackend54"
  );
  const { lang } = useLang();
  const [isLoad, setIsLoad] = useState(false);

  const likeFunction = () => {
    if (likeAccess === "true") {
      localStorage.setItem("likeAccess", "false");
      setLikeAccess("false");
      const currentLikes = Number(item.likes);
      const putLike = currentLikes + 1;
      setLikesCount(likesCount + 1);
      Api.putData(
        JSON.stringify({
          picture: item.picture,
          age: item.age,
          enCategory: item.enCategory,
          faCategory: item.faCategory,
          farsiTitle: item.farsiTitle,
          englishTitle: item.englishTitle,
          date: item.date,
          faDesc: item.faDesc,
          enDesc: item.enDesc,
          likes: putLike,
        })
      ).then(() => {
        console.log("updated gallery card");
      });
    }
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { delay: 0, duration: 0.05 },
      }}
      initial="hidden"
      whileInView={"visible"}
      transition={{ delay: i * 0.03 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      className={`cursor-pointer group rounded-xl overflow-hidden shadow-md mb-5 ${
        lang === "en" ? "bg-gradient-to-r" : "bg-gradient-to-l"
      } duration-300 bg-white dark:from-[#1A2433] dark:to-[#111929]`}
    >
      <div className="relative w-full h-auto overflow-hidden rounded-t-xl">
        <div className="hidden group-hover:visible absolute top-0 w-full h-full rounded-xl bg-gray-700 backdrop-blur-lg z-[9999] p-3 opacity-[0.3] blur-xl"></div>
        <div className="transition-opacity duration-200 opacity-0 group-hover:opacity-100 absolute flex flex-col p-3  justify-between items-start w-full h-full z-[999]">
          <div className="flex w-full justify-between items-center">
            <div className="text-white bg-[#0007] rounded-full px-3 py-2 text-[13px] flex items-center gap-x-1">
              <Eye size={13} /> {lang === "en" ? "View" : "مشاهده"}
            </div>
            <div className="flex items-center rounded-full text-[13px] bg-white text-black p-2 gap-x-2">
              <LayoutTemplate size={15} />
              {lang === "en" ? item.enCategory : item.faCategory}
            </div>
          </div>
          <div className="flex gap-x-2">
            <div
              onClick={likeFunction}
              className={`${
                likeAccess === "true" && "hover:text-red-400"
              } transition-colors duration-200 bg-white text-black rounded-full p-3`}
            >
              <Heart
                size={18}
                fill={likeAccess === "false" ? "#000" : "transparent"}
              />
            </div>
            <div className="hover:text-blue-400 transition-colors duration-200 bg-white text-black rounded-full p-3">
              <Download size={18} />
            </div>
            <div className="hover:text-blue-600 transition-colors duration-200 bg-white text-black rounded-full p-3">
              <Upload size={18} />
            </div>
          </div>
        </div>
        <Image
          draggable={false}
          unoptimized
          src={item.picture}
          alt={`پارسا شعبانی | Parsa Shabani - ${item.farsiTitle}`}
          width={800}
          height={800}
          sizes="100vw"
          className={`group-hover:blur-[2px] group-hover:scale-[1.1] object-cover w-auto h-auto 
            ${
              isLoad
                ? "blur-0 grayscale-0 scale-100 opacity-100"
                : "blur-xl grayscale scale-95 opacity-50"
            } 
            transition-all duration-700 ease-out`}
          onLoad={() => setIsLoad(true)}
        />
        {!isLoad && (
          <div
            style={{
              height: randomHeight[i],
            }}
            className="w-full"
          ></div>
        )}
      </div>

      <div className="p-3 mt-1 flex flex-col gap-y-3">
        <h3 className="group-hover:text-blue-500 transition-all duration-200 ext-base font-semibold">
          {lang === "en" ? item.englishTitle : item.farsiTitle}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {lang === "en" ? item.enDesc : item.faDesc}
        </p>
        <div className="flex items-center gap-x-2 text-gray-600 dark:text-gray-400 text-sm">
          <Calendar size={18} />
          <h1>
            {lang === "en" ? "Pin date" : "تاریخ پین"}:{" "}
            {lang === "en" ? item.date : EnToFaCn(item.date.toString())}
          </h1>
        </div>
        <div className="flex items-center gap-x-2 text-gray-600 dark:text-gray-400 text-sm">
          <Heart size={18} />
          <h1>
            {lang === "en" ? "Likes count" : "تعداد لایک"}:{" "}
            {lang === "en"
              ? likesCount.toString()
              : EnToFaCn(likesCount.toString())}
          </h1>
        </div>
      </div>
    </motion.div>
  );
}
