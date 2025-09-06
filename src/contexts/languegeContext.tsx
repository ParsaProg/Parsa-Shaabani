"use client";

import { createContext, useContext, useEffect, useState, ReactNode, FC } from "react";

interface LangContextType {
  lang: string;
  setLang: (lang: string) => void;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

interface LangProviderProps {
  children: ReactNode;
}

export const LangProvider: FC<LangProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<string>(""); // default

  // Initialize from localStorage on client
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLang(storedLang);
    } else {
      localStorage.setItem("lang", "en");
    }
  }, []);

  // Keep localStorage in sync whenever lang changes
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "fa" : "en"));

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

// Hook to access context
export const useLang = (): LangContextType => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within a LangProvider");
  return context;
};
