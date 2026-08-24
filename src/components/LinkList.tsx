"use client";

import { useEffect, useState } from "react";
import { LINKS } from "@/lib/links";
import LinkCard from "./LinkCard";

export default function LinkList() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {});
  }, []);

  function handleClick(linkId: string) {
    setCounts((prev) => ({ ...prev, [linkId]: (prev[linkId] ?? 0) + 1 }));

    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {LINKS.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          clickCount={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </div>
  );
}
