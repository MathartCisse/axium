import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageCta } from "@/components/page-cta";
import { IconSlot } from "@/components/wordmark";

export const metadata: Metadata = {
  title: "Le Groupe. Axium Group",
  description:
    "Axium Group et Axium Digital forment une chaîne de valeur cohérente, du Sénégal vers l’international.",
};

export default function GroupePage() {
  return (
    <div className="bg-white text-[#111a4d]">
      <Header tone="solid" current="/groupe" />
      <main>
        <section className="bg-[#080d2d] text-white">
          <div className="mx-auto w-full max-w-[1440px] px-5 pt-10 pb-16 md:px-12 lg:pt-14 lg:pb-20 xl:px-[88px]">
            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
              <div>
                <p className="hero-kicker kicker">Axium Group</p>
                <h1 className="hero-title type-title mt-3">
                  Une vision groupe. Une exécution digitale intégrée.
                </h1>
              </div>
              <p className="hero-follow text-[15px] leading-[1.5] text-[#b9c0e0]">
                De la stratégie à l’usage, Axium Group et Axium Digital forment une chaîne
                de valeur cohérente au service des organisations africaines et internationales.
              </p>
            </div>
            <div className="hero-follow mt-8 flex flex-wrap items-center gap-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#ff9f1a] px-3.5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] text-white"
              >
                Parlons de votre projet
                <IconSlot src="/figma/arrow-up-right.svg" className="size-[18px]" />
              </a>
              <a href="#entites" className="text-sm text-white/80">
                Découvrir le groupe ↓
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="reveal mx-auto grid w-full max-w-[1440px] items-start gap-6 px-5 md:px-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 xl:px-[88px]">
            <div>
              <p className="kicker">Notre vision</p>
              <h2 className="type-title mt-3">
                Transformer la complexité en avantage durable.
              </h2>
            </div>
            <div className="space-y-6 text-[15px] leading-[1.5] text-[#67708f]">
              <p>
                Le numérique doit simplifier l’activité, protéger les opérations et ouvrir
                de nouveaux leviers de croissance, pas créer une couche de complexité
                supplémentaire.
              </p>
              <p>
                Axium Group conçoit, sécurise et opère les écosystèmes numériques qui
                accélèrent durablement les organisations, du Sénégal vers l’international.
              </p>
              <p>
                Notre logique : relier les enjeux de l’organisation, les choix
                technologiques et la capacité des équipes à agir. Une transformation
                maîtrisée se construit autant dans les usages que dans les systèmes.
              </p>
            </div>
          </div>
        </section>

        <section id="entites" className="overflow-hidden bg-[#111a4d] py-20 text-white lg:py-28">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-12 xl:px-[88px]">
            <div className="reveal grid items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
              <div>
                <p className="kicker">Deux entités, une même exigence</p>
                <h2 className="type-title mt-3">
                  La stratégie et l’exécution, dans une même continuité.
                </h2>
              </div>
              <p className="text-[15px] leading-[1.5] text-[#b9c0e0]">
                Une vision partagée, des expertises complémentaires et un accompagnement
                qui ne s’arrête pas à la livraison.
              </p>
            </div>
            <div className="reveal-stagger mt-14 grid gap-12">
              <article className="grid items-start gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
                <div>
                  <p className="text-[11px] tracking-[0.16em] text-[#ff9f1a] uppercase">Aligner · Structurer · Piloter</p>
                  <h3 className="type-title mt-3">Axium Group</h3>
                </div>
                <div>
                <p className="text-[15px] leading-[1.5] text-[#b9c0e0]">
                  Le partenaire stratégique qui aligne vision, gouvernance et capacités
                  technologiques pour conduire la transformation dans la durée.
                </p>
                <ul className="mt-6 space-y-2 text-[15px] leading-[1.5] text-[#e8eaf5]">
                  {[
                    "Conseil et trajectoire de transformation",
                    "Architecture, gouvernance et priorisation",
                    "Pilotage de programmes et performance",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                </div>
              </article>
              <article id="digital" className="grid items-start gap-4 border-t border-white/15 pt-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
                <div>
                  <p className="text-[11px] tracking-[0.16em] text-[#ff9f1a] uppercase">
                    Concevoir · Déployer · Faire évoluer
                  </p>
                  <h3 className="type-title mt-3">Axium Digital</h3>
                </div>
                <div>
                <p className="text-[15px] leading-[1.5] text-[#b9c0e0]">
                  Le moteur d’exécution qui imagine et déploie les produits, plateformes et
                  expériences numériques au service des métiers.
                </p>
                <ul className="mt-6 space-y-2 text-[15px] leading-[1.5] text-[#e8eaf5]">
                  {[
                    "Web, mobile et plateformes métiers",
                    "Data, automatisation et intelligence artificielle",
                    "Cloud, cybersécurité et opérations digitales",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  href="/digital"
                  className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#ff9f1a]"
                >
                  Voir la page Axium Digital
                  <IconSlot src="/figma/arrow-amber.svg" className="size-3.5" />
                </a>
                </div>
              </article>
            </div>
            <p className="reveal mt-16 text-sm tracking-[-0.01em] text-[#b9c0e0]">
              {["Vision", "Gouvernance", "Solutions", "Usages"].join(", ")}
            </p>
          </div>
        </section>

        <section className="bg-white py-20 text-[#111a4d] lg:py-28">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-12 xl:px-[88px]">
            <div className="reveal grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
              <div>
                <p className="kicker">Notre ancrage</p>
                <h2 className="type-title mt-3">
                  Depuis le Sénégal, une ambition ouverte sur le monde.
                </h2>
              </div>
              <div>
                <p className="text-[15px] leading-[1.5] text-[#67708f]">
                  La proximité avec les réalités locales et l’ouverture internationale se
                  complètent. Elles permettent de penser des solutions adaptées au contexte,
                  sans perdre de vue leur évolution.
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-[#ff9f1a] px-3.5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] text-white"
                >
                  Échanger avec nos équipes
                  <IconSlot src="/figma/arrow-up-right.svg" className="size-[18px]" />
                </a>
              </div>
            </div>
            <div className="reveal-stagger mt-16">
              {[
                [
                  "Sénégal",
                  "Un ancrage de proximité pour comprendre les usages, les contraintes opérationnelles et les priorités des organisations.",
                ],
                [
                  "Afrique",
                  "Des écosystèmes numériques pensés pour les réalités des marchés africains et les besoins de leurs organisations.",
                ],
                [
                  "International",
                  "Une vision globale pour relier les pratiques, les expertises et les trajectoires de transformation.",
                ],
              ].map(([title, text]) => (
                <article
                  key={title}
                  className="grid items-start gap-2 border-t border-[#e7e9f2] py-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                  <p className="text-[15px] leading-[1.5] text-[#67708f]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f6f3] py-20 lg:py-28">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-12 xl:px-[88px]">
            <div className="reveal">
              <p className="kicker">Notre complémentarité en action</p>
              <h2 className="type-title mt-3">
                Un partenaire, de la décision à l’autonomie.
              </h2>
            </div>
            <div className="reveal-stagger mt-12">
              {[
                {
                  title: "Donner un cap",
                  text: "Mettre les enjeux métiers au centre, définir les priorités et rendre les arbitrages lisibles.",
                },
                {
                  title: "Relier les expertises",
                  text: "Faire dialoguer conseil, produits, infrastructure et data pour éviter les solutions isolées.",
                },
                {
                  title: "Faire durer les usages",
                  text: "Accompagner la prise en main, transmettre les compétences et préparer les évolutions.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="grid items-start gap-2 border-t border-[#111a4d]/10 py-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16"
                >
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="text-[15px] leading-[1.5] text-[#67708f]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <PageCta />
      </main>
      <Footer />
    </div>
  );
}
