"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (theme: "light" | "dark") => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Prevent SSR mismatch
    return null;
  }

  return (
    <motion.div whileTap={{
      scale: 0.9
    }} 
    transition={{duration: .1}} className="transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-neutral-800 p-2 rounded-lg border-[1px] dark:border-[#27272A] border-[#E2E8F0] dark:text-neutral-100 text-slate-700" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
