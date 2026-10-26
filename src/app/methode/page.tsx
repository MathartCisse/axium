import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { InteriorHero } from "@/components/interior-hero";
import { PageCta } from "@/components/page-cta";
import { IconSlot } from "@/components/wordmark";

export const metadata: Metadata = {
  title: "Méthode. Axium Group",
  description:
    "Une démarche en quatre mouvements : comprendre, cadrer, construire, transmettre.",
};

const steps = [
  {
    n: "01",
    title: "Comprendre",
    promise: "Écouter le terrain avant de proposer.",
    text: "Explorer les usages, comprendre l’existant et clarifier les priorités. Les enjeux métiers, les contraintes techniques et les besoins des équipes forment le point de départ.",
    together: [
      "Échanges avec les équipes métiers et techniques",
      "Lecture des processus, outils et contraintes",
      "Identification des besoins et des points de friction",
    ],
    deliverables: [
      "Synthèse du contexte et des enjeux",
      "Diagnostic de l’existant",
      "Premières priorités à approfondir",
    ],
    check: "Une compréhension partagée du besoin.",
  },
  {
    n: "02",
    title: "Cadrer",
    promise: "Choisir un cap clair et réaliste.",
    text: "Définir la cible, les choix structurants et une trajectoire réaliste. Nous précisons le périmètre et les critères de réussite pour permettre des décisions éclairées.",
    together: [
      "Priorisation des besoins et des cas d’usage",
      "Arbitrage du périmètre et des dépendances",
      "Définition des rôles et des points de validation",
    ],
    deliverables: [
      "Feuille de route et périmètre partagé",
      "Principes d’architecture ou de solution",
      "Critères de réussite définis ensemble",
    ],
    check: "Un cadre validé avant de construire.",
  },
  {
    n: "03",
    title: "Construire",
    promise: "Avancer par étapes, valider par l’usage.",
    text: "Livrer par étapes, tester avec les utilisateurs et améliorer chaque itération. La construction reste reliée au cadre initial tout en intégrant les retours du terrain.",
    together: [
      "Conception et réalisation progressive",
      "Démonstrations et retours des utilisateurs",
      "Tests, ajustements et préparation du déploiement",
    ],
    deliverables: [
      "Versions et fonctionnalités validées",
      "Résultats de tests et décisions d’ajustement",
      "Solution prête pour sa mise en service",
    ],
    check: "Des avancées visibles et validées.",
  },
  {
    n: "04",
    title: "Transmettre",
    promise: "Faire de la livraison un nouveau départ.",
    text: "Documenter, former et organiser la montée en autonomie dans la durée. Nous préparons les équipes à utiliser, comprendre et faire évoluer les solutions déployées.",
    together: [
      "Formation et prise en main des outils",
      "Documentation et transfert de connaissances",
      "Organisation des responsabilités et de la suite",
    ],
    deliverables: [
      "Documentation technique et d’usage",
      "Supports de formation adaptés",
      "Plan de prise en main et prochaines étapes",
    ],
    check: "Des équipes en capacité d’agir.",
  },
];

const criteria = [
  ["Qualité de service", "Des solutions qui soutiennent l’activité et la continuité des opérations."],
  ["Maîtrise des risques", "Des choix techniques, des responsabilités et des dépendances compris."],
  ["Fluidité des parcours", "Des usages plus simples pour les équipes et leurs interlocuteurs."],
  ["Capacité à agir", "Des équipes capables de prendre en main et de faire évoluer leurs outils."],
];

export default function MethodePage() {
  return (
    <div className="bg-white text-[#111a4d]">
      <InteriorHero
        current="/methode"
        eyebrow="Axium Group · Méthode"
        title="Avancer avec clarté, de la vision à l’usage."
        text="Une démarche structurée, collaborative et progressive. Chaque décision reste reliée aux objectifs métier, aux risques et à l’adoption par les équipes."
        explore="Découvrir les étapes ↓"
        exploreHref="#etapes"
        gradient="from-[#080d2d] to-[#1a2a93]"
      />
      <main>
        <nav
          aria-label="Étapes"
          className="reveal-stagger mx-auto grid w-full max-w-[1440px] gap-6 px-5 py-10 sm:grid-cols-2 md:px-12 lg:grid-cols-4 xl:px-[88px]"
        >
          {steps.map((step) => (
            <a key={step.n} href={`#etape-${step.n}`} className="block">
              <span className="block text-2xl font-semibold tracking-[-0.03em]">{step.title}</span>
            </a>
          ))}
        </nav>

        <section className="py-20 lg:py-28">
          <div className="reveal mx-auto grid w-full max-w-[1440px] items-start gap-6 px-5 md:px-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 xl:px-[88px]">
            <div>
              <p className="kicker">Une méthode, quatre mouvements</p>
              <h2 className="type-title mt-3">
                Décider ensemble. Construire progressivement.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.5] text-[#67708f]">
              Le projet avance à travers des étapes lisibles, des livrables concrets et des
              points de validation partagés. Le périmètre et la profondeur de chaque étape
              s’adaptent au contexte de la mission.
            </p>
          </div>
        </section>

        <div id="etapes">
          {steps.map((step) => (
            <section
              key={step.n}
              id={`etape-${step.n}`}
              className="border-t border-[#e7e9f2] py-16 lg:py-20"
            >
              <div className="mx-auto grid w-full max-w-[1440px] items-start gap-8 px-5 md:px-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:px-[88px]">
                <h2 className="type-title reveal">{step.title}</h2>
                <div>
                  <p className="text-lg font-semibold leading-[1.4] tracking-[-0.02em]">{step.promise}</p>
                  <p className="mt-4 text-[15px] leading-[1.5] text-[#67708f]">{step.text}</p>
                  <div className="mt-8">
                  <div className="reveal-stagger grid gap-10 md:grid-cols-2">
                    <div>
                      <p className="text-[11px] tracking-[0.14em] text-[#a6aabc] uppercase">Ce que nous faisons ensemble</p>
                      <ul className="mt-4 space-y-2 text-sm leading-[1.5]">
                        {step.together.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.14em] text-[#a6aabc] uppercase">Livrables</p>
                      <ul className="mt-4 space-y-2 text-sm leading-[1.5]">
                        {step.deliverables.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mt-6 flex items-center gap-3 text-sm font-semibold">
                    <IconSlot src="/figma/icon-check.svg" className="size-[18px]" />
                    {step.check}
                  </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="bg-[#111a4d] py-16 text-white lg:py-20">
          <div className="mx-auto grid w-full max-w-[1440px] items-start gap-12 px-5 md:px-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:px-[88px]">
            <div className="reveal">
              <p className="kicker">Le projet se construit avec vous</p>
              <h2 className="type-title mt-3">
                Des échanges utiles. Des décisions visibles.
              </h2>
              <img
                alt="Équipes Axium en atelier autour d’un projet"
                src="/figma/travail-partage.png"
                className="mt-7 h-[230px] w-full object-cover"
              />
            </div>
            <div className="reveal-stagger">
              <p className="mb-6 text-[15px] leading-[1.5] text-[#b9c0e0]">
                Les équipes métiers et techniques participent aux moments clés. Les retours
                d’usage nourrissent les choix et les arbitrages restent explicites.
              </p>
              {[
                [
                  "Un cadre commun",
                  "Des objectifs, des rôles et un périmètre partagés pour savoir où nous allons et comment nous avançons.",
                ],
                [
                  "Des points de validation",
                  "Des démonstrations et des revues de livrables pour confronter les réalisations aux besoins et décider de la suite.",
                ],
                [
                  "Des arbitrages explicites",
                  "Les priorités, les risques et les dépendances sont discutés avant de modifier la trajectoire.",
                ],
                [
                  "Une progression vers l’autonomie",
                  "La documentation, la formation et le transfert accompagnent la construction, pas seulement sa conclusion.",
                ],
              ].map(([title, text]) => (
                <article
                  key={title}
                  className="grid items-start gap-2 border-t border-[#2a356c] py-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-8"
                >
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-[15px] leading-[1.5] text-[#b9c0e0]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fb] py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-12 xl:px-[88px]">
            <div className="reveal">
              <p className="kicker">Ce qui guide les décisions</p>
              <h2 className="type-title mt-3">
                La réussite se définit dans votre activité.
              </h2>
            </div>
            <div className="reveal-stagger mt-12">
              {criteria.map(([title, text]) => (
                <article
                  key={title}
                  className="grid items-start gap-2 border-t border-[#e7e9f2] py-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16"
                >
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-[15px] leading-[1.5] text-[#67708f]">{text}</p>
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
