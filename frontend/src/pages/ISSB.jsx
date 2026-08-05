import Seal from "../components/Seal";
import SectionHead from "../components/SectionHead";
import issb from "../data/issb";

export default function ISSB() {
  return (
    <div className="grain-bg">
      <section className="bg-forest text-parchment">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold-light">
              Common To Army · Navy · Air Force
            </span>
            <h1 className="font-display uppercase text-4xl sm:text-5xl font-bold tracking-tight mt-3">
              ISSB Guide
            </h1>
            <p className="mt-4 max-w-2xl text-parchment/85 leading-relaxed">{issb.overview}</p>
          </div>
          <Seal label="ISSB ASSESSMENT" className="hidden lg:block w-40 h-40 text-gold/70 stamp shrink-0" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Attempts */}
        <section className="py-14 sm:py-16">
          <SectionHead eyebrow="Know The Rules" title="Attempt Limits" />
          <ul className="space-y-3">
            {issb.attempts.map((a) => (
              <li key={a} className="flex gap-3 text-ink/85 leading-relaxed border-l-2 border-gold/50 pl-4">
                {a}
              </li>
            ))}
          </ul>
        </section>

        {/* Day by day */}
        <section className="pb-14 sm:pb-16">
          <SectionHead
            eyebrow="Four Days"
            title="Day-By-Day Breakdown"
            blurb="Each day builds on the last — intelligence testing narrows the field, psychological tests reveal character, group tasks test behaviour under pressure, and the interview ties it all together."
          />
          <div className="grid sm:grid-cols-2 gap-5">
            {issb.days.map((d, i) => (
              <div key={d.day} className="bg-white/70 border border-ink/12 p-6 relative">
                <span className="absolute top-4 right-4 font-mono text-4xl font-bold text-gold/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display uppercase text-base font-semibold text-forest pr-10">{d.day}</h3>
                <p className="text-sm text-ink/80 leading-relaxed mt-2">{d.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Qualities assessed */}
        <section className="pb-14 sm:pb-16">
          <SectionHead eyebrow="What Assessors Look For" title="Officer-Like Qualities" />
          <div className="bg-forest text-parchment p-6 sm:p-8">
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {issb.qualitiesAssessed.map((q) => (
                <li key={q} className="flex gap-3 text-sm leading-relaxed text-parchment/90">
                  <span className="text-gold-light font-display font-bold shrink-0">✓</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tip blocks */}
        <section className="pb-14 sm:pb-16 grid md:grid-cols-3 gap-5">
          <div className="border border-ink/15 p-6 bg-white/60">
            <h4 className="font-display uppercase text-sm font-semibold text-forest mb-3">PIQ &amp; Interview</h4>
            <ul className="space-y-2 text-sm text-ink/80 leading-relaxed list-disc list-inside">
              {issb.piqTips.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div className="border border-ink/15 p-6 bg-white/60">
            <h4 className="font-display uppercase text-sm font-semibold text-forest mb-3">Group Tasks</h4>
            <ul className="space-y-2 text-sm text-ink/80 leading-relaxed list-disc list-inside">
              {issb.groupTaskTips.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div className="border border-ink/15 p-6 bg-white/60">
            <h4 className="font-display uppercase text-sm font-semibold text-forest mb-3">Psychological Tests</h4>
            <ul className="space-y-2 text-sm text-ink/80 leading-relaxed list-disc list-inside">
              {issb.psychTestTips.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
