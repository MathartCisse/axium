"use client";

import { useState } from "react";

import { brand } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  sector: string;
  objective: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  company: "",
  sector: "",
  objective: "",
  message: "",
};

const sectors = [
  "Banque & Fintech",
  "Commerce & distribution",
  "Services & PME",
  "Industrie",
  "Secteur public",
  "Autre",
];

const objectives = [
  "Déploiement",
  "Refonte",
  "Conseil",
  "Audit",
  "Formation",
  "Autre",
];

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = "Indiquez votre nom.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Indiquez une adresse e-mail valide.";
  }
  if (fields.phone.trim().length > 0 && fields.phone.trim().length < 8) {
    errors.phone = "Indiquez un numéro de téléphone valide.";
  }
  if (fields.company.trim().length < 2) errors.company = "Indiquez votre entreprise.";
  if (!fields.sector) errors.sector = "Sélectionnez un secteur.";
  if (!fields.objective) errors.objective = "Sélectionnez un objectif.";
  if (fields.message.trim().length < 12) {
    errors.message = "Décrivez votre besoin en quelques mots.";
  }
  return errors;
}

const labelClass = "text-xs font-bold tracking-normal text-[#b9c0e0] uppercase";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState<Fields | null>(null);

  function update<K extends keyof Fields>(key: K, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setReady(null);
      return;
    }
    setReady(fields);
  }

  if (ready) {
    const subject = encodeURIComponent(
      `Projet Axium, ${ready.company.trim()}`,
    );
    const body = encodeURIComponent(
      [
        "Bonjour Axium,",
        "",
        ready.message.trim(),
        "",
        `Secteur : ${ready.sector}`,
        `Objectif : ${ready.objective}`,
        ready.phone.trim() ? `Téléphone : ${ready.phone.trim()}` : null,
        "",
        ready.name.trim(),
        ready.company.trim(),
        ready.email.trim(),
      ]
        .filter(Boolean)
        .join("\n"),
    );
    const mailto = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    const whatsapp = `${brand.whatsappHref}?text=${encodeURIComponent(
      `Bonjour Axium, je suis ${ready.name.trim()} (${ready.company.trim()}). ${ready.message.trim()}${
        ready.phone.trim() ? ` Téléphone : ${ready.phone.trim()}.` : ""
      }`,
    )}`;

    return (
      <div className="border border-[#2a356c] bg-[#0d143d] p-6" role="status">
        <p className="text-2xl font-bold text-white">Votre demande est prête.</p>
        <p className="mt-3 text-sm leading-6 text-[#b9c0e0]">
          Cette page ne transmet rien toute seule. Ouvrez votre messagerie pour
          envoyer le message à {brand.email}, ou WhatsApp au {brand.whatsappDisplay}.
          Une équipe Axium répond sous 48h ouvrées une fois le message reçu.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={mailto}
            className="inline-flex h-12 min-h-11 items-center justify-center bg-[#ff9f1a] px-6 text-base font-bold text-white shadow-[0_10px_12px_rgba(255,159,26,0.2)]"
          >
            Ouvrir l’e-mail
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 min-h-11 items-center justify-center border border-[#2a356c] px-6 text-base text-white"
          >
            Écrire sur WhatsApp
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setReady(null);
            setFields(empty);
          }}
          className="mt-4 text-sm text-[#b9c0e0] underline"
        >
          Modifier la demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom complet" error={errors.name}>
          <input
            className="field"
            name="name"
            autoComplete="name"
            placeholder="Votre nom"
            value={fields.name}
            aria-invalid={Boolean(errors.name)}
            onChange={(event) => update("name", event.target.value)}
          />
        </Field>
        <Field label="Email professionnel" error={errors.email}>
          <input
            className="field"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nom@entreprise.com"
            value={fields.email}
            aria-invalid={Boolean(errors.email)}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Téléphone" error={errors.phone}>
          <input
            className="field"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+221 ou +33…"
            value={fields.phone}
            aria-invalid={Boolean(errors.phone)}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
        <Field label="Entreprise" error={errors.company}>
          <input
            className="field"
            name="company"
            autoComplete="organization"
            placeholder="Nom de votre société"
            value={fields.company}
            aria-invalid={Boolean(errors.company)}
            onChange={(event) => update("company", event.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Secteur d’activité" error={errors.sector}>
          <select
            className="field appearance-none bg-[url('/figma/chevron-down.svg')] bg-size-[20px] bg-position-[right_16px_center] bg-no-repeat pr-12"
            name="sector"
            value={fields.sector}
            aria-invalid={Boolean(errors.sector)}
            onChange={(event) => update("sector", event.target.value)}
            style={{ color: fields.sector ? "#ffffff" : "#6470a7" }}
          >
            <option value="">Sélectionnez votre secteur</option>
            {sectors.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Objectif principal" error={errors.objective}>
          <select
            className="field appearance-none bg-[url('/figma/chevron-down.svg')] bg-size-[20px] bg-position-[right_16px_center] bg-no-repeat pr-12"
            name="objective"
            value={fields.objective}
            aria-invalid={Boolean(errors.objective)}
            onChange={(event) => update("objective", event.target.value)}
            style={{ color: fields.objective ? "#ffffff" : "#6470a7" }}
          >
            <option value="">Déploiement, refonte, conseil, audit…</option>
            {objectives.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" error={errors.message}>
        <textarea
          className="field h-24 py-4"
          name="message"
          placeholder="Décrivez votre contexte, vos objectifs, les contraintes clés et les livrables attendus."
          value={fields.message}
          aria-invalid={Boolean(errors.message)}
          onChange={(event) => update("message", event.target.value)}
        />
      </Field>

      <button
        type="submit"
        className="inline-flex h-12 min-h-11 w-full items-center justify-center bg-[#ff9f1a] text-base font-bold text-white shadow-[0_10px_12px_rgba(255,159,26,0.2)]"
      >
        Envoyer ma demande
      </button>
      <p className="text-sm leading-[22px] text-[#6470a7]">
        Une équipe Axium vous recontacte sous 48h ouvrées pour confirmer votre
        demande et planifier un premier échange.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className={labelClass}>{label}</span>
      {children}
      {error ? <span className="text-xs text-[#ffb4a2]">{error}</span> : null}
    </label>
  );
}
