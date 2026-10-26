import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  title: "Confidentialité",
  description:
    "Politique de confidentialité d’Axium Group : données du formulaire, usage et durée de conservation.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white text-[#111a4d]">
      <Header tone="solid" />
      <main className="mx-auto max-w-3xl px-5 py-16 md:px-12">
        <p className="text-xs font-bold text-[#ff9f1a] uppercase">Axium Group</p>
        <h1 className="mt-4 text-4xl font-bold">Confidentialité</h1>
        <div className="mt-8 space-y-4 text-base leading-7 text-[#67708f]">
          <p>
            Le formulaire de contact de ce site ne transmet rien à un serveur. Il prépare
            un message que vous envoyez vous-même par e-mail à {brand.email} ou
            par WhatsApp au {brand.whatsappDisplay}.
          </p>
          <p>
            <strong className="text-[#111a4d]">Données collectées :</strong> nom, e-mail
            professionnel, téléphone (optionnel), entreprise, secteur, objectif et message.
          </p>
          <p>
            <strong className="text-[#111a4d]">Usage :</strong> qualifier votre demande,
            vous recontacter et préparer un premier échange. Axium ne vend pas ces
            informations.
          </p>
          <p>
            <strong className="text-[#111a4d]">Durée de conservation :</strong> les messages
            reçus sont conservés le temps nécessaire au suivi commercial, puis archivés
            ou supprimés selon les besoins opérationnels, dans la limite de 24 mois sauf
            obligation légale contraire.
          </p>
          <p>
            Ce traitement s’inscrit dans le respect de la loi sénégalaise sur les données
            personnelles (CDP) et, pour les visiteurs européens, du RGPD. Pour une
            question relative à vos données, écrivez à {brand.email}.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
