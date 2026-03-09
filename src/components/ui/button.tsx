"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors",
          "bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-60 disabled:pointer-events-none",
          "px-4 py-2",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
