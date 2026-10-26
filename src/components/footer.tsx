import { IconSlot, Wordmark } from "@/components/wordmark";
import { brand } from "@/lib/site";

const axiumLinks = [
  { href: "/groupe", label: "Le Groupe" },
  { href: "/digital", label: "Axium Digital" },
  { href: "/expertises", label: "Expertises" },
  { href: "/methode", label: "Méthode" },
  { href: "/engagement", label: "Engagement" },
];

export function Footer() {
  return (
    <footer className="bg-[#060a24] px-5 pt-12 pb-8 text-white md:px-12 xl:px-[88px]">
      <div className="mx-auto max-w-[1264px]">
        <img
          alt="Axium"
          src="/figma/footer-union.svg"
          className="mx-auto h-auto w-full max-w-[1106px]"
        />
      </div>
      <div className="reveal mx-auto mt-10 flex max-w-[1264px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-[420px]">
          <Wordmark size="footer" />
          <p className="mt-6 max-w-xs text-[15px] leading-[1.5] text-[#9da6cf]">
            Transformer avec maîtrise. Concevoir avec exigence. Transmettre pour durer.
          </p>
          <p className="mt-3 max-w-sm text-sm leading-[1.5] text-[#70799f]">
            Ingénierie, conseil & innovation numérique · Sénégal · Afrique · International
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-x-16">
          <div className="flex min-w-0 flex-col gap-3">
            <p className="kicker">Axium</p>
            {axiumLinks.map((item) => (
              <a key={item.href} href={item.href} className="text-[15px] break-words text-[#d4d8ed]">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex min-w-0 flex-col gap-3">
            <p className="kicker">Contact</p>
            <a href="https://axiumgroup.org" className="text-[15px] break-words text-[#d4d8ed]">
              axiumgroup.org
            </a>
            <a href={`mailto:${brand.email}`} className="text-[15px] break-all text-[#d4d8ed]">
              {brand.email}
            </a>
            <a href={brand.whatsappHref} className="text-[15px] text-[#d4d8ed]">
              {brand.whatsappDisplay}
            </a>
            <p className="text-[15px] text-[#9da6cf]">Dakar · Sénégal</p>
          </div>
          <div className="flex min-w-0 flex-col gap-3">
            <p className="kicker">Suivre</p>
            <a
              href={brand.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-[9px] text-[15px] text-[#d4d8ed]"
            >
              <IconSlot src="/figma/linkedin.svg" className="size-[17px]" />
              LinkedIn
            </a>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-[9px] text-[15px] text-[#d4d8ed]"
            >
              <span className="inline-flex size-[17px] items-center justify-center text-[11px] font-bold">
                IG
              </span>
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1264px] flex-col gap-3 pt-6 text-[11px] text-[#70799f] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Axium Group. Tous droits réservés.</p>
        <div className="flex gap-6">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/confidentialite">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
