"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  serviceFilters,
  serviceMatchesFilter,
  services,
  type ServiceFilter,
} from "@/lib/site";

export function Services() {
  const [filter, setFilter] = useState<ServiceFilter>("Tous");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return services.filter((service) => {
      if (!serviceMatchesFilter(service, filter)) return false;
      if (!needle) return true;
      const haystack = [
        service.title,
        service.lead,
        service.mode,
        ...service.offers.flatMap((offer) => [offer.title, offer.text]),
        ...service.outcomes,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [filter, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les pôles">
          {serviceFilters.map((item) => {
            const selected = item === filter;
            return (
              <Button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                variant={selected ? "default" : "outline"}
                className={
                  selected
                    ? "h-9 bg-navy px-3 text-paper"
                    : "h-9 border-border bg-card px-3 text-navy"
                }
                onClick={() => setFilter(item)}
              >
                {item}
              </Button>
            );
          })}
        </div>
        <label className="block w-full lg:max-w-xs">
          <span className="sr-only">Rechercher un service</span>
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rechercher : ERP, Wave, cloud…"
            className="h-11 bg-card"
          />
        </label>
      </div>

      {visible.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center">
          <p className="font-display text-2xl text-navy">Aucun pôle ne correspond.</p>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            {query.trim()
              ? `Rien pour « ${query.trim()} » dans le filtre ${filter}.`
              : "Ce filtre ne renvoie aucun pôle."}
          </p>
          <Button
            type="button"
            variant="outline"
            className="mt-5 h-10"
            onClick={() => {
              setQuery("");
              setFilter("Tous");
            }}
          >
            Afficher les 9 pôles
          </Button>
        </div>
      ) : (
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {visible.map((service) => (
            <li
              key={service.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-[0_1px_0_rgba(21,26,74,0.04)] sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-display text-sm tracking-[0.18em] text-amber">
                  {service.index}
                </span>
                <Badge
                  variant="secondary"
                  className="h-auto bg-secondary px-2 py-1 text-[0.7rem] tracking-wide text-navy uppercase"
                >
                  {service.mode}
                </Badge>
              </div>
              <h3 className="mt-3 font-display text-2xl leading-tight text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-navy/80">
                {service.lead}
              </p>
              <ul className="mt-5 space-y-3 border-t border-border pt-4">
                {service.offers.map((offer) => (
                  <li key={offer.title}>
                    <p className="font-medium text-navy">{offer.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      {offer.text}
                    </p>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="rounded-lg bg-paper px-3 py-2 text-sm leading-snug text-navy/85"
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
