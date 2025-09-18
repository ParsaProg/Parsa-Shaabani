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
        
      />
    ),
  },
  {
    catName: "Education",
    icon: (
      <GraduationCap
        size={18}
        
      />
    ),
  },
  {
    catName: "Technology",
    icon: (
      <EarthLock
        size={18}
        
      />
    ),
  },
  {
    catName: "Computer Engineering",
    icon: (
      <FolderCode
        size={18}
        
      />
    ),
  },
  {
    catName: "Social relations",
    icon: (
      <Users
        size={18}
        
      />
    ),
  },
  {
    catName: "Sports",
    icon: (
      <LandPlot
        size={18}
        
      />
    ),
  },
  {
    catName: "Private Life",
    icon: (
      <HatGlasses
        size={18}
        
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
        
      />
    ),
  },
  {
    catName: "تحصیلی",
    icon: (
      <GraduationCap
        size={18}
        
      />
    ),
  },

  {
    catName: "تکنولوژی",
    icon: (
      <EarthLock
        size={18}
        
      />
    ),
  },
  {
    catName: "مهندسی کامپیوتر",
    icon: (
      <FolderCode
        size={18}
        
      />
    ),
  },
  {
    catName: "روابط اجتماعی",
    icon: (
      <Users
        size={18}
        
      />
    ),
  },
  {
    catName: "ورزشی",
    icon: (
      <LandPlot
        size={18}
        
      />
    ),
  },
  {
    catName: "زندگی شخصی",
    icon: (
      <HatGlasses
        size={18}
        
      />
    ),
  },
];
export function GalleryCatSearch({
  lang,
  FilterGalleryData,
  activeButton,
  setActiveButton,
}: {
  lang: string;
  FilterGalleryData: any;
  activeButton: string;
  setActiveButton: (v: string) => void;
}) {
  const router = useRouter();
  return lang === "en"
    ? GalleryCatSearchEn.map((cat, index) => {
        return (
          <div
            onClick={() => {
              // setQuerySearch(
              //   window.location.search.substring(
              //     window.location.search.indexOf("=") + 1
              //   )
              // );
              setActiveButton(cat.catName.toLowerCase());
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
            className={`dark:hover:bg-primary-dark hover:bg-primary-light dark:hover:text-black hover:text-white ${
              activeButton === cat.catName.toLocaleLowerCase() &&
              "dark:bg-primary-dark bg-primary-light dark:text-black text-white"
            } transition-all duration-200 group cursor-pointer flex items-center gap-x-2 justify-center rounded-lg py-2 px-2 dark:bg-neutral-900 dark:border-neutral-700 border-slate-300 border-[1px] dark:text-WHITE text-slate700`}
          >
            {" "}
            <div className={`${
                activeButton === cat.catName.toLowerCase()
                  ? "dark:text-black text-white"
                  : "dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white"
              } transition-all duration-200`}>{cat.icon}</div>
            <h1>{cat.catName}</h1>
          </div>
        );
      })
    : GalleryCatSearchFa.map((cat, index) => {
        return (
          <div
            onClick={() => {
              // setQuerySearch(
              //   window.location.search.substring(
              //     window.location.search.indexOf("=") + 1
              //   )
              // );
              setActiveButton(GalleryCatSearchEn[index].catName.toLowerCase());
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
            className={`dark:hover:bg-primary-dark hover:bg-primary-light dark:hover:text-black hover:text-white ${
              activeButton === GalleryCatSearchEn[index].catName.toLocaleLowerCase() &&
              "dark:bg-primary-dark bg-primary-light dark:text-black text-white"
            } transition-all duration-200 group cursor-pointer flex items-center gap-x-2 justify-center rounded-lg py-2 px-2 dark:bg-neutral-900 dark:border-neutral-700 border-slate-300 border-[1px] dark:text-WHITE text-slate700`}
          >
            {" "}
            <div className={`${
                activeButton === GalleryCatSearchEn[index].catName.toLowerCase()
                  ? "dark:text-black text-white"
                  : "dark:text-primary-dark text-primary-light dark:group-hover:text-black group-hover:text-white"
              } transition-all duration-200`}>{cat.icon}</div>
            <h1>{cat.catName}</h1>
          </div>
        );
      });
}
