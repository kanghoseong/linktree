export type LinkItem = {
  id: string;
  emoji: string;
  title: string;
  address: string;
  href: string;
};

export const LINKS: LinkItem[] = [
  {
    id: "github",
    emoji: "🐙",
    title: "Github",
    address: "https://github.com/kanghoseong",
    href: "https://github.com/kanghoseong",
  },
  {
    id: "blog",
    emoji: "📝",
    title: "Blog",
    address: "https://shallowbutwide.tistory.com/",
    href: "https://shallowbutwide.tistory.com/",
  },
  {
    id: "email",
    emoji: "✉️",
    title: "Email",
    address: "hskang@gmail.com",
    href: "mailto:hskang@gmail.com",
  },
];
