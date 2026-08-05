export default function Seal({ label = "VERIFIED GUIDE", className = "" }) {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <path
          id={`circle-${id}`}
          d="M 80,80 m -62,0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
        />
      </defs>
      <circle cx="80" cy="80" r="74" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="80" cy="80" r="62" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="80" cy="80" r="58" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1.5 3" />
      <text fontFamily="Oswald, sans-serif" fontSize="11.5" letterSpacing="3" fill="currentColor">
        <textPath href={`#circle-${id}`} startOffset="2%">
          {label} • {label} •
        </textPath>
      </text>
      <path d="M80 45 L88 68 L112 68 L92 82 L100 105 L80 91 L60 105 L68 82 L48 68 L72 68 Z" fill="currentColor" opacity="0.9" />
    </svg>
  );
}
