import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Motion } from "@/components/motion";
import { WhatsappFloat } from "@/components/whatsapp-float";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axium-three.vercel.app"),
  title: {
    default: "Axium Group | Ingénierie IT, cybersécurité et transformation numérique au Sénégal",
    template: "%s | Axium Group",
  },
  description:
    "Axium Group conçoit, sécurise et opère les écosystèmes numériques qui accélèrent durablement les organisations, du Sénégal vers l’international.",
  openGraph: {
    title: "Axium Group | Ingénierie IT, cybersécurité et transformation numérique au Sénégal",
    description:
      "Axium Group conçoit, sécurise et opère les écosystèmes numériques qui accélèrent durablement les organisations, du Sénégal vers l’international.",
    url: "https://axium-three.vercel.app",
    siteName: "Axium Group",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/hero/poster.jpg", width: 1200, height: 630, alt: "Axium Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axium Group | Transformation numérique maîtrisée",
    description:
      "Ingénierie IT, cybersécurité et transformation numérique au Sénégal, en Afrique et à l’international.",
    images: ["/hero/poster.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${sans.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-[#111a4d]">
        {children}
        <WhatsappFloat />
        <Motion />
      </body>
    </html>
  );
}
