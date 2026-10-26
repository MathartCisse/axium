export const brand = {
  name: "Axium",
  legalName: "Axium Group",
  digital: "Axium Digital",
  eyebrow: "Sénégal · Afrique · International",
  tagline: "Votre partenaire pour une transformation numérique maîtrisée",
  summary:
    "Conseil, infrastructure, cybersécurité, cloud, data et fintech pour les entreprises du Sénégal, d’Afrique et de l’international.",
  site: "https://axiumgroup.org",
  siteLabel: "axiumgroup.org",
  email: "contact@axiumgroup.org",
  whatsappDisplay: "+33 7 55 91 74 07",
  whatsappHref: "https://wa.me/33755917407",
  linkedin: "https://www.linkedin.com/company/axiumgroup1",
  instagram: "https://www.instagram.com/axium__group",
  ninea: "012358520",
  rccm: "SN DKR 2025 B 29678",
  founder: {
    name: "Aminata Bineta Bibi NIANG DIOP",
    role: "Présidente",
    email: "aminata.niang2400@gmail.com",
  },
  year: "2026",
} as const;

export const nav = [
  { href: "/groupe", label: "Groupe" },
  { href: "/expertises", label: "Expertises" },
  { href: "/methode", label: "Méthode" },
  { href: "/engagement", label: "Engagement" },
] as const;

export const about = {
  kicker: "Qui sommes-nous",
  title: "Du Sénégal à l’international, une expertise sans frontières.",
  body: "Axium Group est une entreprise de transformation numérique ancrée au Sénégal, active dans toute l’Afrique et à l’international. Nous concevons, déployons et maintenons les solutions IT qui font tourner les entreprises au quotidien, avec les exigences des grands groupes internationaux.",
  group:
    "Conseil, infrastructure, cybersécurité, cloud, ERP, data et formation pour les entreprises de toutes tailles.",
  digital:
    "Notre filiale dédiée au digital : sites, applications et plateformes, avec un pôle Banque & Fintech pour les acteurs financiers.",
  commitment:
    "Des solutions adaptées à chaque marché, du Sénégal au reste du monde : mobile money, connectivité, énergie et budgets maîtrisés.",
};

export const enjeux = [
  {
    title: "Pannes et coupures",
    text: "Réseau instable, délestages, matériel mal entretenu : l’activité s’arrête.",
  },
  {
    title: "Piratages et pertes de données",
    text: "Arnaques, comptes piratés, fichiers perdus faute de sauvegarde.",
  },
  {
    title: "Gestion sur cahier et Excel",
    text: "Stocks, ventes et factures difficiles à suivre : erreurs et pertes.",
  },
  {
    title: "Peu de visibilité en ligne",
    text: "Vos clients cherchent sur Google et Instagram sans vous trouver.",
  },
  {
    title: "Décisions à l’aveugle",
    text: "Pas de chiffres fiables pour piloter ventes et trésorerie.",
  },
  {
    title: "Équipes peu outillées",
    text: "Des outils sous-utilisés faute de formation et d’accompagnement.",
  },
] as const;

export const conviction = {
  kicker: "Notre conviction",
  title: "Le numérique n’est pas un luxe réservé aux grandes entreprises.",
  text: "Chez Axium, nous rendons la technologie accessible, utile et rentable pour chaque entreprise, au Sénégal, en Afrique et à l’international.",
};

export type ServiceMode =
  | "Ponctuel"
  | "Récurrent"
  | "Ponctuel + récurrent"
  | "Sur devis"
  | "Axium Digital";

export type Service = {
  id: string;
  index: string;
  mode: ServiceMode;
  title: string;
  lead: string;
  offers: { title: string; text: string }[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    id: "web",
    index: "01",
    mode: "Ponctuel",
    title: "Développement Web & Mobile",
    lead: "Votre vitrine ouverte 24h/24 : nous créons votre présence en ligne de A à Z.",
    offers: [
      {
        title: "Sites vitrines & portfolios",
        text: "Site professionnel et responsive, optimisé pour Google, avec hébergement, nom de domaine et e-mails pro.",
      },
      {
        title: "E-commerce & applications mobiles",
        text: "Boutique en ligne avec paiement mobile money et carte bancaire internationale ; applications Android et iOS.",
      },
    ],
    outcomes: [
      "Vos clients vous trouvent sur Google, même boutique fermée",
      "Vous vendez au Sénégal, en Afrique et à l’international",
      "Une image sérieuse qui rassure clients et partenaires",
      "Des adresses @votreentreprise au lieu d’un Gmail",
    ],
  },
  {
    id: "audit",
    index: "02",
    mode: "Ponctuel",
    title: "Audit IT & Conseil stratégique",
    lead: "Un regard d’expert sur votre informatique et une feuille de route claire pour avancer.",
    offers: [
      {
        title: "Audit IT & transformation digitale",
        text: "Diagnostic de l’existant, blocages, risques et opportunités, puis un plan de modernisation étape par étape.",
      },
      {
        title: "Gestion de projets IT / PMO",
        text: "Pilotage complet : planning, coordination des équipes, reporting et livraison dans les délais (Agile, Scrum).",
      },
    ],
    outcomes: [
      "Vous savez où vous en êtes et quoi traiter en priorité",
      "Vous investissez au bon endroit, sans dépenses inutiles",
      "Vos projets sont livrés à temps et dans le budget",
      "Un rapport clair, lisible par la direction",
    ],
  },
  {
    id: "reseau",
    index: "03",
    mode: "Ponctuel + récurrent",
    title: "Réseau, infrastructure & cybersécurité",
    lead: "Un réseau fiable et une entreprise protégée contre les cyberattaques.",
    offers: [
      {
        title: "Architecture réseau & infrastructure",
        text: "Réseau local, serveurs, Wi-Fi professionnel, câblage, switches, routeurs et accès internet sécurisé.",
      },
      {
        title: "Cybersécurité",
        text: "Pare-feu, VPN, protection des e-mails, sauvegardes automatiques, audits de sécurité et conformité.",
      },
    ],
    outcomes: [
      "Moins de coupures, une connexion stable pour toute l’équipe",
      "Vos données clients et financières restent protégées",
      "Le travail à distance se fait en sécurité",
      "Vous êtes prêt face aux exigences de conformité",
    ],
  },
  {
    id: "cloud",
    index: "04",
    mode: "Récurrent",
    title: "Cloud & Infogérance IT",
    lead: "Travaillez de partout et confiez-nous la gestion de votre informatique.",
    offers: [
      {
        title: "Cloud & Microsoft 365",
        text: "Migration vers le cloud : Teams, Outlook, SharePoint, OneDrive, Office en ligne et Azure.",
      },
      {
        title: "Infogérance & support IT",
        text: "Votre service informatique externalisé : maintenance préventive, helpdesk, supervision et SLA garanti.",
      },
    ],
    outcomes: [
      "Vos fichiers accessibles partout, sur ordinateur et téléphone",
      "Pas besoin de recruter un informaticien à temps plein",
      "Un problème ? Un interlocuteur qui répond vite",
      "Un coût mensuel fixe et prévisible",
    ],
  },
  {
    id: "erp",
    index: "05",
    mode: "Ponctuel",
    title: "ERP, gestion & portails B2B",
    lead: "Toute votre gestion dans un seul outil : fini les cahiers et les fichiers dispersés.",
    offers: [
      {
        title: "ERP & gestion centralisée",
        text: "Stocks, ventes, achats, facturation, CRM, comptabilité et reporting avec Odoo, ERPNext ou sur mesure.",
      },
      {
        title: "Portails B2B",
        text: "Vos distributeurs et clients pros commandent en ligne, suivent leurs livraisons et gèrent leur compte.",
      },
    ],
    outcomes: [
      "Stock et ventes visibles en temps réel",
      "Moins d’erreurs, de pertes et de vols de marchandise",
      "Les commandes pros arrivent sans passer par le téléphone",
      "Des factures propres, envoyées et suivies",
    ],
  },
  {
    id: "data",
    index: "06",
    mode: "Ponctuel",
    title: "Data, BI & intelligence artificielle",
    lead: "Transformez vos chiffres en décisions.",
    offers: [
      {
        title: "Business intelligence & dashboards",
        text: "Tableaux de bord clairs (Power BI, Metabase), indicateurs clés et rapports automatiques.",
      },
      {
        title: "Data, analytics & IA",
        text: "Collecte, entrepôt de données et analyses de tendances. Chatbots, traitement de documents et devis automatiques.",
      },
    ],
    outcomes: [
      "Vous pilotez avec des chiffres fiables, pas à l’intuition",
      "Vous anticipez fêtes, saisons et rentrée",
      "Vos équipes gagnent des heures chaque semaine",
      "Vos clients obtiennent une réponse immédiate",
    ],
  },
  {
    id: "secteur",
    index: "07",
    mode: "Sur devis",
    title: "Digitalisation & accompagnement sectoriel",
    lead: "Un programme complet, adapté aux réalités de chaque marché : Sénégal, Afrique et international.",
    offers: [
      {
        title: "Digitalisation des entreprises",
        text: "Audit, stratégie, déploiement des solutions, formation des équipes et suivi après la mise en place.",
      },
      {
        title: "Industries, PME et secteurs exigeants",
        text: "Solutions métier, intégration aux systèmes existants, conformité et sécurité renforcée.",
      },
    ],
    outcomes: [
      "Un seul partenaire, du diagnostic jusqu’au suivi",
      "Des solutions pensées pour votre secteur",
      "Une transition progressive, sans bloquer l’activité",
      "Des équipes autonomes sur leurs nouveaux outils",
    ],
  },
  {
    id: "fintech",
    index: "08",
    mode: "Axium Digital",
    title: "Banque & Fintech",
    lead: "Avec Axium Digital, nous accompagnons les acteurs financiers dans leurs projets numériques.",
    offers: [
      {
        title: "Banques & microfinance",
        text: "Digitalisation des parcours clients, portails en ligne, sécurisation des systèmes et conformité.",
      },
      {
        title: "Fintech & paiements digitaux",
        text: "Intégration mobile money (Wave, Orange Money), API de paiement et applications financières sécurisées.",
      },
    ],
    outcomes: [
      "Des parcours clients modernes, du mobile à l’agence",
      "Des systèmes sécurisés selon les standards bancaires",
      "Des paiements digitaux intégrés à vos services",
      "Une équipe rompue aux environnements bancaires internationaux",
    ],
  },
  {
    id: "formation",
    index: "09",
    mode: "Sur devis",
    title: "Formation & montée en compétences",
    lead: "Des équipes formées utilisent vraiment les outils dans lesquels vous investissez.",
    offers: [
      {
        title: "Formations & ateliers techniques",
        text: "Cybersécurité, Microsoft 365, ERP, IA, transformation digitale : sur site ou à distance, supports inclus.",
      },
      {
        title: "Sensibilisation des équipes",
        text: "Reconnaître les arnaques, protéger ses mots de passe, bien utiliser les outils au quotidien.",
      },
    ],
    outcomes: [
      "Des équipes plus autonomes et plus productives",
      "Moins d’erreurs humaines, porte d’entrée des piratages",
      "Un contenu adapté à votre secteur et à votre niveau",
      "Un meilleur retour sur vos investissements IT",
    ],
  },
];

export const serviceFilters = [
  "Tous",
  "Ponctuel",
  "Récurrent",
  "Sur devis",
  "Axium Digital",
] as const;

export type ServiceFilter = (typeof serviceFilters)[number];

export function serviceMatchesFilter(service: Service, filter: ServiceFilter) {
  if (filter === "Tous") return true;
  if (filter === "Ponctuel") return service.mode.includes("Ponctuel");
  if (filter === "Récurrent") return service.mode.includes("Récurrent");
  return service.mode === filter;
}

export const sectors = [
  {
    title: "Commerces & boutiques",
    items: [
      "Boutique en ligne et mobile money",
      "Caisse et gestion de stock",
      "Site vitrine et Google Maps",
    ],
  },
  {
    title: "Salons de beauté",
    items: [
      "Réservation en ligne des rendez-vous",
      "Fichier clientes et fidélité",
      "Vitrine et réseaux sociaux",
    ],
  },
  {
    title: "PME & services",
    items: ["ERP et facturation", "Microsoft 365 et e-mails pro", "Support IT mensuel"],
  },
  {
    title: "Grandes entreprises",
    items: ["Audit et cybersécurité", "Infrastructure et cloud", "BI, IA et formation"],
  },
] as const;

export const continuity = [
  {
    title: "Énergie & continuité IT",
    text: "Onduleurs, solutions solaires et supervision pour garder vos équipements en ligne pendant les coupures de courant.",
    for: "Commerces, bureaux, cliniques",
  },
  {
    title: "Sauvegarde externalisée",
    text: "Copie automatique de vos données hors site et remise en route rapide après une panne, un vol ou un piratage.",
    for: "Toutes les entreprises",
  },
  {
    title: "Vidéosurveillance & accès",
    text: "Caméras IP consultables sur téléphone, badges d’accès et registre des visiteurs pour vos locaux.",
    for: "Boutiques, entrepôts, sièges",
  },
  {
    title: "Assistance IT par abonnement",
    text: "Un forfait mensuel accessible aux TPE : dépannage à distance, visites sur site et conseils.",
    for: "TPE, salons, cabinets",
  },
] as const;

export const commerce = [
  {
    title: "Paiement mobile intégré",
    text: "Mobile money (Wave, Orange Money, M-Pesa…), cartes et paiements internationaux intégrés à vos outils.",
    for: "Commerces, écoles, e-commerce",
  },
  {
    title: "Caisse & stock en cloud",
    text: "Une caisse sur tablette ou téléphone reliée au stock, avec le chiffre du jour en temps réel.",
    for: "Boutiques, restaurants, pharmacies",
  },
  {
    title: "Réservation & fidélité",
    text: "Rendez-vous en ligne, rappels automatiques, acomptes et programme de fidélité clients.",
    for: "Salons, cliniques, garages",
  },
  {
    title: "Facturation & relances",
    text: "Devis, factures et relances de paiement automatisés pour réduire les impayés.",
    for: "PME, prestataires, grossistes",
  },
] as const;

export const formulas = [
  {
    name: "Ponctuel",
    lead: "Un projet, un livrable, un prix fixé à l’avance.",
    items: ["Site web", "Audit IT", "Installation ERP"],
  },
  {
    name: "Récurrent",
    lead: "Un abonnement mensuel pour un service continu, sans surprise.",
    items: ["Infogérance", "Cloud", "Cybersécurité", "Réseau", "Assistance IT"],
    featured: true,
  },
  {
    name: "Sur mesure",
    lead: "Un programme d’accompagnement construit avec vous.",
    items: ["Digitalisation", "Banque & fintech", "Formation"],
  },
] as const;

export const steps = [
  {
    index: "01",
    title: "Diagnostic",
    text: "Nous comprenons votre activité, vos contraintes et vos objectifs.",
  },
  {
    index: "02",
    title: "Proposition",
    text: "Une offre détaillée, un planning et un budget sans surprise.",
  },
  {
    index: "03",
    title: "Déploiement",
    text: "Mise en place par nos experts, sans interrompre votre activité.",
  },
  {
    index: "04",
    title: "Formation",
    text: "Vos équipes prennent en main leurs nouveaux outils.",
  },
  {
    index: "05",
    title: "Suivi",
    text: "Maintenance, assistance et amélioration continue.",
  },
] as const;

export const reasons = [
  {
    title: "Standards internationaux",
    text: "Des méthodes et des exigences issues de projets IT menés pour de grands groupes, notamment bancaires.",
  },
  {
    title: "Du Sénégal à l’international",
    text: "Des solutions nées au Sénégal, déployées en Afrique et à l’international.",
  },
  {
    title: "Un seul interlocuteur",
    text: "Du conseil à la maintenance, une équipe qui couvre toute la chaîne IT.",
  },
  {
    title: "Transparence",
    text: "Des offres claires, des tarifs en FCFA, EUR, USD ou votre devise, et un suivi régulier.",
  },
] as const;
