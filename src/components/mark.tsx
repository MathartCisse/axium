export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <rect width="32" height="32" rx="7" className="fill-navy" />
      <path
        d="M8.2 23.2 16 8.4l7.8 14.8"
        className="stroke-amber"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M11.4 17.6h9.2" className="stroke-amber" strokeWidth="2.2" />
    </svg>
  );
}
