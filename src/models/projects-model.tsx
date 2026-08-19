export default interface ProjectsType {
  title: string;
  description: string;
  tag: string;
  deployLink?: string;
  githubLink?: string;
  cats: Array<string>;
  posterImage: Record<"light" | "dark", string>;
  supportTheme?: string;
}

export const ProjectsModelDataEn: ProjectsType[] = [
  {
    title: "Sazhin",
    description:
      "Sajhin Exchange is a modern, professionally executed commercial project that has achieved complete success in collaboration with Tehran",

    cats: [
      "NextJs",
      "Typescript",
      "Eslint",
      "NodeJs",
      "Express",
      "Postgresql",
      "Prisma",
      "Node-cron",
      "TailwindCss",
      "Vercel",
    ],
    tag: "Full-Stack Developer",
    posterImage: {
      light:
        "https://github.com/ParsaProg/Parsa-Shaabani-Assets/blob/main/Screenshot%202026-08-20%20023305.png?raw=true",
      dark: "https://github.com/ParsaProg/Parsa-Shaabani-Assets/blob/main/Screenshot%202026-08-20%20023305.png?raw=true",
    },
    deployLink: "https://www.sazhinexchange.com",
    supportTheme: "multiTheme",
  },
  {
    title: "Tecama",
    description:
      "Tecama 🚀 — A next-gen coding learning platform that makes programming practical, engaging, and accessible. Learn with real-world projects, up-to-date tutorials, and AI-assisted guidance 🌱💻. Perfect for beginners and advanced developers looking to grow their skills.",
    githubLink: "https://github.com/ParsaProg/tecama",
    deployLink: "https://tecama.vercel.app",
    cats: ["ReactJs", "NextJs", "TailwindCss", "Vercel"],
    tag: "Frontend Developer",
    posterImage: {
      light:
        "https://github.com/ParsaProg/tecama/blob/main/public/tecama-light.png?raw=true",
      dark: "https://github.com/ParsaProg/tecama/blob/main/public/tecama-dark.png?raw=true",
    },
    supportTheme: "multiTheme",
  },
  {
    title: "Health",
    description:
      "Health is where science and technology come together to improve your well-being 💡. From global research-backed insights 🌍 to simple daily protocols for better sleep 😴, more energy ⚡, and higher productivity 📈 — this is the digital future of wellness.",
    githubLink: "https://github.com/ParsaProg/health",
    deployLink: "https://health-mauve-five.vercel.app/",
    cats: ["ReactJs", "NextJs", "Vercel", "TailwindCss", "react-particles"],
    tag: "Frontend Developer",
    posterImage: {
      light:
        "https://github.com/ParsaProg/Health/blob/main/public/images/light-shot.png?raw=true",
      dark: "https://github.com/ParsaProg/Health/blob/main/public/images/dark-shot.png?raw=true",
    },
    supportTheme: "multiTheme",
  },
  {
    title: "GitHub_Analytic_Scraping",
    description:
      "GitHub Profile Scraper 🐙 | Python Web Scraping & FastAPI 💻 Scrape GitHub profiles effortlessly: get full names, usernames, bios, and more. Built with BeautifulSoup, requests, and optionally Selenium for dynamic content. Includes a FastAPI endpoint for easy API access.",
    githubLink: "https://github.com/ParsaProg/GitHub_Analytic_Scraping",
    cats: ["Python", "requests", "bs4", "Fastapi"],
    tag: "Backend Developer",
    posterImage: {
      light:
        "https://github.com/ParsaProg/GitHub_Analytic_Scraping/blob/main/github-analytic-light.png?raw=true",
      dark: "https://github.com/ParsaProg/GitHub_Analytic_Scraping/blob/main/github-analytic-dark.png?raw=true",
    },
  },
  {
    title: "chess-naami-academy",
    description:
      "♟ ChessNaami | Iran’s premier chess education platform based in Tehran | Offering structured Persian-language courses from beginner to advanced levels | Featuring real-time AI analysis, personalized coaching from FIDE-certified instructors, and regular online/offline | A complete ecosystem",
    githubLink: "https://github.com/ParsaProg/chess-naami-academy",
    deployLink: "https://www.chessnaami.ir",
    cats: [
      "Javascript",
      "React",
      "NextJs",
      "Typescript",
      "sweetalert",
      "emailJs",
      "Tailwindcss",
    ],
    tag: "Fullstack Developer",
    posterImage: {
      light:
        "https://github.com/ParsaProg/chess-naami-academy/blob/main/public/images/chessnaami-shot.png?raw=true",
      dark: "https://github.com/ParsaProg/chess-naami-academy/blob/main/public/images/chessnaami-shot.png?raw=true",
    },
    supportTheme: "light",
  },
];

export const ProjectsModelDataFa: ProjectsType[] = [
  {
    title: "صرافی ساژین",
    description:
      "صرافی ساژین، یک پروژه ی تجاری، مدرن و اصولی که با تهران بسته شده، کاملا موفق بوده",

    cats: [
      "NextJs",
      "Typescript",
      "Eslint",
      "NodeJs",
      "Express",
      "Postgresql",
      "Prisma",
      "Node-cron",
      "TailwindCss",
      "Vercel",
    ],
    tag: "Full-Stack Developer",
    posterImage: {
      light:
        "https://github.com/ParsaProg/Parsa-Shaabani-Assets/blob/main/Screenshot%202026-08-20%20023249.png?raw=true",
      dark: "https://github.com/ParsaProg/Parsa-Shaabani-Assets/blob/main/Screenshot%202026-08-20%20023305.png?raw=true",
    },
    supportTheme: "multiTheme",
    deployLink: "https://www.sazhinexchange.com"
  },
  {
    title: "تکاما (تکنولوژی با ما)",
    description:
      "تکاما 🚀 — یک پلتفرم یادگیری کدنویسی نسل بعدی که برنامه‌نویسی را کاربردی، جذاب و قابل دسترس می‌کند. با پروژه‌های دنیای واقعی، آموزش‌های به‌روز و راهنمایی‌های مبتنی بر هوش مصنوعی 🌱💻 یاد بگیرید. ایده‌آل برای مبتدیان و توسعه‌دهندگان حرفه‌ای که به دنبال رشد مهارت‌های خود هستند.",
    githubLink: "https://github.com/ParsaProg/tecama",
    deployLink: "https://tecama.vercel.app",
    cats: ["ReactJs", "NextJs", "TailwindCss"],
    tag: "Frontend Developer",
    posterImage: {
      light:
        "https://github.com/ParsaProg/tecama/blob/main/public/tecama-light.png?raw=true",
      dark: "https://github.com/ParsaProg/tecama/blob/main/public/tecama-dark.png?raw=true",
    },
    supportTheme: "multiTheme",
  },
  {
    title: "سلامتی",
    description:
      "سلامت جایی است که علم و فناوری برای بهبود رفاه شما گرد هم می‌آیند 💡. از بینش‌های مبتنی بر تحقیقات جهانی 🌍 گرفته تا پروتکل‌های ساده روزانه برای خواب بهتر 😴، انرژی بیشتر ⚡ و بهره‌وری بالاتر 📈 - این آینده دیجیتال سلامت است.",
    githubLink: "https://github.com/ParsaProg/health",
    deployLink: "https://health-mauve-five.vercel.app/",
    cats: ["ReactJs", "NextJs", "Vercel", "TailwindCss", "react-particles"],
    tag: "Frontend Developer",
    posterImage: {
      light:
        "https://github.com/ParsaProg/Health/blob/main/public/images/light-shot.png?raw=true",
      dark: "https://github.com/ParsaProg/Health/blob/main/public/images/dark-shot.png?raw=true",
    },
    supportTheme: "multiTheme",
  },
  {
    title: "اسکرپینگ پروفایل گیت‌هاب",
    description:
      "ابزار جمع‌آوری اطلاعات پروفایل گیت‌هاب 🐙 | جمع‌آوری اطلاعات وب با پایتون و FastAPI 💻 به راحتی پروفایل‌های گیت‌هاب را جمع‌آوری کنید: نام کامل، نام کاربری، بیوگرافی و موارد دیگر را دریافت کنید. ساخته شده با BeautifulSoup، درخواست‌ها و به صورت اختیاری سلنیوم برای محتوای پویا. شامل یک نقطه پایانی FastAPI برای دسترسی آسان به API.",
    githubLink: "https://github.com/ParsaProg/GitHub_Analytic_Scraping",
    cats: ["Python", "requests", "bs4", "Fastapi"],
    tag: "Backend Developer",
    posterImage: {
      light:
        "https://github.com/ParsaProg/GitHub_Analytic_Scraping/blob/main/github-analytic-light.png?raw=true",
      dark: "https://github.com/ParsaProg/GitHub_Analytic_Scraping/blob/main/github-analytic-dark.png?raw=true",
    },
  },
  {
    title: "آموزشگاه شطرنج نعامی",
    description:
      "♟ ChessNaami | پلتفرم برتر آموزش شطرنج ایران مستقر در تهران | ارائه دوره‌های ساختارمند به زبان فارسی از سطوح مبتدی تا پیشرفته | شامل تجزیه و تحلیل هوش مصنوعی در لحظه، مربیگری شخصی‌سازی‌شده توسط مربیان دارای گواهینامه فیده و آموزش‌های آنلاین/آفلاین منظم | یک اکوسیستم کامل",
    githubLink: "https://github.com/ParsaProg/chess-naami-academy",
    deployLink: "https://chessnaami.ir",
    cats: [
      "Javascript",
      "React",
      "NextJs",
      "Typescript",
      "sweetalert",
      "emailJs",
      "Tailwindcss",
    ],
    tag: "Fullstack Developer",
    posterImage: {
      light:
        "https://github.com/ParsaProg/chess-naami-academy/blob/main/public/images/chessnaami-shot.png?raw=true",
      dark: "https://github.com/ParsaProg/chess-naami-academy/blob/main/public/images/chessnaami-shot.png?raw=true",
    },
    supportTheme: "light",
  },
];
