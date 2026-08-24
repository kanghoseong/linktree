import type { LinkItem } from "@/lib/links";

type LinkCardProps = {
  link: LinkItem;
  clickCount: number;
  onClick: () => void;
};

export default function LinkCard({ link, clickCount, onClick }: LinkCardProps) {
  return (
    <a
      href={link.href}
      onClick={onClick}
      className="flex h-14 w-full items-center gap-2 rounded-2xl border border-white/60 bg-white/40 px-4 text-sm font-medium text-stone-700 shadow-sm backdrop-blur-md transition-colors duration-200 hover:bg-white/60 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:hover:bg-white/[0.1]"
    >
      <span>{link.emoji}</span>
      <span className="flex-1 text-center">{link.title}</span>
      <span className="text-xs font-normal text-stone-400 dark:text-stone-500">
        {clickCount}회
      </span>
    </a>
  );
}
