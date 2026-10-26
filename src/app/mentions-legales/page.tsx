import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales d’Axium Group : identification, contacts et direction de publication.",
};

export default function MentionsPage() {
  return (
    <div className="bg-white text-[#111a4d]">
      <Header tone="solid" />
      <main className="mx-auto max-w-3xl px-5 py-16 md:px-12">
        <p className="text-xs font-bold text-[#ff9f1a] uppercase">Axium Group</p>
        <h1 className="mt-4 text-4xl font-bold">Mentions légales</h1>
        <div className="mt-8 space-y-4 text-base leading-7 text-[#67708f]">
          <p>
            <strong className="text-[#111a4d]">Raison sociale :</strong> {brand.legalName}
          </p>
          <p>
            <strong className="text-[#111a4d]">Forme juridique :</strong> à confirmer (SAS ou SASU)
          </p>
          <p>
            <strong className="text-[#111a4d]">Siège social :</strong> adresse à Dakar, à confirmer
          </p>
          <p>
            <strong className="text-[#111a4d]">NINEA :</strong> {brand.ninea}
          </p>
          <p>
            <strong className="text-[#111a4d]">RCCM :</strong> {brand.rccm}
          </p>
          <p>
            <strong className="text-[#111a4d]">Directrice de publication :</strong>{" "}
            {brand.founder.name}, {brand.founder.role}
          </p>
          <p>
            <strong className="text-[#111a4d]">Contact :</strong>{" "}
            <a href={`mailto:${brand.email}`} className="text-[#111a4d] underline">
              {brand.email}
            </a>
            . WhatsApp : {brand.whatsappDisplay}. Site : {brand.siteLabel}.
          </p>
          <p>
            Axium Digital est une filiale d’Axium Group dédiée aux produits et
            plateformes numériques.
          </p>
          <p>© {brand.year} Axium Group. Tous droits réservés.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
