import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Divider from "../divider";
import Tooltip from "../tooltip";

import {
  HERO_FEATURES,
  HERO_HIRE_ROLES,
  HERO_SLIDER_PROFILE,
} from "./hero.constant";
import HeroSlider from "./hero-slider";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_HIRE_ROLES.length);
    }, 5_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 pt-8 pb-12 sm:px-6 md:pt-[61px] md:pb-[119px]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-3.5">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Tooltip arrow="left">
                <p className="text-[#40E2E8]">풀타임, 파트타임</p>{" "}
              </Tooltip>
            </motion.div>
            <motion.p
              className="mt-4 text-3xl leading-tight font-extrabold sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              최고의 실력을 가진 <br /> 외국인 인재를 찾고 계신가요?
            </motion.p>
            <motion.p
              className="mt-3 text-lg leading-relaxed font-bold sm:text-xl md:mt-4 md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              법률 및 인사관리 부담없이 <br /> 1주일 이내에 원격으로
              채용해보세요.
            </motion.p>
            <motion.p
              className="mt-4 text-base font-bold underline sm:text-lg md:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              개발자가 필요하신가요?
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-8 md:mt-[60px] md:gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {HERO_FEATURES.map((feature) => (
                <div key={feature.title} className="flex-1">
                  <Divider type="partial" />

                  <p className="mt-2 text-sm font-bold sm:text-base">
                    {feature.title}
                  </p>

                  <p
                    className="text-sm sm:text-base"
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mx-auto flex w-full flex-col lg:w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mx-auto"
            >
              <Tooltip>
                <div className="flex items-center gap-2.5">
                  <img
                    src="/icons/dollar-sign.svg"
                    alt="Dollar Sign"
                    width={26}
                    height={26}
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                  <p className="text-sm text-[#00C696] sm:text-base">
                    월 100만원
                  </p>
                </div>
              </Tooltip>
            </motion.div>

            <HeroSlider items={HERO_SLIDER_PROFILE} />
          </div>
        </div>
        <motion.div
          className="mt-8 overflow-hidden md:mt-[60px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            className="flex gap-2 sm:gap-2.5"
            animate={{
              x:
                -currentIndex *
                (typeof window !== "undefined" && window.innerWidth < 640
                  ? 280 + 8
                  : 332 + 10),
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {HERO_HIRE_ROLES.map(({ icon, alt, title }) => (
              <div
                key={title}
                className="flex w-[280px] shrink-0 items-center gap-4 rounded-xl bg-white/20 p-3 sm:w-[332px] sm:gap-6 sm:p-4"
              >
                <img
                  src={icon}
                  alt={alt}
                  width={56}
                  height={56}
                  className="h-10 w-10 sm:h-14 sm:w-14"
                />
                <p className="text-lg font-bold sm:text-2xl">{title}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
