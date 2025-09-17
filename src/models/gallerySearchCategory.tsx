import {
  AudioLines,
  EarthLock,
  FolderCode,
  GraduationCap,
  HatGlasses,
  LandPlot,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default interface GallerySeacrhCategory {
  catName: string;
  icon: ReactNode;
}

const GalleryCatSearchEn: GallerySeacrhCategory[] = [
  {
    catName: "scientific",
    icon: (
      <AudioLines
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },
  {
    catName: "Education",
    icon: (
      <GraduationCap
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },
  {
    catName: "Technology",
    icon: (
      <EarthLock
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },
  {
    catName: "Computer Engineering",
    icon: (
      <FolderCode
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },
  {
    catName: "Social relations",
    icon: (
      <Users
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },
  {
    catName: "Sports",
    icon: (
      <LandPlot
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },
  {
    catName: "Private Life",
    icon: (
      <HatGlasses
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },
];
const GalleryCatSearchFa: GallerySeacrhCategory[] = [
  {
    catName: "علمی",
    icon: (
      <AudioLines
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },
  {
    catName: "تحصیلی",
    icon: (
      <GraduationCap
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },

  {
    catName: "تکنولوژی",
    icon: (
      <EarthLock
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },
  {
    catName: "مهندسی کامپیوتر",
    icon: (
      <FolderCode
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },
  {
    catName: "روابط اجتماعی",
    icon: (
      <Users
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },
  {
    catName: "ورزشی",
    icon: (
      <LandPlot
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },
  {
    catName: "زندگی شخصی",
    icon: (
      <HatGlasses
        size={18}
        className="dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white transition-all duration-200"
      />
    ),
  },
];
export function GalleryCatSearch({
  lang,
  FilterGalleryData,
  setQuerySearch,
}: {
  lang: string;
  FilterGalleryData: any;
  setQuerySearch: (v: string) => void;
}) {
  const router = useRouter();
  return lang === "en"
    ? GalleryCatSearchEn.map((cat, index) => {
        return (
          <div
            onClick={() => {
              setQuerySearch(
                window.location.search.substring(
                  window.location.search.indexOf("=") + 1
                )
              );
              router.push(
                `/gallery?search=${
                  index === 3
                    ? "computer-engineering"
                    : index === 4
                    ? "social-relations"
                    : cat.catName.toLowerCase()
                }`
              );
              FilterGalleryData(
                cat.catName === "social-relations"
                  ? "Social Relations"
                  : cat.catName === "computer-engineering"
                  ? "Computer Engineering"
                  : cat.catName
              );
            }}
            key={index}
            className={`dark:hover:bg-primary-dark hover:bg-primary-light dark:hover:text-black hover:text-white transition-all duration-200 group cursor-pointer flex items-center gap-x-2 justify-center rounded-lg py-2 px-3 dark:bg-neutral-900 bg-slate-100 dark:border-neutral-700 border-slate-300 border-[1px] dark:text-white text-slate700`}
          >
            {" "}
            {cat.icon}
            <h1>{cat.catName}</h1>
          </div>
        );
      })
    : GalleryCatSearchFa.map((cat, index) => {
        return (
          <div
            onClick={() => {
              setQuerySearch(
                window.location.search.substring(
                  window.location.search.indexOf("=") + 1
                )
              );
              router.push(
                `/gallery?search=${
                  index === 3
                    ? "computer-engineering"
                    : index === 4
                    ? "social-relations"
                    : GalleryCatSearchEn[index].catName.toLowerCase()
                }`
              );

              FilterGalleryData(
                GalleryCatSearchEn[index].catName === "social-relations"
                  ? "Social Relations"
                  : GalleryCatSearchEn[index].catName === "computer-engineering"
                  ? "Computer Engineering"
                  : GalleryCatSearchEn[index].catName
              );
            }}
            key={index}
            className={`dark:hover:bg-primary-dark hover:bg-primary-light dark:hover:text-black hover:text-white transition-all duration-200 group cursor-pointer flex items-center gap-x-2 justify-center rounded-lg py-2 px-2 dark:bg-neutral-900 bg-slate-100 dark:border-neutral-700 border-slate-300 border-[1px] dark:text-WHITE text-slate700`}
          >
            {cat.icon}
            <h1>{cat.catName}</h1>
          </div>
        );
      });
}
