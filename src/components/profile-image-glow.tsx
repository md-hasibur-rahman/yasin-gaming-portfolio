"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function ProfileImageGlow({ src, alt }: { src?: string | null; alt?: string }) {
  const imageSrc = src || 
    "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=640&auto=format&fit=crop";
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full overflow-hidden ring-4 ring-purple-500/30 shadow-[0_0_60px_-10px_rgba(168,85,247,0.6)]"
      >
        <Image src={imageSrc} alt={alt || "profile"} fill className="object-cover" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -inset-6 rounded-full"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: [0.7, 0.3, 0.7] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.25), rgba(0,0,0,0) 60%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
