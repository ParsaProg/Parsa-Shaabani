import "@/styles/mansoory-style.css";
import MansooryMainLayout from "./mansooryMainLayoyout";
import { useEffect, useState } from "react";

export default function MasonryLayoutList({ items }: any) {
  const [fakeLoad, setFakeLoad] = useState<boolean>(false);
  const [heights, setHeights] = useState<number[]>([]);
  const [randomMainLayoutHeight, setRandomMainLayoutHeight] = useState<
    number[] | null
  >(null);

  useEffect(() => {
    const timer = setTimeout(() => setFakeLoad(true), 2000);

    //! generate random heights on client
    const randomHeights = Array(16)
      .fill(0)
      .map(() => Math.floor(Math.random() * (500 - 250 + 1)) + 250);
    setHeights(randomHeights);

    //? Generate random height number for main layout structure
    const randomMainLayout = Array<number>(items.length)
      .fill(0)
      .map(() => Math.floor(Math.random() * (500 - 250 + 1)) + 250);

    setRandomMainLayoutHeight(randomMainLayout);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5 overflow-visible p-5">
      {fakeLoad
        ? items.map((item: any, i: number) => (
            <MansooryMainLayout key={i} i={i} item={item} randomHeight={randomMainLayoutHeight}/>
          ))
        : heights.map((h, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-neutral-900 mb-5"
            >
              {/* Skeleton image */}
              <div
                style={{ height: h }}
                className="relative w-full animate-pulse bg-gray-200 dark:bg-neutral-700 rounded-t-xl"
              />

              {/* Skeleton text */}
              <div className="p-3 space-y-2">
                <div className="h-4 w-3/4 bg-gray-300 dark:bg-neutral-600 rounded animate-pulse"></div>
                <div className="h-3 w-full bg-gray-300 dark:bg-neutral-600 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
    </div>
  );
}
