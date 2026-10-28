import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { InteriorHero } from "@/components/interior-hero";
import { PageCta } from "@/components/page-cta";
import { IconSlot } from "@/components/wordmark";

export const metadata: Metadata = {
  title: "Expertises",
  description:
    "Pôles d’expertise Axium Group : web & mobile, réseau et cybersécurité, audit & conseil, data, fintech et formation.",
};

const domains = [
  {
    n: "01",
    icon: "/figma/service-compass.svg",
    title: "Conseil & transformation",
    scope: "Audit & Conseil · Digitalisation",
    text: "Évaluation approfondie, élaboration de stratégies, gestion de projet (PMO) et gouvernance numérique pour transformer vos défis en opportunités. Nous relions diagnostic et digitalisation pour construire un cap cohérent avec votre organisation.",
    skills: ["Audit & diagnostic stratégique", "PMO & gouvernance numérique", "Digitalisation des processus"],
    aside: "Comprendre l’existant avec vos équipes, hiérarchiser les priorités et cadrer les chantiers avant d’engager leur mise en œuvre.",
    outcome: "Un cap partagé et des priorités lisibles.",
  },
  {
    n: "02",
    icon: "/figma/service-panels.svg",
    title: "Produits digitaux",
    scope: "Web & Mobile · ERP & Portails B2B",
    text: "Conception et développement d’applications web et mobiles sur mesure, centrées sur l’expérience utilisateur et la performance. Des parcours aux intégrations métiers, chaque choix technique sert un usage concret.",
    skills: ["UX/UI & design de produit", "Développement web & mobile", "Intégration API & microservices", "ERP & portails B2B"],
    aside: "Préciser les besoins, concevoir les parcours, construire par étapes et accompagner le déploiement ainsi que la prise en main.",
    outcome: "Des solutions pensées pour les métiers.",
  },
  {
    n: "03",
    icon: "/figma/service-cloud.svg",
    title: "Réseau, infrastructure & cybersécurité",
    scope: "Réseau & Cyber · Cloud & Infogérance",
    text: "Architecture et gestion d’infrastructures fiables, avec une protection solide de vos systèmes et de vos données. Nous articulons le socle technique et les opérations pour soutenir la continuité de l’activité.",
    skills: ["Cloud public, privé & hybride", "Sécurité des systèmes & supervision", "DevOps & supervision applicative", "Réseau & infogérance"],
    aside: "Évaluer le socle existant, définir l’architecture cible et accompagner l’exploitation pour garder un environnement maîtrisé dans la durée.",
    outcome: "Un socle fiable, sécurisé et évolutif.",
  },
  {
    n: "04",
    icon: "/figma/service-chart.svg",
    title: "Data, BI & IA",
    scope: "Données · Décision · Automatisation",
    text: "Valorisation de vos données via des plateformes analytiques avancées, des tableaux de bord métier et des solutions d’intelligence artificielle. La qualité des données et la lisibilité des indicateurs restent au service de la décision.",
    skills: ["Data engineering & gouvernance", "Tableaux de bord BI & reporting", "IA générative & modèles prédictifs"],
    aside: "Identifier les données utiles, construire des indicateurs partagés et explorer des cas d’usage adaptés au contexte métier.",
    outcome: "Des données qui éclairent l’action.",
  },
  {
    n: "05",
    icon: "/figma/service-bank.svg",
    title: "Banque & Fintech",
    scope: "Services financiers · Parcours digitaux",
    text: "Solutions technologiques adaptées aux exigences du secteur financier : conformité, sécurité renforcée et innovation Fintech. Nous mettons en cohérence les parcours et les échanges entre systèmes.",
    skills: ["Systèmes de paiement & parcours digitaux", "Conformité RGPD & KYC", "Open banking & API financières"],
    aside: "Partir des usages et des contraintes de l’écosystème, cadrer les interactions et accompagner la construction de services cohérents.",
    outcome: "Des services financiers mieux connectés.",
  },
  {
    n: "06",
    icon: "/figma/service-cap.svg",
    title: "Formation Tech",
    scope: "Compétences · Pratique · Autonomie",
    text: "Programmes de montée en compétences sur mesure pour vos équipes techniques, du développement logiciel aux pratiques DevOps et à la cybersécurité. La formation relie compréhension, pratique et appropriation des outils.",
    skills: ["Formations pratiques & ateliers", "Coaching technique & mentorat", "Parcours cloud, IA & cybersécurité"],
    aside: "Identifier les besoins de progression, adapter les contenus au niveau des équipes et organiser la mise en pratique sur des cas utiles.",
    outcome: "Des équipes en capacité d’agir.",
  },
];

export default function ExpertisesPage() {
  return (
    <div className="bg-white text-[#111a4d]">
      <InteriorHero
        current="/expertises"
        eyebrow="Axium Group · Expertises"
        title="Des expertises pour conseiller, construire et sécuriser."
        text="Les six pôles d’expertise d’Axium Group, pour une chaîne de valeur complète du conseil à l’exécution."
        explore="Explorer nos expertises ↓"
        exploreHref="#poles"
      />
      <main id="poles">
        {domains.map((domain) => (
          <section key={domain.n} className="border-t border-[#e7e9f2] bg-white py-14 lg:py-20">
            <div className="reveal mx-auto grid w-full max-w-[1440px] items-start gap-6 px-5 md:px-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:px-[88px]">
              <div className="flex items-start gap-4">
                <IconSlot src={domain.icon} className="size-14 shrink-0" />
                <div>
                  <h2 className="type-title">{domain.title}</h2>
                  <p className="mt-3 text-[11px] tracking-[0.14em] text-[#ff9f1a] uppercase">{domain.scope}</p>
                </div>
              </div>
              <div>
                <p className="text-[15px] leading-[1.5] text-[#67708f]">{domain.text}</p>
                <p className="mt-4 text-[15px] leading-[1.5] text-[#111a4d]">{domain.skills.join(" · ")}</p>
                <p className="mt-6 text-[15px] leading-[1.5] text-[#67708f]">{domain.aside}</p>
                <p className="mt-3 text-[15px] font-semibold">{domain.outcome}</p>
                <a href="/contact" className="mt-5 inline-block text-[13px] font-semibold text-[#ff9f1a]">
                  Échanger sur votre besoin ↗
                </a>
              </div>
            </div>
          </section>
        ))}
        <PageCta />
      </main>
      <Footer />
    </div>
  );
}
