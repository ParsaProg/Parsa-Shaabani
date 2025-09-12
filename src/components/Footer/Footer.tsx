import DarkSign from "@/../public/signs/dark-sign.svg";
import LightSign from "@/../public/signs/light-sign.svg";
import { useLang } from "@/contexts/languageContext";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";
import { Github, Instagram, Mail, Phone, SendIcon } from "lucide-react";
import FooterImageSign from "./FooterSignImage";

export default function Footer() {
  const { lang } = useLang();
  return (
    <div className="mt-10 w-full border-t-[1px] dark:border-t-neutral-800 border-t-slate-200 py-5">
      <div dir="ltr" className="[@media(max-width:1200px)]:w-[85%] [@media(max-width:900px)]:w-[95%] w-[80%] mx-auto flex [@media(max-width:991px)]:flex-col gap-y-5 items-center justify-between">
        <FooterImageSign />
        <h5 className="text-center font-[400] dark:text-slate-400 text-slate-700 text-md">{lang === "en" ? en.footer.title : fa.footer.title}</h5>

        <div className="flex items-center gap-x-2">
            <a
              target="_blank"
              href="https://github.com/ParsaProg"
              className="cursor-pointer transition-all duration-200 bg-transparent p-2 rounded-xl dark:hover:bg-neutral-800 hover:bg-slate-200 border-[1px] dark:border-neutral-800 border-slate-200 dark:text-neutral-200 text-slate-700"
            >
              <Github size={17} />
            </a>
            <a
              target="_blank"
              href="mailto:parsashaabani3@gmail.com"
              className="cursor-pointer transition-all duration-200 bg-transparent p-2 rounded-xl dark:hover:bg-neutral-800 hover:bg-slate-200 border-[1px] dark:border-neutral-800 border-slate-200 dark:text-neutral-200 text-slate-700"
            >
              <Instagram size={17} />
            </a>
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
      </div>
    </div>
  );
}
