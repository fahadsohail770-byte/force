export default function Footer() {
  return (
    <footer className="bg-forest text-parchment/80 mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10 font-body text-sm">
          <div>
            <h3 className="font-display uppercase tracking-widest text-gold-light text-xs mb-3">Forces Hub Pakistan</h3>
            <p className="leading-relaxed">
              An independent preparation guide for candidates pursuing a career in the
              Pakistan Army, Navy and Air Force. Not affiliated with the Government of
              Pakistan or its armed forces.
            </p>
          </div>
          <div>
            <h3 className="font-display uppercase tracking-widest text-gold-light text-xs mb-3">Official Portals</h3>
            <ul className="space-y-1.5">
              <li><a className="hover:text-gold-light underline decoration-gold/30 underline-offset-4" href="https://www.joinpakarmy.gov.pk" target="_blank" rel="noreferrer">joinpakarmy.gov.pk</a></li>
              <li><a className="hover:text-gold-light underline decoration-gold/30 underline-offset-4" href="https://www.joinpaknavy.gov.pk" target="_blank" rel="noreferrer">joinpaknavy.gov.pk</a></li>
              <li><a className="hover:text-gold-light underline decoration-gold/30 underline-offset-4" href="https://www.joinpaf.gov.pk" target="_blank" rel="noreferrer">joinpaf.gov.pk</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display uppercase tracking-widest text-gold-light text-xs mb-3">A Note On Accuracy</h3>
            <p className="leading-relaxed">
              Age limits, quotas and syllabi are revised with each new advertisement.
              Treat every figure here as a planning reference and confirm exact criteria
              on the official recruitment portal before applying.
            </p>
          </div>
        </div>
        <div className="border-t border-gold/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-parchment/60 font-mono">
          <span>FILE REF: FHP-2026 — FOR GUIDANCE PURPOSES ONLY</span>
          <span>Built for aspirants across Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
