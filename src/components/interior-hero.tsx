import { Header } from "@/components/header";
import { IconSlot } from "@/components/wordmark";

export function InteriorHero({
  current,
  eyebrow,
  title,
  text,
  explore,
  exploreHref,
  actionHref = "/contact",
}: {
  current: string;
  eyebrow: string;
  title: string;
  text: string;
  explore: string;
  exploreHref: string;
  actionHref?: string;
  gradient?: string;
}) {
  return (
    <section className="bg-[#080d2d] text-white">
      <Header tone="hero" current={current} />
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-8 pb-16 md:px-12 lg:pt-14 lg:pb-20 xl:px-[88px]">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <p className="hero-kicker kicker">{eyebrow}</p>
            <h1 className="hero-title type-title mt-3 text-white">{title}</h1>
          </div>
          <p className="hero-follow text-[15px] leading-[1.5] text-[#b9c0e0]">{text}</p>
        </div>
        <div className="hero-follow mt-8 flex flex-wrap items-center gap-6">
          <a
            href={actionHref}
            className="inline-flex items-center gap-2 bg-[#ff9f1a] px-3.5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] text-white"
          >
            Parlons de votre projet
            <IconSlot src="/figma/arrow-up-right.svg" className="size-[18px]" />
          </a>
          <a href={exploreHref} className="text-sm text-white/80">
            {explore}
          </a>
        </div>
      </div>
    </section>
  );
}
