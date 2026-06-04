import { ReactNode } from "react";
import TypeScriptIcon from "@/../public/icons/TypeScript.svg";
import ReactJsIcon from "@/../public/icons/ReactJs.svg";
import NextJsIcon from "@/../public/icons/Nextjs.svg";
import JsIcon from "@/../public/icons/Js.svg";
import TailwindIcon from "@/../public/icons/Tailwindcss.svg";
import GitIcon from "@/../public/icons/Git.svg";
import MuiIcon from "@/../public/icons/Mui.svg";
import PythonIcon from "@/../public/icons/python.png";
import Express from "@/../public/icons/Express.png";
import Hono from "@/../public/icons/Hono.png";
import NodeJs from "@/../public/icons/nodejs-logo.gif";
import Postgresql from "@/../public/icons/Postgresql_elephant.svg.png";
import Prisma from "@/../public/icons/prisma-orm.jpg";
import MongoDb from "@/../public/icons/mongodb.webp";
import Vercel from "@/../public/icons/vercel-icon.svg";
import Zod from "@/../public/icons/zod-icon.png";
import WebScoket from "@/../public/icons/websocket.png";
import Image from "next/image";

interface TopSkillModel {
  logo: ReactNode;
  tag: string;
  level: string;
}

export const TopSkillsModel: TopSkillModel[] = [
  {
    logo: (
      <Image src={TypeScriptIcon} alt="TypeScript" width={32} height={32} />
    ),
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
  {
    logo: <Image src={Express} alt="Express" width={32} height={32} />,
    tag: "Express",
    level: "advanced",
  },
  {
    logo: <Image src={Hono} alt="Hono" width={32} height={32} />,
    tag: "Hono",
    level: "advanced",
  },
  {
    logo: <Image src={NodeJs} alt="NodeJs" width={32} height={32} />,
    tag: "NodeJs",
    level: "advanced",
  },
  {
    logo: <Image src={Postgresql} alt="Postgresql" width={32} height={32} />,
    tag: "Postgresql",
    level: "advanced",
  },
  {
    logo: (
      <Image
        className="rounded-full"
        src={Prisma}
        alt="Prisma"
        width={32}
        height={32}
      />
    ),
    tag: "Prisma",
    level: "advanced",
  },
  {
    logo: <Image src={MongoDb} alt="MongoDb" width={32} height={32} />,
    tag: "MongoDb",
    level: "advanced",
  },
  {
    logo: <Image src={Vercel} alt="Vercel" width={32} height={32} />,
    tag: "Vercel",
    level: "advanced",
  },
  {
    logo: <Image src={Zod} alt="Zod-Validation" width={32} height={32} />,
    tag: "ZOD-Validation",
    level: "advanced",
  },
  {
    logo: <Image src={WebScoket} alt="Web-Scoket apis" width={32} height={32} />,
    tag: "Web-Scoket api",
    level: "medium",
  },
];
