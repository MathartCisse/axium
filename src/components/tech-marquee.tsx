const techs = [
  { name: "Microsoft", src: "/tech/microsoft.svg" },
  { name: "Cisco", src: "/tech/cisco.svg" },
  { name: "Fortinet", src: "/tech/fortinet.svg" },
  { name: "Odoo", src: "/tech/odoo.svg" },
  { name: "Azure", src: "/tech/azure.svg" },
  { name: "AWS", src: "/tech/aws.svg" },
  { name: "Power BI", src: "/tech/powerbi.svg" },
  { name: "React", src: "/tech/react.svg" },
  { name: "Next.js", src: "/tech/nextjs.svg" },
  { name: "PostgreSQL", src: "/tech/postgresql.svg" },
] as const;

export function TechMarquee() {
  const row = [...techs, ...techs];
  return (
    <section aria-label="Technologies maîtrisées" className="overflow-hidden bg-[#f7f5f0] py-5">
      <div className="tech-marquee flex w-max items-center gap-12 px-6">
        {row.map((item, index) => (
          <span
            key={`${item.name}-${index}`}
            className="inline-flex h-8 items-center text-[#1f2466]/55"
            title={item.name}
          >
            <img
              src={item.src}
              alt={item.name}
              width={96}
              height={28}
              className="tech-logo h-7 w-auto max-w-[6.5rem] object-contain object-center"
              loading="lazy"
              decoding="async"
            />
            <span className="sr-only">{item.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
