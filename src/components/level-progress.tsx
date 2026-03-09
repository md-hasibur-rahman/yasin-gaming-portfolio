"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LevelProgress({ value, className }: { value: number; className?: string }) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className={cn("h-2 w-full rounded-full bg-zinc-800/80 overflow-hidden", className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${clamped}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 shadow-[0_0_18px_-4px_rgba(217,70,239,0.8)]"
      />
    </div>
  );
}
