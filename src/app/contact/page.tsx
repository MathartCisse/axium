import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { InteriorHero } from "@/components/interior-hero";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Écrire à Axium Group : WhatsApp, e-mail, LinkedIn, Instagram et formulaire. Une équipe répond sous 48h ouvrées.",
};

const channels = [
  {
    label: "WhatsApp",
    value: brand.whatsappDisplay,
    href: brand.whatsappHref,
    note: "Un message direct, lu par l’équipe commerciale.",
    external: true,
  },
  {
    label: "E-mail",
    value: brand.email,
    href: `mailto:${brand.email}`,
    note: "Pour un brief, un appel d’offres ou une pièce jointe.",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Axium Group",
    href: brand.linkedin,
    note: "Suivre l’actualité et les projets du groupe.",
    external: true,
  },
  {
    label: "Instagram",
    value: "@axium__group",
    href: brand.instagram,
    note: "La vie de l’équipe et les coulisses des missions.",
    external: true,
  },
  {
    label: "Ancrage",
    value: "Dakar · Sénégal",
    href: "/groupe",
    note: "Présents au Sénégal, actifs en Afrique et à l’international.",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white text-[#111a4d]">
      <InteriorHero
        current="/contact"
        eyebrow="Axium Group · Contacts"
        title="Parlons de votre projet."
        text="Décrivez votre besoin. Une équipe Axium qualifie la demande et vous propose une première orientation, sous 48h ouvrées une fois le message reçu."
        explore="Écrire à Axium ↓"
        exploreHref="#message"
        actionHref="#message"
        gradient="from-[#080d2d] to-[#111a4d]"
      />
      <main>
        <section className="bg-white py-20 text-[#111a4d] lg:py-28">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-12 xl:px-[88px]">
            <div className="reveal grid items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
              <div>
                <p className="kicker">Nous joindre</p>
                <h2 className="type-title mt-3">
                  Trois façons d’entrer en contact.
                </h2>
              </div>
              <p className="text-[15px] leading-[1.5] text-[#67708f]">
                WhatsApp, e-mail ou formulaire : le même interlocuteur, le même délai.
                Rien n’est envoyé tant que vous n’ouvrez pas votre messagerie.
              </p>
            </div>
            <div className="reveal-stagger mt-14">
              {channels.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="grid items-start gap-2 border-t border-[#e7e9f2] py-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-baseline lg:gap-12"
                >
                  <p className="text-[11px] tracking-[0.14em] text-[#ff9f1a] uppercase">{item.label}</p>
                  <p className="text-2xl font-semibold tracking-[-0.03em]">{item.value}</p>
                  <p className="text-sm leading-[1.5] text-[#67708f]">{item.note}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="message"
          className="bg-[#080d2d] py-20 text-white lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-12 xl:px-[88px]">
          <div className="reveal grid items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <h2 className="type-title">Écrire à Axium</h2>
            <p className="text-[15px] leading-[1.5] text-[#b9c0e0]">
              Les champs ci-dessous préparent un message à {brand.email}. Après
              validation, vous ouvrez l’e-mail ou WhatsApp au {brand.whatsappDisplay}.
            </p>
          </div>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
            <div>
              <div className="max-w-3xl">
                <ContactForm />
              </div>
            </div>
            <aside>
              <p className="kicker">Réponse</p>
              <p className="mt-4 text-6xl font-semibold tracking-[-0.05em]">48h</p>
              <p className="mt-2 text-sm text-[#b9c0e0]">ouvrées maximum</p>
              <p className="mt-5 text-sm leading-[1.5] text-[#b9c0e0]">
                Une équipe Axium analyse votre demande, valide les priorités et vous
                propose un premier rendez-vous pour affiner le périmètre.
              </p>
              <ul className="mt-8 space-y-2 text-sm text-[#b9c0e0]">
                {[
                  `WhatsApp ${brand.whatsappDisplay}`,
                  brand.email,
                  "Dakar, Sénégal",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
