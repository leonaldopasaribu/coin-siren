interface Props {
  data: {
    id: string;
    name: string;
    role: string;
    experience: string;
    skills: string[];
    image?: string;
  };
}

export default function HeroCard({ data }: Props) {
  return (
    <div
      className={`
        h-auto min-h-[350px] w-full 
        sm:h-[380px] sm:w-[280px] 
        md:h-[408px] md:w-[292px] 
        rounded-xl bg-white 
        p-6 sm:p-8 md:p-9 
        text-center text-gray-900 shadow-2xl
      `}
    >
      <div className="relative flex justify-center">
        <img 
          src="/images/profile.png" 
          alt="Profile" 
          width={120} 
          height={120}
          className="h-[100px] w-[100px] sm:h-[110px] sm:w-[110px] md:h-[120px] md:w-[120px]"
        />
        <div className="absolute right-[60px] sm:right-[65px] bottom-0">
          <img 
            src="/images/flag.png" 
            alt="Flag" 
            width={25} 
            height={18}
            className="h-4 w-[22px] sm:h-[18px] sm:w-[25px]"
          />
        </div>
      </div>

      <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold">{data.name}</h3>

      <p className="mt-2 text-xs sm:text-sm font-semibold text-blue-600">
        {data.role} · {data.experience}
      </p>

      <div className="mt-4 sm:mt-6 md:mt-10 flex flex-wrap justify-center gap-1.5 sm:gap-2">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-xl border border-gray-200 bg-gray-100 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
