import { ReactNode } from "react";
import TypeScriptIcon from "@/../public/icons/TypeScript.svg";
import ReactJsIcon from "@/../public/icons/ReactJs.svg";
import NextJsIcon from "@/../public/icons/Nextjs.svg";
import JsIcon from "@/../public/icons/Js.svg";
import TailwindIcon from "@/../public/icons/Tailwindcss.svg";
import GitIcon from "@/../public/icons/Git.svg";
import MuiIcon from "@/../public/icons/Mui.svg";
import PythonIcon from "@/../public/icons/python.png";
import Image from "next/image";

interface TopSkillModel {
  logo: ReactNode;
  tag: string;
  level: string;
}

export const TopSkillsModel: TopSkillModel[] = [
  {
    logo: <Image src={TypeScriptIcon} alt="TypeScript" width={32} height={32} />,
    tag: "TypeScript",
    level: "advanced",
  },
  {
    logo: <Image src={ReactJsIcon} alt="ReactJs" width={32} height={32} />,
    tag: "ReactJs",
    level: "advanced",
  },
  {
    logo: <Image src={NextJsIcon} alt="NextJs" width={32} height={32} />,
    tag: "NextJs",
    level: "advanced",
  },
  {
    logo: <Image src={JsIcon} alt="JavaScript" width={32} height={32} />,
    tag: "JavaScript",
    level: "advanced",
  },
  {
    logo: <Image src={PythonIcon} alt="Python" width={32} height={32} />,
    tag: "Python",
    level: "advanced",
  },
  {
    logo: <Image src={TailwindIcon} alt="Tailwind" width={32} height={32} />,
    tag: "Tailwind",
    level: "advanced",
  },
  {
    logo: <Image src={GitIcon} alt="Git" width={32} height={32} />,
    tag: "Git",
    level: "advanced",
  },
  {
    logo: <Image src={MuiIcon} alt="MUI" width={32} height={32} />,
    tag: "MUI",
    level: "medium",
  },
];
