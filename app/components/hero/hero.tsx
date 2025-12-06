import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SpeechBuble from "../speech-buble";
import Divider from "../divider";
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
    <section className="pt-[61px] pb-[119px]">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between gap-3.5">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <SpeechBuble arrow="left">
                <p className="text-[#40E2E8]">풀타임, 파트타임</p>{" "}
              </SpeechBuble>
            </motion.div>
            <motion.p
              className="mt-4 text-5xl font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              최고의 실력을 가진 <br /> 외국인 인재를 찾고 계신가요?
            </motion.p>
            <motion.p
              className="mt-4 text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              법률 및 인사관리 부담없이 <br /> 1주일 이내에 원격으로
              채용해보세요.
            </motion.p>
            <motion.p
              className="mt-6 text-lg font-bold underline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              개발자가 필요하신가요?
            </motion.p>
            <motion.div
              className="mt-[60px] flex gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {HERO_FEATURES.map((feature) => (
                <div key={feature.title}>
                  <Divider type="partial" />

                  <p className="mt-2 font-bold">{feature.title}</p>

                  <p
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mx-auto flex w-full flex-col">
            <SpeechBuble>
              <div className="flex items-center gap-2.5">
                <img
                  src="/icons/dollar-sign.svg"
                  alt="Dollar Sign"
                  width={26}
                  height={26}
                />
                <p className="text-[#00C696]">월 100만원</p>
              </div>
            </SpeechBuble>

            <HeroSlider items={HERO_SLIDER_PROFILE} />
          </div>
        </div>
        <motion.div
          className="mt-[60px] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            className="flex gap-2.5"
            animate={{
              x: -currentIndex * (332 + 10), // 332px width + 10px gap (2.5 * 4)
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {HERO_HIRE_ROLES.map(({ icon, alt, title }) => (
              <div
                key={title}
                className="flex w-[332px] shrink-0 items-center gap-6 rounded-xl bg-white/20 p-4"
              >
                <img src={icon} alt={alt} width={56} height={56} />
                <p className="text-2xl font-bold">{title}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
