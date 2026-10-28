import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { InteriorHero } from "@/components/interior-hero";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Engagement. Axium Group",
  description:
    "Proximité, transfert de compétences, confiance et impact utile : les engagements d’Axium Group.",
};

const cards = [
  {
    icon: "/figma/icon-messages.svg",
    title: "Proximité",
    lead: "Comprendre votre réalité avant de choisir une solution.",
    text: "La proximité se traduit par l’écoute des usages, des contraintes et des priorités. Elle permet de construire des réponses adaptées à votre organisation, et non de plaquer un modèle standard.",
    points: [
      "Associer les équipes métiers aux moments clés",
      "Relier les choix techniques au contexte opérationnel",
    ],
  },
  {
    icon: "/figma/icon-grad-eng.svg",
    title: "Transfert de compétences",
    lead: "Renforcer les équipes, pas leur dépendance.",
    text: "Une solution ne suffit pas : elle doit pouvoir être comprise, utilisée et faire l’objet d’évolutions. Le partage des connaissances et la montée en autonomie font partie de l’accompagnement.",
    points: [
      "Documenter les décisions, les outils et les usages",
      "Former et accompagner la prise en main",
    ],
  },
  {
    icon: "/figma/icon-shield-eng.svg",
    title: "Confiance",
    lead: "Rendre les décisions et les responsabilités lisibles.",
    text: "La confiance se construit dans la clarté du périmètre, des priorités et des échanges. Elle suppose de partager les risques et les arbitrages pour avancer sur une base commune.",
    points: [
      "Expliciter le cadre et les points de validation",
      "Partager les risques, les limites et les choix",
    ],
  },
  {
    icon: "/figma/icon-target.svg",
    title: "Impact utile",
    lead: "Faire du numérique un progrès dans l’activité.",
    text: "Nous privilégions les solutions qui simplifient les parcours, protègent les opérations et permettent aux équipes d’agir. L’utilité se juge dans les usages, pas dans la seule sophistication technique.",
    points: [
      "Définir avec vous des indicateurs utiles",
      "Faire évoluer les solutions à partir des retours d’usage",
    ],
  },
];

export default function EngagementPage() {
  return (
    <div className="bg-white text-[#111a4d]">
      <InteriorHero
        current="/engagement"
        eyebrow="Axium Group · Engagement"
        title="La technologie, au service de ceux qui l’utilisent."
        text="Axium inscrit chaque mission dans une logique de confiance, de transfert et de progrès mesurable, au service des organisations et de leur écosystème."
        explore="Nos engagements ↓"
        exploreHref="#engagements"
        gradient="from-[#080d2d] to-[#080d2d]"
      />
      <main>
        <section className="bg-[#111a4d] pt-16 text-white lg:pt-20">
          <div className="reveal mx-auto grid w-full max-w-[1440px] items-end gap-10 px-5 md:px-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-12 xl:px-[88px]">
            <img
              alt="Aminata Bineta Bibi NIANG DIOP, CEO d’Axium Group"
              src="/figma/founder-conviction.png"
              className="order-2 h-auto w-full max-w-[304px] justify-self-start object-contain object-bottom lg:order-1 lg:max-w-none"
            />
            <div className="order-1 grid gap-2 pb-10 lg:order-2 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-0 lg:pb-16">
              <div>
                <p className="text-[11px] font-semibold text-[#b9c0e0] uppercase">
                  Notre conviction
                </p>
                <p className="mt-2 text-[88px] leading-none text-[#b9c0e0] lg:text-[110px]" aria-hidden="true">
                  “
                </p>
              </div>
              <div>
                <p className="text-[1.75rem] leading-[1.24] font-semibold sm:text-[40px]">
                  La technologie n’a de valeur que lorsqu’elle renforce celles et ceux qui l’utilisent.
                </p>
                <p className="mt-7 text-[13px] leading-[1.6] text-[#b9c0e0]">
                  Aminata Bineta Bibi NIANG DIOP, CEO AXIUM Group
                </p>
                <span className="mt-7 block h-0.5 w-[54px] bg-[#ff9f1a]" />
              </div>
            </div>
          </div>
        </section>

        <section id="engagements" className="bg-white py-20 lg:py-28">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-12 xl:px-[88px]">
            <div className="reveal grid items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
              <div>
                <p className="kicker">Notre engagement</p>
                <h2 className="type-title mt-3">
                  Une exigence technique. Une responsabilité humaine.
                </h2>
              </div>
              <p className="text-[15px] leading-[1.5] text-[#67708f]">
                Nos engagements guident la manière de conseiller, de construire et
                d’accompagner. Ils se traduisent dans les décisions et les pratiques de
                chaque mission.
              </p>
            </div>
            <div className="reveal-stagger mt-14">
              {cards.map((card) => (
                <article
                  key={card.title}
                  className="grid items-start gap-4 border-t border-[#e7e9f2] py-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16"
                >
                  <h3 className="text-3xl font-semibold tracking-[-0.04em]">{card.title}</h3>
                  <div>
                    <p className="text-[15px] leading-[1.5] font-medium">{card.lead}</p>
                    <p className="mt-3 text-[15px] leading-[1.5] text-[#67708f]">{card.text}</p>
                    <p className="mt-4 text-[11px] tracking-[0.14em] text-[#a6aabc] uppercase">Dans la mission</p>
                    <ul className="mt-2 space-y-1 text-sm leading-[1.5]">
                      {card.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#f7f6f3] py-20 lg:py-28">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-12 xl:px-[88px]">
            <div className="reveal grid items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
              <div>
                <p className="kicker">Ce qui change</p>
                <h2 className="type-title mt-3">
                  Une transformation qui se voit dans l’activité.
                </h2>
              </div>
              <div>
                <p className="text-[15px] leading-[1.5] text-[#67708f]">
                  Nous privilégions des indicateurs utiles : qualité de service, maîtrise des
                  risques, fluidité des parcours et capacité des équipes à agir.
                </p>
                <p className="mt-6 text-[11px] tracking-[0.14em] text-[#111a4d] uppercase">
                  Indicateurs définis avec vous
                </p>
                <p className="mt-2 text-[15px] leading-[1.5] text-[#67708f]">
                  Des critères adaptés à votre contexte, pas une promesse chiffrée
                  déconnectée de vos usages.
                </p>
              </div>
            </div>
            <div className="reveal-stagger mt-12">
              {[
                [
                  "Décisions plus fiables",
                  "Une information lisible, des données cohérentes et un pilotage partagé.",
                ],
                [
                  "Opérations plus résilientes",
                  "Des risques mieux maîtrisés et une continuité d’activité prise en compte.",
                ],
                [
                  "Adoption mieux préparée",
                  "Des outils utiles, compris et accompagnés dans leur prise en main.",
                ],
                [
                  "Solutions prêtes à évoluer",
                  "Une base documentée et des compétences transmises pour préparer la suite.",
                ],
              ].map(([title, text]) => (
                <article
                  key={title}
                  className="grid items-start gap-2 border-t border-[#111a4d]/10 py-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">{title}</h3>
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
