export default function EntryTable({ entries }) {
  return (
    <div className="overflow-x-auto border border-ink/15 bg-white/60">
      <table className="w-full text-sm min-w-[720px]">
        <thead>
          <tr className="bg-forest text-parchment font-display uppercase text-xs tracking-wider">
            <th className="text-left px-4 py-3 font-medium">Entry Scheme</th>
            <th className="text-left px-4 py-3 font-medium">Education Required</th>
            <th className="text-left px-4 py-3 font-medium">Age Bracket</th>
            <th className="text-left px-4 py-3 font-medium">Gender</th>
            <th className="text-left px-4 py-3 font-medium">Notes</th>
          </tr>
        </thead>
        <tbody className="font-body">
          {entries.map((e, i) => (
            <tr key={e.name} className={i % 2 === 0 ? "bg-parchment" : "bg-parchment-dark/50"}>
              <td className="px-4 py-3 font-semibold text-forest align-top whitespace-nowrap">{e.name}</td>
              <td className="px-4 py-3 align-top text-ink/85">{e.education}</td>
              <td className="px-4 py-3 align-top font-mono text-ink/85 whitespace-nowrap">{e.age}</td>
              <td className="px-4 py-3 align-top text-ink/85 whitespace-nowrap">{e.gender}</td>
              <td className="px-4 py-3 align-top text-ink/70">{e.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
