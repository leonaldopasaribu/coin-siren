import Button from "../button";

export default function Header() {
  return (
    <header className="px-4 py-[18px] sm:px-6 md:px-8 lg:px-[34px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="shrink-0">
          <img
            src="/icons/hyperhire-logo-white.svg"
            alt="Logo White"
            width={114}
            height={21}
          />
        </div>

        <nav className="hidden flex-1 font-bold sm:block">
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-[60px]">
            <div className="flex cursor-pointer items-center gap-1 sm:gap-2">
              <p className="text-xs sm:text-sm lg:text-base">채용</p>
              <img
                src="/icons/caret-down.svg"
                alt="Caret Down"
                width={16}
                height={16}
              />
            </div>
            <p className="hidden cursor-pointer text-xs sm:block sm:text-sm lg:text-base">
              해외 개발자 활용 서비스
            </p>
          </div>
        </nav>

        <div className="hidden shrink-0 sm:block">
          <Button label="로그인" type="primary" />
        </div>
      </div>
    </header>
  );
}
