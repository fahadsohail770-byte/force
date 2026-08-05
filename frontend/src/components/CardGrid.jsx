export default function CardGrid({ items, columns = 3 }) {
  const colClass =
    columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 ${colClass} gap-5`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-white/70 border border-ink/12 p-5 hover:border-gold/60 transition-colors"
        >
          <h4 className="font-display uppercase text-sm font-semibold tracking-wide text-forest mb-2">
            {item.title}
          </h4>
          {item.list ? (
            <ul className="space-y-1.5 text-sm text-ink/80 leading-relaxed list-disc list-inside">
              {item.list.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-ink/80 leading-relaxed">{item.text}</p>
          )}
        </div>
      ))}
    </div>
  );
}
