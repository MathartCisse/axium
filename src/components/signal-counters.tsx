"use client";

import { useEffect, useRef, useState } from "react";

type Signal = {
  value: string;
  label: string;
};

function parseTarget(value: string) {
  const match = value.match(/^(\+)?(\d+)(%?)$/);
  if (!match) return null;
  return {
    prefix: match[1] ?? "",
    target: Number(match[2]),
    suffix: match[3] ?? "",
  };
}

function Counter({ value, large }: { value: string; large?: boolean }) {
  const parsed = parseTarget(value);
  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!parsed) return;
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || started.current) return;
        started.current = true;
        const duration = 900;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(parsed.target * eased);
          setDisplay(`${parsed.prefix}${current}${parsed.suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [parsed, value]);

  return (
    <p
      ref={ref}
      className={`font-semibold tracking-[-0.05em] text-white ${
        large ? "text-7xl leading-none" : "text-4xl leading-none"
      }`}
    >
      {display}
    </p>
  );
}

export function SignalCounters({ items }: { items: Signal[] }) {
  return (
    <div className="reveal-stagger flex flex-wrap items-end gap-x-14 gap-y-8">
      {items.map((item, index) => (
        <div key={item.label}>
          <Counter value={item.value} large={index === 0} />
          <p className="mt-2 text-xs text-[#9da6cf]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
