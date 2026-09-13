import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "text";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-text-inverse hover:bg-[#a15f3d] focus-visible:outline-accent",
  secondary:
    "border border-text bg-transparent text-text hover:bg-text hover:text-text-inverse focus-visible:outline-text",
  ghost:
    "border border-line-inverse bg-transparent text-text-inverse hover:border-accent hover:text-accent focus-visible:outline-accent",
  text: "px-0 py-0 text-accent underline underline-offset-4 hover:text-[#a15f3d]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
