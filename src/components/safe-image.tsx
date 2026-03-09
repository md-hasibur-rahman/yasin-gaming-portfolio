"use client";
import Image from "next/image";
import { useState } from "react";

export function SafeImage({
  src,
  alt,
  className,
  fill,
  sizes,
  priority,
  ...rest
}: {
  src: string | null | undefined;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  [key: string]: any;
}) {
  const [error, setError] = useState(false);
  const isValid = typeof src === "string" && src.trim() !== "" && !error;

  if (!isValid) {
    // Fallback placeholder preserving layout
    if (fill) {
      return <div className={className} {...rest} />;
    }
    return (
      <div
        className={`bg-zinc-800 ${className || ""}`}
        {...rest}
        style={{
          ...rest.style,
          width: rest.style?.width || "100%",
          height: rest.style?.height || "auto",
          aspectRatio: rest.style?.aspectRatio || "1 / 1",
        }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
      {...rest}
    />
  );
}
