import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroVideo } from "@/components/hero-video";
import { SignalCounters } from "@/components/signal-counters";
import { TechMarquee } from "@/components/tech-marquee";
import { BrandLogo, IconSlot } from "@/components/wordmark";

const enjeux = [
  {
    icon: "/figma/enjeux-unlink.svg",
    title: "Des systèmes qui ne communiquent plus",
    text: "Applications dispersées, données silotées et processus manuels ralentissent les équipes et fragilisent la décision.",
  },
  {
    icon: "/figma/enjeux-gauge.svg",
    title: "Des investissements difficiles à piloter",
    text: "Sans feuille de route claire, les projets s’empilent sans produire la valeur opérationnelle attendue.",
  },
  {
    icon: "/figma/enjeux-shield.svg",
    title: "Une croissance exposée aux risques",
    text: "La disponibilité, la cybersécurité et la conformité deviennent critiques à mesure que l’organisation se développe.",
  },
];

const metiers = [
  {
    icon: "/figma/service-compass.svg",
    title: "Conseil & transformation",
    text: "Évaluation approfondie, élaboration de stratégies, gestion de projet (PMO) et gouvernance numérique pour transformer vos défis en opportunités.",
  },
  {
    icon: "/figma/service-panels.svg",
    title: "Produits digitaux",
    text: "Conception et développement d’applications web et mobiles sur mesure, centrées sur l’expérience utilisateur et la performance.",
  },
  {
    icon: "/figma/service-cloud.svg",
    title: "Réseau, infrastructure & cybersécurité",
    text: "Architecture et gestion d’infrastructures fiables, avec une protection solide de vos systèmes et de vos données.",
  },
  {
    icon: "/figma/service-chart.svg",
    title: "Data, BI & IA",
    text: "Valorisation de vos données via des plateformes analytiques avancées, des tableaux de bord métier et des solutions d’intelligence artificielle.",
  },
  {
    icon: "/figma/service-bank.svg",
    title: "Banque & Fintech",
    text: "Solutions technologiques adaptées aux exigences du secteur financier : conformité, sécurité renforcée et innovation Fintech.",
  },
  {
    icon: "/figma/service-cap.svg",
    title: "Formation Tech",
    text: "Programmes de montée en compétences sur mesure pour vos équipes techniques, du développement logiciel aux pratiques DevOps et à la cybersécurité.",
  },
];

const realisations = [
  {
    name: "Pynk",
    image: "/realisations/pynk.png",
    imageAlt: "Capture du site Pynk",
  },
  {
    name: "OFFcam",
    image: "/realisations/offcam.png",
    imageAlt: "Capture de l’expérience OFFcam",
  },
  {
    name: "Focus Investment Group",
    image: "/realisations/focus.png",
    imageAlt: "Capture du site Focus Investment Group",
  },
  {
    name: "Icône by AMFA",
    image: "/realisations/icone.jpg",
    imageAlt: "Icône by AMFA, Diamniadio",
  },
];

const steps = [
  {
    n: "01",
    title: "Comprendre",
    text: "Écouter les métiers, cartographier l’existant et clarifier les priorités.",
  },
  {
    n: "02",
    title: "Cadrer",
    text: "Définir la cible, les choix d’architecture et une trajectoire réaliste.",
  },
  {
    n: "03",
    title: "Construire",
    text: "Livrer par étapes, tester avec les utilisateurs et sécuriser chaque jalon.",
  },
  {
    n: "04",
    title: "Transmettre",
    text: "Documenter, former les équipes et inscrire l’amélioration dans la durée.",
  },
];

const benefits = [
  {
    title: "Décisions plus lisibles",
    text: "Une trajectoire priorisée, des arbitrages documentés et un pilotage partagé.",
  },
  {
    title: "Opérations plus résilientes",
    text: "Des risques mieux maîtrisés et une continuité pensée dès la conception.",
  },
  {
    title: "Adoption mieux préparée",
    text: "Les équipes sont associées, outillées et accompagnées dans le changement.",
  },
  {
    title: "Solutions prêtes à évoluer",
    text: "Des fondations modulaires capables de suivre la croissance et les nouveaux usages.",
  },
];

const principles = [
  {
    title: "Responsabilité",
    text: "Dire ce qui est possible, documenter les choix et tenir la trajectoire.",
  },
  {
    title: "Partenariat",
    text: "Construire avec les équipes, dans la transparence et le respect du contexte.",
  },
  {
    title: "Impact durable",
    text: "Favoriser l’autonomie, la sobriété et des fondations qui traversent le temps.",
  },
];

const checks = [
  "Le secteur d’activité et le contexte métier pour cibler la bonne expertise.",
  "Le périmètre attendu, les contraintes clés et les livrables principaux.",
  "Le calendrier prévisionnel et le budget estimé pour prioriser la réponse.",
  "Un interlocuteur principal pour faciliter la prise de contact et la suite.",
];

const signals = [
  { value: "10", label: "Pays d’intervention" },
  { value: "+20", label: "Projets réalisés" },
  { value: "100%", label: "Satisfaction client" },
];

export default function Home() {
  return (
    <div className="bg-white text-[#111a4d]">
      <Header overlay />
      <main>
        <Hero />
        <Signals />
        <TechMarquee />
        <Enjeux />
        <Presentation />
        <Metiers />
        <Realisations />
        <Methode />
        <Benefices />
        <Engagement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#080d2d] pb-[200px] text-white">
      <HeroVideo />
      <div className="pointer-events-none absolute inset-0 bg-[#080d2d]/30" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(242,140,30,0.18), transparent 28%), radial-gradient(circle at 80% 20%, rgba(31,36,102,0.45), transparent 32%)",
        }}
        aria-hidden
      />
      <div className="relative z-10">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-6 px-5 pt-[200px] text-left md:px-12 xl:px-[88px]">
          <h1 className="hero-title type-title w-full max-[639px]:!text-[min(3rem,calc((100vw-2.5rem)/7.3))] max-[639px]:!leading-[1.05] min-[640px]:max-xl:!text-[min(4.75rem,calc((100vw-6rem)/16.4))] xl:!text-[min(4.75rem,calc((min(100vw,1440px)-11rem)/16.4))]">
            <span className="max-[639px]:whitespace-normal min-[640px]:whitespace-nowrap">
              Votre partenaire pour une
            </span>
            <br />
            <span className="max-[639px]:whitespace-normal min-[640px]:whitespace-nowrap text-[#ff9f1a]">
              transformation numérique
            </span>
            <br />
            <span className="max-[639px]:whitespace-normal min-[640px]:whitespace-nowrap">
              maîtrisée
            </span>
          </h1>
          <p className="hero-follow max-w-[732px] text-base leading-[1.65] text-white">
            Axium Group conçoit, sécurise et opère les écosystèmes numériques qui
            accélèrent durablement les organisations, du Sénégal vers l’international.
          </p>
          <div className="hero-follow flex flex-col gap-3.5 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#ff9f1a] px-3.5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] text-white"
            >
              Parlons de votre projet
              <IconSlot src="/figma/arrow-up-right.svg" className="size-[18px]" />
            </a>
            <a
              href="#metiers"
              className="inline-flex min-h-11 items-center justify-center gap-2 text-sm text-white"
            >
              Découvrir nos expertises
              <IconSlot src="/figma/arrow-down.svg" className="size-[17px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signals() {
  return (
    <section className="bg-[#080d2d] px-5 py-8 text-white md:px-12 xl:px-[88px]">
      <div className="mx-auto flex max-w-[1264px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <p className="reveal max-w-[14rem] text-sm leading-[1.45] text-[#9da6cf]">
          Une vision globale, une exécution de proximité
        </p>
        <SignalCounters items={signals} />
      </div>
    </section>
  );
}

function Enjeux() {
  return (
    <section id="enjeux" className="bg-white px-5 py-12 md:px-12 lg:py-14 xl:px-[88px]">
      <div className="mx-auto grid max-w-[1264px] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-stretch lg:gap-12">
        <div>
          <div className="reveal">
            <p className="kicker">Vos enjeux</p>
            <h2 className="type-title mt-3 max-w-[18ch] text-[#111a4d]">
              Transformer la complexité en avantage durable.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.5] text-[#67708f]">
              Le numérique doit simplifier l’activité, protéger les opérations et ouvrir
              de nouveaux leviers de croissance, pas créer une couche de complexité
              supplémentaire.
            </p>
          </div>
          <ul className="reveal-stagger mt-6 space-y-6">
            {enjeux.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <IconSlot src={item.icon} className="size-14 shrink-0" />
                <div>
                  <h3 className="text-lg leading-[1.2] font-semibold tracking-[-0.03em] text-[#111a4d]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-[15px] leading-[1.5] text-[#67708f]">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-[350px] lg:mx-0 lg:h-auto lg:w-auto lg:max-w-none lg:self-stretch lg:aspect-[984/1064] lg:justify-self-end">
          <img
            alt="Collaborateur souriant devant son ordinateur portable"
            src="/enjeux/photo.png"
            className="h-auto w-full object-contain object-top lg:absolute lg:inset-0 lg:h-full lg:w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Presentation() {
  return (
    <section id="groupe" className="bg-[#111a4d] px-5 py-14 text-white md:px-12 lg:py-16 xl:px-[88px]">
      <div className="mx-auto grid max-w-[1264px] items-start gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14">
        <div className="reveal">
          <p className="kicker">Notre identité</p>
          <h2 className="type-title mt-3 max-w-[16ch]">
            Une vision groupe. Une exécution digitale intégrée.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-[1.5] text-[#b9c0e0]">
            De la stratégie à l’usage, Axium Group, Axium Digital et Axium Bank forment une
            chaîne de valeur cohérente au service des organisations africaines et internationales.
          </p>
          <a
            href="/groupe"
            className="mt-6 inline-flex min-h-11 items-center gap-2 bg-[#ff9f1a] px-3.5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] text-white"
          >
            Découvrir notre histoire
            <IconSlot src="/figma/arrow-right-sm.svg" className="size-4" />
          </a>
        </div>

        <div className="reveal-stagger grid gap-8 border-white/15 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-white/15">
          <article className="lg:pr-7">
            <h3>
              <BrandLogo brand="group" />
            </h3>
            <p className="mt-3 text-[15px] leading-[1.5] text-[#b9c0e0]">
              Le partenaire stratégique qui aligne vision, gouvernance et capacités
              technologiques pour conduire la transformation dans la durée.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-[#e8eaf5]">
              {[
                "Conseil de direction et feuille de route",
                "Architecture, réseau et cybersécurité",
                "Pilotage de programmes et performance",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article id="digital" className="lg:px-7">
            <h3>
              <BrandLogo brand="digital" tone="light" />
            </h3>
            <p className="mt-3 text-[15px] leading-[1.5] text-[#b9c0e0]">
              Le moteur d’exécution qui imagine et déploie les produits, plateformes et
              expériences numériques au service des métiers.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-[#e8eaf5]">
              {[
                "Web, mobile et plateformes métier",
                "Data, automatisation et intelligence artificielle",
                "Fintech, digitalisation et expérience client",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href="/digital"
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#ff9f1a]"
            >
              Voir Axium Digital
              <IconSlot src="/figma/arrow-amber.svg" className="size-3.5" />
            </a>
          </article>
          <article id="bank" className="lg:pl-7">
            <h3>
              <BrandLogo brand="bank" tone="light" />
            </h3>
            <p className="mt-3 text-[15px] leading-[1.5] text-[#b9c0e0]">
              La marque dédiée aux acteurs financiers : parcours digitaux, conformité et
              innovation Fintech, dans le cadre d’Axium Group.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-[#e8eaf5]">
              {[
                "Parcours clients et paiements digitaux",
                "Conformité, KYC et sécurité renforcée",
                "Open banking et API financières",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function Metiers() {
  return (
    <section id="metiers" className="bg-white px-5 py-12 md:px-12 lg:px-[88px] lg:py-14">
      <div className="mx-auto max-w-[1260px]">
        <div className="reveal grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div>
            <p className="kicker">Nos métiers clés</p>
            <h2 className="type-title mt-3 max-w-[16ch] text-[#111a4d]">
              Six expertises pour accélérer votre activité.
            </h2>
          </div>
          <div>
            <p className="text-[15px] leading-[1.55] text-[#67708f]">
              Conseil, produits digitaux, réseau et cybersécurité, data et IA, banque
              et fintech, formation : nous concevons et opérons les capacités qui
              sécurisent, digitalisent et accélèrent votre organisation.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-5">
              <a
                href="/expertises"
                className="inline-flex min-h-11 items-center gap-2 bg-[#ff9f1a] px-3.5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] text-white"
              >
                Voir toutes les expertises
                <IconSlot src="/figma/arrow-right-sm.svg" className="size-4" />
              </a>
              <a href="#contact" className="text-sm font-semibold text-[#111a4d]">
                Parler à nos experts
              </a>
            </div>
          </div>
        </div>
        <ol className="reveal-stagger mt-8 grid gap-6 lg:grid-cols-3">
          {metiers.map((metier) => (
            <li
              key={metier.title}
              className="metier-card border-t border-[#e7e9f2] pt-5 transition-transform duration-300"
            >
              <IconSlot src={metier.icon} className="size-14" />
              <h3 className="mt-4 text-[1.45rem] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111a4d]">
                {metier.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-[#67708f]">{metier.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Realisations() {
  return (
    <section id="realisations" className="bg-white px-5 py-12 md:px-12 lg:px-[88px] lg:py-14">
      <div className="mx-auto max-w-[1264px]">
        <div className="reveal">
          <p className="kicker">Réalisations</p>
          <h2 className="type-title mt-3 max-w-[18ch] text-[#111a4d]">
            Des projets qui prouvent l’exécution.
          </h2>
        </div>
        <div className="reveal-stagger mt-8 grid gap-8 md:grid-cols-2">
          {realisations.map((item) => (
            <article
              key={item.name}
              className="flex flex-col gap-4 border-t border-[#e7e9f2] pt-5"
            >
              <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#151a4a]">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width={1852}
                  height={977}
                  className="max-h-full max-w-full object-contain object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-[1.45rem] font-semibold tracking-[-0.03em] text-[#111a4d]">
                {item.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Methode() {
  return (
    <section id="methode" className="bg-[#080d2d] px-5 py-12 text-white md:px-12 lg:px-[88px] lg:py-14">
      <div className="mx-auto grid max-w-[1264px] gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
        <div className="reveal">
          <p className="kicker">Notre méthode</p>
          <h2 className="type-title mt-3">
            Avancer avec clarté, de la vision à l’usage.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-[1.55] text-[#bfc5e3]">
            Une démarche structurée, collaborative et progressive. Chaque décision reste
            reliée aux objectifs métier, aux risques et à l’adoption par les équipes.
          </p>
          <p className="mt-6 text-xl leading-[1.15] font-semibold tracking-[-0.03em]">
            Discuter de votre feuille de route
          </p>
          <p className="mt-3 max-w-sm text-[15px] leading-[1.5] text-[#bfc5e3]">
            Un échange rapide pour cadrer vos enjeux, identifier les priorités et
            définir une première trajectoire.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a
              href="/methode"
              className="inline-flex min-h-11 items-center gap-2 bg-[#ff9f1a] px-3.5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] text-white"
            >
              Découvrir la méthode
              <IconSlot src="/figma/arrow-right-sm.svg" className="size-4" />
            </a>
            <a href="#contact" className="text-sm font-semibold text-white">
              Prendre rendez-vous
            </a>
          </div>
        </div>
        <ol className="reveal-stagger">
          {steps.map((step) => (
            <li key={step.title} className="border-t border-white/10 py-5">
              <p className="text-[11px] tracking-[0.16em] text-[#ff9f1a] uppercase">{step.n}</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{step.title}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-[1.55] text-[#b9c0e0]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Benefices() {
  return (
    <section className="bg-white px-5 py-12 md:px-12 lg:px-[88px] lg:py-14">
      <div className="mx-auto max-w-[1264px]">
        <div className="reveal grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <p className="kicker">Ce qui change</p>
            <h2 className="type-title mt-3 max-w-[16ch] text-[#111a4d]">
              Une transformation qui se voit dans l’activité.
            </h2>
          </div>
          <div>
            <p className="max-w-md text-[15px] leading-[1.5] text-[#67708f]">
              Nous privilégions des indicateurs utiles : qualité de service, maîtrise des
              risques, fluidité des parcours et capacité des équipes à agir.
            </p>
            <p className="mt-4 text-[11px] tracking-[0.14em] text-[#67708f] uppercase">
              Indicateurs définis avec vous
            </p>
            <p className="mt-1 text-sm text-[#111a4d]">
              {["Usage", "Disponibilité", "Délais", "Qualité", "Sécurité"].join("  ·  ")}
            </p>
          </div>
        </div>
        <dl className="reveal-stagger mt-8 grid border-t border-[#e7e9f2] sm:grid-cols-2">
          {benefits.map((item) => (
            <div key={item.title} className="border-b border-[#e7e9f2] py-4 sm:px-6 sm:odd:pl-0 sm:even:pr-0">
              <dt className="text-lg font-semibold tracking-[-0.02em] text-[#111a4d]">{item.title}</dt>
              <dd className="mt-1 max-w-md text-[15px] leading-[1.5] text-[#67708f]">{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Engagement() {
  return (
    <section id="engagement" className="bg-[#ff9f1a] text-[#111a4d]">
      <div className="reveal mx-auto grid max-w-[1440px] items-end gap-8 px-5 pt-12 md:px-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-12 lg:pt-14 lg:pr-[72px] lg:pl-[88px]">
        <img
          alt="Aminata Bineta Bibi NIANG DIOP, CEO d’Axium Group"
          src="/figma/founder.png"
          className="order-2 block h-auto w-full self-end object-contain object-bottom lg:order-1"
        />
        <div className="order-1 pb-2 lg:order-2 lg:pb-14">
          <p className="text-[11px] font-medium tracking-[0.18em] text-[#111a4d] uppercase">Notre engagement</p>
          <blockquote className="mt-5 border-l-2 border-[#111a4d] pl-5">
            <p className="text-[clamp(1.35rem,2.2vw,1.85rem)] leading-[1.4] font-medium tracking-[-0.02em] italic">
              « La technologie n’a de valeur que lorsqu’elle renforce celles et ceux qui l’utilisent. »
            </p>
            <footer className="mt-4 text-[15px] font-semibold text-[#2a356c] not-italic">
              Aminata Bineta Bibi NIANG DIOP, CEO AXIUM Group
            </footer>
          </blockquote>
          <p className="mt-4 max-w-lg text-[15px] leading-[1.55]">
            Axium inscrit chaque mission dans une logique de confiance, de transfert et de
            progrès mesurable, au service des organisations et de leur écosystème.
          </p>
          <div className="mt-6 space-y-4">
            {principles.map((item) => (
              <div key={item.title}>
                <p className="text-xl font-semibold tracking-[-0.03em]">{item.title}</p>
                <p className="mt-1 max-w-md text-sm leading-[1.5]">{item.text}</p>
              </div>
            ))}
          </div>
          <a
            href="/engagement"
            className="mt-6 inline-flex min-h-11 items-center gap-2 bg-[#111a4d] px-3.5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] text-white"
          >
            Découvrir notre engagement
            <IconSlot src="/figma/arrow-right-sm.svg" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[#080d2d] px-5 py-12 text-white md:px-12 lg:px-[88px] lg:py-14">
      <div className="reveal mx-auto grid max-w-[1264px] gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
        <div>
          <h2 className="type-title">Parlons de votre projet</h2>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.55] text-[#b9c0e0]">
            Décrivez votre besoin et nos équipes vous recontacteront rapidement pour
            qualifier votre demande et vous proposer une première orientation.
          </p>
          <div className="mt-8 max-w-3xl">
            <ContactForm />
          </div>
        </div>
        <aside className="lg:pt-2">
          <p className="kicker">Informations utiles</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">Qualifier votre demande</h3>
          <p className="mt-4 text-sm leading-[1.55] text-[#b9c0e0]">
            Les informations ci-dessous nous aident à orienter votre demande vers
            l’équipe la plus pertinente et à préparer un premier retour adapté à votre
            contexte.
          </p>
          <ul className="mt-6 space-y-4">
            {checks.map((item) => (
              <li key={item} className="text-sm leading-[1.5] text-[#b9c0e0]">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-[11px] tracking-[0.16em] text-[#ff9f1a] uppercase">Réponse</p>
          <p className="mt-2 text-5xl font-semibold tracking-[-0.05em]">48h</p>
          <p className="mt-2 text-sm text-[#b9c0e0]">ouvrées maximum</p>
          <p className="mt-4 text-sm leading-[1.5] text-[#b9c0e0]">
            Une équipe Axium analyse votre demande, valide les priorités et vous
            propose un premier rendez-vous pour affiner le périmètre et les prochaines
            étapes.
          </p>
        </aside>
      </div>
    </section>
  );
}
