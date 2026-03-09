"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function Switch({ checked, defaultChecked, onCheckedChange, className, ...props }: SwitchProps) {
  const [internal, setInternal] = React.useState(!!defaultChecked);

  React.useEffect(() => {
    if (typeof checked === "boolean") setInternal(checked);
  }, [checked]);

  const toggle = () => {
    const next = !internal;
    if (typeof checked !== "boolean") setInternal(next);
    onCheckedChange?.(next);
  };

  const isOn = internal;
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      onClick={toggle}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
        isOn ? "bg-purple-600" : "bg-zinc-700",
        "focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:ring-offset-2 focus:ring-offset-black",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "inline-block h-5 w-5 transform rounded-full bg-white shadow transition",
          isOn ? "translate-x-5" : "translate-x-1"
        )}
      />
    </button>
  );
}
