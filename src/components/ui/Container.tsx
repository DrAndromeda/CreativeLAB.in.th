import { ReactNode } from "react";

export function Container({
  children,
  className = "",
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 lg:px-12 ${
        narrow ? "max-w-3xl" : "max-w-[1440px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
