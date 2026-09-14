"use client";

import { LocalizedLink as Link } from "@/components/ui/LocalizedLink";
import { useEffect, useRef, useState } from "react";
import { PRIMARY_NAV } from "@/content/navigation";
import { MAIN_CTAS } from "@/content/site";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        if (mobileOpen) {
          setMobileOpen(false);
          menuButtonRef.current?.focus();
        }
      }
    }
    function onClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      const firstLink = mobilePanelRef.current?.querySelector<HTMLElement>("a,button");
      firstLink?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
        scrolled
          ? "border-line bg-base/95 backdrop-blur"
          : "border-transparent bg-base/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
        <Link
          href="/"
          className="font-display text-xl font-medium tracking-tight text-text"
          onClick={() => setOpenMenu(null)}
        >
          CreativeLAB
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <div key={item.label} className="relative">
              <button
                type="button"
                className="flex items-center px-3 py-2 text-sm font-medium text-text hover:text-accent"
                aria-expanded={openMenu === item.label}
                onClick={() =>
                  setOpenMenu(openMenu === item.label ? null : item.label)
                }
              >
                {item.label}
              </button>
              {item.children && openMenu === item.label && (
                <div className="absolute top-full start-0 z-50 mt-2 w-72 border border-line bg-surface py-3 shadow-[0_12px_32px_rgba(20,18,16,0.08)]">
                  <Link
                    href={item.href}
                    className="block px-5 py-2 text-sm font-medium text-accent hover:underline"
                    onClick={() => setOpenMenu(null)}
                  >
                    {item.label} overview
                  </Link>
                  <div className="mt-1 border-t border-line pt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2 text-sm text-text-secondary hover:bg-base hover:text-text"
                        onClick={() => setOpenMenu(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden bg-accent px-5 py-2.5 text-sm font-medium text-text-inverse hover:bg-[#804e33] sm:inline-flex"
          >
            {MAIN_CTAS.startProject}
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-line lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
              <path d="M0 1H18" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 7H18" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 13H18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-panel"
          ref={mobilePanelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-base"
        >
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-display text-xl font-medium">CreativeLAB</span>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center border border-line"
              aria-label="Close menu"
              onClick={() => {
                setMobileOpen(false);
                menuButtonRef.current?.focus();
              }}
            >
              <span aria-hidden>✕</span>
            </button>
          </div>
          <div className="flex-1 px-5 pb-10">
            {PRIMARY_NAV.map((item) => (
              <details key={item.label} className="border-b border-line py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-base font-medium text-text">
                  <Link href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                </summary>
                <div className="flex flex-col gap-1 pt-2 pb-1 ps-3">
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="py-1.5 text-sm text-text-secondary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <Link
              href="/contact"
              className="mt-6 flex justify-center bg-accent px-5 py-3 text-sm font-medium text-text-inverse"
              onClick={() => setMobileOpen(false)}
            >
              {MAIN_CTAS.startProject}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
