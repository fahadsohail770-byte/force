export default function SectionHead({ eyebrow, title, blurb }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <span className="inline-block font-mono text-[11px] tracking-[0.25em] uppercase text-crimson mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold tracking-tight text-forest">
        {title}
      </h2>
      <div className="w-16 h-[3px] bg-gold mt-3 mb-4" />
      {blurb && <p className="max-w-2xl text-ink/80 leading-relaxed">{blurb}</p>}
    </div>
  );
}
