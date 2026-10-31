import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageCta } from "@/components/page-cta";
import { BrandLogo, IconSlot } from "@/components/wordmark";

export const metadata: Metadata = {
  title: "Axium Digital",
  description:
    "Axium Digital, filiale d’Axium Group : conseil, produits digitaux, infrastructure & cybersécurité, data, IA et formation.",
};

const pillars = [
  {
    title: "Conseil & transformation",
    text: "Diagnostic, feuille de route, PMO et gouvernance numérique pour cadrer et conduire les chantiers.",
  },
  {
    title: "Produits digitaux",
    text: "Sites, applications mobiles et plateformes conçus pour la performance, l’usage et la conversion.",
  },
  {
    title: "Infra, data & formation",
    text: "Réseau, cybersécurité, cloud, data, BI, IA et montée en compétences des équipes techniques.",
  },
];

export default function DigitalPage() {
  return (
    <div className="bg-white text-[#111a4d]">
      <Header tone="solid" current="/groupe" />
      <main>
        <section className="bg-[#151a4a] text-white">
          <div className="mx-auto w-full max-w-[1440px] px-5 pt-10 pb-16 md:px-12 lg:pt-14 lg:pb-20 xl:px-[88px]">
            <div className="max-w-3xl">
              <BrandLogo brand="digital" tone="light" className="md:[&_img]:h-10" />
              <p className="mt-3 text-sm text-[#ff9f1a]">Filiale d’Axium Group</p>
              <h1 className="hero-title type-title mt-4">
                Tous les métiers digitaux du groupe.
              </h1>
              <p className="hero-follow mt-5 max-w-2xl text-[15px] leading-[1.55] text-[#b9c0e0]">
                Axium Digital porte l’ensemble des services du groupe — conseil, produits,
                infrastructure, data et formation — à l’exception de la banque et de la
                fintech, réservées à Axium Bank.
              </p>
              <div className="hero-follow mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="/contact"
                  className="inline-flex min-h-11 items-center gap-2 bg-[#f28c1e] px-3.5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] text-white"
                >
                  Parler d’un projet digital
                  <IconSlot src="/figma/arrow-up-right.svg" className="size-[18px]" />
                </a>
                <a href="/groupe" className="text-sm text-white/80">
                  Retour vers Axium Group
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f5f0] py-16 lg:py-20">
          <div className="reveal mx-auto grid w-full max-w-[1440px] gap-8 px-5 md:px-12 lg:grid-cols-3 xl:px-[88px]">
            {pillars.map((item) => (
              <article key={item.title} className="border-t border-[#d9d4c8] pt-5">
                <h2 className="text-[1.45rem] font-semibold tracking-[-0.03em] text-[#151a4a]">
                  {item.title}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.55] text-[#67708f]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="reveal mx-auto grid w-full max-w-[1440px] items-start gap-8 px-5 md:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:px-[88px]">
            <div>
              <p className="kicker">Positionnement</p>
              <h2 className="type-title mt-3 max-w-[16ch]">
                Une filiale digitale, aux côtés d’Axium Bank.
              </h2>
            </div>
            <div className="space-y-4 text-[15px] leading-[1.55] text-[#67708f]">
              <p>
                Axium Digital exécute les métiers digitaux du groupe, en cohérence avec
                la vision et la gouvernance d’Axium Group. La banque et la fintech
                relèvent exclusivement d’Axium Bank, l’autre filiale.
              </p>
              <p>
                Palette bleu marine et orange, même exigence de clarté : une page dédiée
                pour renforcer la marque et le référencement.
              </p>
              <a href="/groupe" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#f28c1e]">
                Découvrir Axium Group
                <IconSlot src="/figma/arrow-amber.svg" className="size-3.5" />
              </a>
            </div>
          </div>
        </section>

        <PageCta />
      </main>
      <Footer />
    </div>
  );
}
