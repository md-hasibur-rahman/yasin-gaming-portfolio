"use client";
import { SocialLink } from "@/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";

export function SocialLinksBar({ links }: { links: SocialLink[] }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {links.map((l) => (
        <motion.a
          key={l.id}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/30 px-3 py-1.5 hover:border-zinc-700"
          whileHover={{ scale: 1.05, translateY: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="relative block h-5 w-5 overflow-hidden rounded">
            <Image src={l.icon_url} alt={l.platform} fill className="object-cover" />
          </span>
          <span className="text-sm text-zinc-300">{l.platform}</span>
        </motion.a>
      ))}
    </div>
  );
}
