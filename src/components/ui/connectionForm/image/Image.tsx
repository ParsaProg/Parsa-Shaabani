import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProjectImage({ title, posterImage }: any) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <div className="w-full h-[200px] rounded-lg" />;
  }

  return (
    <Image
      width={800}
      height={800}
      src={resolvedTheme === "dark" ? posterImage.dark : posterImage.light}
      alt={title}
      unoptimized
      className="w-full h-auto rounded-lg mb-3"
    />
  );
}
