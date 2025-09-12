import Masonry from "react-masonry-css";
import "@/styles/mansoory-style.css";
import MansooryMainLayout from "./mansooryMainLayoyout";
import { useEffect, useState } from "react";

export default function MasonryLayoutList({ items }: any) {
  const [fakeLoad, setFakeLoad] = useState<boolean>(false);
  const [heights, setHeights] = useState<number[]>([]); // heights for skeleton

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    // fake load
    const timer = setTimeout(() => setFakeLoad(true), 2000);

    // generate random heights on client
    const randomHeights = Array(16)
      .fill(0)
      .map(() => Math.floor(Math.random() * (500 - 250 + 1)) + 250);
    setHeights(randomHeights);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {fakeLoad
        ? items.map((item: any, i: number) => (
            <MansooryMainLayout key={i} i={i} item={item} />
          ))
        : heights.map((h, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-neutral-900"
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
    </Masonry>
  );
}
