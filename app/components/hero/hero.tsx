import SpeechBuble from "../speech-buble";
import Divider from "../divider";
import {
  HERO_FEATURES,
  HERO_HIRE_ROLES,
  HERO_SLIDER_PROFILE,
} from "./hero.constant";
import HeroSlider from "./hero-slider";

export default function Hero() {
  return (
    <section className="pt-[61px] pb-[119px]">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between gap-3.5">
          <div className="w-full">
            <SpeechBuble arrow="left">
              <p className="text-[#40E2E8]">풀타임, 파트타임</p>{" "}
            </SpeechBuble>

            <p className="mt-4 text-5xl font-extrabold">
              최고의 실력을 가진 <br /> 외국인 인재를 찾고 계신가요?
            </p>

            <p className="mt-4 text-2xl font-bold">
              법률 및 인사관리 부담없이 <br /> 1주일 이내에 원격으로
              채용해보세요.
            </p>

            <p className="mt-6 text-lg font-bold underline">
              개발자가 필요하신가요?
            </p>

            <div className="mt-[60px] flex gap-12">
              {HERO_FEATURES.map((feature) => (
                <div key={feature.title}>
                  <Divider type="partial" />

                  <p className="mt-2 font-bold">{feature.title}</p>

                  <p
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                </div>
              ))}
            </div>
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

        <div className="mt-[60px] flex gap-2.5">
          {HERO_HIRE_ROLES.map(({ icon, alt, title }) => (
            <div
              key={title}
              className="flex w-[332px] items-center gap-6 rounded-xl bg-white/20 p-4"
            >
              <img src={icon} alt={alt} width={56} height={56} />
              <p className="text-2xl font-bold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
