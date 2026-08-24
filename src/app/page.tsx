const LINKS = [
  {
    emoji: "🐙",
    title: "Github",
    address: "https://github.com/kanghoseong",
    href: "https://github.com/kanghoseong",
  },
  {
    emoji: "📝",
    title: "Blog",
    address: "https://shallowbutwide.tistory.com/",
    href: "https://shallowbutwide.tistory.com/",
  },
  {
    emoji: "✉️",
    title: "Email",
    address: "hskang@gmail.com",
    href: "mailto:hskang@gmail.com",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#FFF8EF] via-[#FFEFDD] to-[#FCE2C8] px-6 py-20 font-sans dark:from-[#211714] dark:via-[#1a1310] dark:to-[#140f0c] sm:py-28">
      <div className="flex w-full max-w-sm flex-col items-center gap-10">
        <img
          src="https://placehold.co/150x150/orange/white"
          alt="강호성 프로필 사진"
          className="h-28 w-28 rounded-full object-cover shadow-[0_10px_30px_rgba(120,70,20,0.18)] ring-4 ring-white/80 dark:ring-white/10"
        />

        <div className="flex flex-col items-center gap-1.5 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-stone-800 dark:text-stone-50">
            강호성
          </h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            개발자 | 요즘에는 AI에 개발에 관심이 많아요
          </p>
        </div>

        <div className="flex w-full flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-white/60 bg-white/40 text-sm font-medium text-stone-700 shadow-sm backdrop-blur-md transition-colors duration-200 hover:bg-white/60 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:hover:bg-white/[0.1]"
            >
              <span>{link.emoji}</span>
              <span>{link.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
