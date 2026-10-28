import { cn } from "cn";

export function Wordmark({
  size = "nav",
  className,
}: {
  size?: "nav" | "footer";
  className?: string;
}) {
  const scale = size === "footer" ? 1.588 : 1;

  return (
    <span
      className={cn("relative inline-block shrink-0", className)}
      style={{ width: 210 * scale, height: 38 * scale }}
    >
      <span
        className="absolute top-0 left-0 origin-top-left"
        style={{ width: 210, height: 38, transform: `scale(${scale})` }}
      >
        <span className="absolute top-[1.34px] left-0 block h-[25.522px] w-[114.64px] -scale-y-100">
          <img
            alt=""
            src="/figma/logo-word.svg"
            className="absolute inset-0 size-full max-w-none"
          />
        </span>
        <span className="absolute top-[2px] left-[25px] block h-[19.183px] w-[23.321px]">
          <img
            alt=""
            src="/figma/logo-accent.svg"
            className="absolute inset-0 size-full max-w-none"
          />
        </span>
        <span className="absolute top-0 left-[117.2px] text-[8.148px] leading-[1.04] font-normal text-[#ff9f1a]">
          GROUP
        </span>
        <span className="absolute top-[29px] left-[0.84px] text-[4.831px] leading-[1.04] font-light whitespace-nowrap text-[#ff9f1a]">
          LE COEUR DIGITAL DE LA NOUVELLE AFRIQUE
        </span>
      </span>
      <span className="sr-only">Axium Group</span>
    </span>
  );
}

export function IconSlot({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <span className={cn("relative inline-block shrink-0", className)}>
      <img alt="" src={src} className="absolute inset-0 size-full max-w-none" />
    </span>
  );
}

const brandLogos = {
  bank: {
    light: "/logos/axium-bank-light.png",
    navy: "/logos/axium-bank-navy.png",
    label: "Axium Bank",
  },
  digital: {
    light: "/logos/axium-digital-light.png",
    navy: "/logos/axium-digital-navy.png",
    label: "Axium Digital",
  },
} as const;

export function BrandLogo({
  brand,
  tone = "light",
  className,
}: {
  brand: keyof typeof brandLogos;
  /** `light` = white mark for dark surfaces; `navy` = navy mark for light surfaces */
  tone?: "light" | "navy";
  className?: string;
}) {
  const logo = brandLogos[brand];

  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={logo[tone]}
        alt={logo.label}
        width={1067}
        height={179}
        className="h-8 w-auto max-w-full object-contain object-left md:h-9"
        decoding="async"
      />
    </span>
  );
}
