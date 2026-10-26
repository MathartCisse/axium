"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    const nodes = () =>
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger > *");

    const markAll = () => {
      nodes().forEach((node) => node.classList.add("is-in"));
    };

    if (query.matches || typeof IntersectionObserver === "undefined") {
      markAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    const observePending = () => {
      nodes().forEach((node) => {
        if (!node.classList.contains("is-in")) observer.observe(node);
      });
    };

    observePending();

    const mutation = new MutationObserver(() => observePending());
    mutation.observe(document.body, { childList: true, subtree: true });

    const onReduceChange = () => {
      if (query.matches) {
        markAll();
        observer.disconnect();
      }
    };
    query.addEventListener("change", onReduceChange);

    return () => {
      observer.disconnect();
      mutation.disconnect();
      query.removeEventListener("change", onReduceChange);
    };
  }, [pathname]);

  return null;
}
