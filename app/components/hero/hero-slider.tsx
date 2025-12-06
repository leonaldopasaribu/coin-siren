import { motion, wrap } from "framer-motion";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HeroCard from "./hero-card";

interface Candidate{
  id: string;
  name: string;
  role: string;
  experience: string;
  skills: string[];
  salary: string;
  image?: string;
}

const VISIBLE_RANGE = 1;

export default function HeroSlider({ items }: { items: Candidate[] }) {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const total = useMemo(() => items.length, [items]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => i + 1);
  }, [setIndex]);

  const prev = useCallback(() => {
    setIndex((i) => i - 1);
  }, [setIndex]);

  return (
    <div className="relative mx-auto w-full py-10">
      <button
        onClick={prev}
        className="absolute top-[60%] left-0 z-30 h-12 w-12 -translate-y-1/2 cursor-pointer rounded-full transition-all hover:scale-110"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>

      <button
        onClick={next}
        className="absolute top-[60%] right-0 z-30 h-12 w-12 -translate-y-1/2 cursor-pointer rounded-full text-white transition-all hover:scale-110"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>

      <div className="flex h-[360px] items-center justify-center overflow-hidden">
        {items.map((item, i) => {
          const virtualIndex = wrap(0, total, index);
          const offset = wrap(-1, total - 1, i - virtualIndex);
          const width = windowWidth || 1024;

          const isInsideWindow = Math.abs(offset) <= VISIBLE_RANGE;
          const isCenter = offset === 0;

          const baseOffset = width < 640 ? 50 : 120;
          const scale = isCenter ? 1 : 0.85;
          const x = offset * baseOffset;
          const z = isCenter ? 20 : 10;
          const y = 40;

          if (!isInsideWindow) {
            return null;
          }

          return (
            <React.Fragment key={item.id}>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ zIndex: z }}
                animate={{
                  transform: `translate(${x}px, ${y}px) scale(${scale})`,
                }}
                whileHover={{ scale: isCenter ? 1.05 : 0.9 }}
                transition={{
                  type: "tween",
                  stiffness: 100,
                  damping: 22,
                  delay: i * 0.05,
                }}
              >
                <HeroCard data={item} />
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
