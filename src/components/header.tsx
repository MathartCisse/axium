"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { IconSlot, Wordmark } from "@/components/wordmark";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav } from "@/lib/site";

function unlockScroll() {
  document.documentElement.style.removeProperty("overflow");
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("padding-right");
  document.body.style.removeProperty("pointer-events");
  document.documentElement.classList.remove("base-ui-disable-body-scroll");
  document.body.removeAttribute("data-scroll-locked");
}

export function Header({
  tone = "hero",
  current,
  overlay = false,
}: {
  tone?: "hero" | "solid";
  current?: string;
  /** Homepage: the bar floats over the hero and does not take flow space. */
  overlay?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const onScroll = () => setRaised(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) unlockScroll();
  }, [open]);

  function onMenuChange(next: boolean) {
    setOpen(next);
    if (!next) {
      // Release lock immediately so the page never stays stuck after close.
      requestAnimationFrame(unlockScroll);
      window.setTimeout(unlockScroll, 320);
    }
  }

  function closeMenu() {
    setOpen(false);
    unlockScroll();
  }

  const solid = tone === "solid" || raised;

  return (
    <>
      {overlay ? null : <div className="h-16" aria-hidden />}
      <header
        className={`site-header fixed inset-x-0 top-0 z-40 text-white ${
          solid ? "is-raised bg-[#080d2d]/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-5 md:px-12 xl:px-[88px]">
          <a href="/" className="block origin-left scale-[0.82] sm:scale-100">
            <Wordmark />
          </a>

          <nav className="hidden items-center gap-[34px] lg:flex" aria-label="Principal">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-sm ${
                  current === item.href ? "is-current" : "text-[#dce0f5]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              className="header-cta inline-flex items-center gap-2 bg-[#ff9f1a] px-3.5 py-2 text-[13px] font-semibold tracking-[-0.01em] text-white"
            >
              Parler de votre projet
              <IconSlot src="/figma/arrow-up-right.svg" className="size-[18px]" />
            </a>
          </nav>

          <Sheet open={open} onOpenChange={onMenuChange}>
            <SheetTrigger
              aria-label="Ouvrir le menu"
              className="inline-flex size-11 items-center justify-center text-white lg:hidden"
            >
              <span className="flex w-6 flex-col gap-[7px]" aria-hidden>
                <span className="h-px w-6 bg-white" />
                <span className="h-px w-4 bg-[#ff9f1a]" />
              </span>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="h-dvh w-full max-w-none gap-0 border-0 bg-[#080d2d] p-0 text-white shadow-none duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] data-[side=right]:w-full data-[side=right]:border-0 data-[side=right]:shadow-none data-[side=right]:sm:max-w-none sm:max-w-none"
            >
              <div className="flex h-full flex-col px-6 pt-6 pb-8">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-white">
                    <Wordmark />
                  </SheetTitle>
                  <SheetClose
                    aria-label="Fermer le menu"
                    className="inline-flex size-11 items-center justify-center text-white"
                    onClick={closeMenu}
                  >
                    <X className="size-5" strokeWidth={1.5} />
                  </SheetClose>
                </div>
                <nav className="mt-16 flex flex-col" aria-label="Mobile">
                  {nav.map((item) => {
                    const active = current === item.href;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={closeMenu}
                        className={`flex items-baseline justify-between py-2 text-[clamp(2.4rem,10vw,3.25rem)] leading-[1.05] font-semibold tracking-[-0.045em] transition-colors duration-200 ${
                          active ? "text-[#ff9f1a]" : "text-white"
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
                <div className="mt-auto">
                  <a
                    href="/contact"
                    onClick={closeMenu}
                    className="header-cta inline-flex items-center gap-2 bg-[#ff9f1a] px-3.5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] text-white"
                  >
                    Parler de votre projet
                    <IconSlot src="/figma/arrow-up-right.svg" className="size-[18px]" />
                  </a>
                  <p className="mt-6 text-sm text-[#8ea0d4]">Dakar · Sénégal</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
