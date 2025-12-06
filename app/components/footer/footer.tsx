import { FOOTER_FEATURES } from "./footer.constant";

export default function Footer() {
  return (
    <footer className="bg-[#FBFBFB] px-4 py-10 sm:px-6 md:px-8 lg:px-[34px] lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 xl:gap-[98px]">
          <div className="w-full lg:w-auto lg:shrink-0">
            <img
              src="/icons/hyperhire-logo.svg"
              alt="Hyperhire Logo"
              className="h-auto w-32 sm:w-40"
            />
            <p className="mt-4 text-sm font-bold text-black sm:text-base">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <p className="mt-2 text-[13px] font-bold text-black sm:text-sm">
              010-0000-0000
            </p>
            <p className="text-[13px] font-bold text-black sm:text-sm">
              aaaaa@naver.com
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-[13px] font-bold text-black sm:gap-6 sm:text-sm lg:mt-12">
              <div>
                <p className="mb-1">상호명</p>
                <p>하이퍼하이어</p>
                <p className="text-xs sm:text-[13px]">
                  Hyperhire India Private Limited
                </p>
              </div>
              <div>
                <p className="mb-1">대표 CEO</p>
                <p>김주현</p>
                <p>Juhyun Kim</p>
              </div>
            </div>
          </div>

          <div className="w-full text-black">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-[15px]">
              {FOOTER_FEATURES.map((feature) => {
                return (
                  <div
                    key={feature.title}
                    className="rounded-xl bg-white p-4 transition-shadow"
                  >
                    <img
                      src={feature.iconSrc}
                      alt={feature.altText}
                      className="h-8 w-8 sm:h-10 sm:w-10"
                    />
                    <p className="mt-3 text-sm font-bold sm:text-base">
                      {feature.title}
                    </p>
                    <div className="mt-4 flex items-center gap-1">
                      <p className="text-sm font-bold">{feature.linkText}</p>
                      <img
                        src="/icons/right-arrow.svg"
                        alt="Right Arrow"
                        className="h-4 w-4"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-6 text-sm font-bold sm:flex-row sm:gap-8 lg:mt-[62px] lg:gap-[42px]">
              <div className="flex-1">
                <p className="mb-2 text-xs text-gray-600 sm:text-sm">
                  사업자등록번호 CIN
                </p>
                <p className="text-xs sm:text-sm">427-86-01187</p>
                <p className="text-xs sm:text-sm">U74110DL2016PTC290812</p>
              </div>
              <div className="flex-1 text-sm font-bold lg:flex-2">
                <p className="mb-2 text-xs text-gray-600 sm:text-sm">
                  주소 ADDRESS
                </p>
                <p className="text-xs leading-relaxed sm:text-sm">
                  서울특별시 강남대로 479, 지하 1층 238호
                </p>
                <p className="text-xs leading-relaxed sm:text-sm">
                  D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
                  Delhi, 110053 India
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 lg:mt-12">
          <p className="text-[13px] font-bold text-black sm:text-sm">
            ⓒ 2023 Hyperhire
          </p>
        </div>
      </div>
    </footer>
  );
}
