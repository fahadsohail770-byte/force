export default function ProcessTimeline({ steps }) {
  return (
    <ol className="relative border-l-2 border-gold/50 ml-3">
      {steps.map((s, i) => (
        <li key={s.title} className="mb-8 ml-8 last:mb-0">
          <span className="absolute -left-[15px] flex items-center justify-center w-7 h-7 bg-forest text-gold-light font-mono text-xs border-2 border-gold rounded-full">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display uppercase text-lg font-semibold text-forest tracking-tight">
            {s.title}
          </h3>
          <p className="text-ink/80 leading-relaxed mt-1">{s.description}</p>
        </li>
      ))}
    </ol>
  );
}
