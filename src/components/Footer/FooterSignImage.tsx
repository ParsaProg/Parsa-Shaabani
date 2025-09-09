"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import DarkSign from "@/../public/signs/dark-sign.svg";
import LightSign from "@/../public/signs/light-sign.svg";
import { useEffect, useState } from "react";

export default function FooterImageSign() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <div></div>;
  }

  return resolvedTheme === "dark" ? (
    <Image
      src={DarkSign.src}
      alt="Parsa-Shaabani Sign, (امضای پارسا شعبانی)"
      width={800}
      height={800}
      className="w-[80px]"
    />
  ) : (
    <Image
      src={LightSign.src}
      alt="Parsa-Shaabani Sign, (امضای پارسا شعبانی)"
      width={800}
      height={800}
      className="w-[80px]"
    />
  );
}
