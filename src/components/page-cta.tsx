import { IconSlot } from "@/components/wordmark";

export function PageCta() {
  return (
    <section className="bg-[#080d2d] py-24 text-white lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-12 xl:px-[88px]">
        <div className="reveal grid items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <p className="kicker">Construisons la suite</p>
            <h2 className="type-title mt-3 text-white">
              Votre transformation commence par un échange.
            </h2>
          </div>
          <div>
            <p className="text-[15px] leading-[1.5] text-[#b9c0e0]">
              Partagez votre contexte, vos enjeux et vos priorités. Nous préparons
              ensemble une première orientation adaptée à votre organisation.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#ff9f1a] px-3.5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] text-white"
              >
                Préparer un premier échange
                <IconSlot src="/figma/arrow-up-right.svg" className="size-[18px]" />
              </a>
              <a href="mailto:contact@axiumgroup.org" className="text-sm text-[#b9c0e0]">
                contact@axiumgroup.org
              </a>
              <p className="max-w-xs text-xs leading-[1.5] text-[#8ea0d4]">
                Une équipe Axium vous recontacte sous 48h ouvrées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
