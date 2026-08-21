const LINKS = [
  { label: "Github", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Tistory", href: "#" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 px-4 py-16 font-sans dark:bg-black">
      <div className="flex w-full max-w-sm flex-col items-center gap-6">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-zinc-200 text-3xl font-semibold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          강
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-xl font-semibold text-black dark:text-zinc-50">
            강호성
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            위세아이텍 개발자
          </p>
        </div>

        <div className="flex w-full flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-medium text-black transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
