import ProjectsType from "@/models/projects-model";
import { Github, Link } from "lucide-react";

export default function ProjectContainer({
  title,
  description,
  cats,
  tag,
  githubLink,
  deployLink,
}: ProjectsType) {
  return (
    <div className="shadow-md shadow-[#00000012] dark:shadow-[#ffffff08] w-[100%] rounded-xl p-5 border-[1px] dark:border-neutral-800 border-slate-200 flex flex-col justify-between gap-y-2">
      <h1 className="dark:text-white text-black font-bold text-xl">{title}</h1>
      <p className="font-[400] dark:text-neutral-300 text-neutral-700 text-sm">
        {description}
      </p>
      <div className="flex flex-row flex-wrap gap-3 mt-1 font-inter">
        {cats.map((val, index) => {
          return (
            <div
              className="rounded-xl p-2 border-[1px] dark:bg-neutral-900 bg-slate-100 dark:border-neutral-800 border-neutral-300 text-xs"
              key={index}
            >
              {val}
            </div>
          );
        })}
      </div>
      <span className="mt-2 h-[.3px] dark:bg-neutral-800 bg-neutral-200 w-full" />
      <section
        dir="ltr"
        className="flex justify-between items-center w-full mt-2"
      >
        <h1 className="font-bold font-inter">{tag}</h1>
        <section className="flex items-center gap-x-2">
          {deployLink && (
            <a target="_blank" href={deployLink} className="cursor-pointer transition-all duration-200 bg-transparent p-2 rounded-xl dark:hover:bg-neutral-800 hover:bg-slate-200 border-[1px] dark:border-neutral-800 border-slate-200 dark:text-neutral-200 text-slate-700">
              <Link size={18} />
            </a>
          )}

          <a target="_blank" href={githubLink} className="cursor-pointer transition-all duration-200 bg-transparent p-2 rounded-xl dark:hover:bg-neutral-800 hover:bg-slate-200 border-[1px] dark:border-neutral-800 border-slate-200 dark:text-neutral-200 text-slate-700">
            <Github size={18} />
          </a>
        </section>
      </section>
    </div>
  );
}
