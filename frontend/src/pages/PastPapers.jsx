import Seal from "../components/Seal";
import SectionHead from "../components/SectionHead";
import CardGrid from "../components/CardGrid";
import pastPapers from "../data/pastPapers";

export default function PastPapers() {
  return (
    <div className="grain-bg">
      <section className="bg-forest text-parchment">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold-light">
              Study Material
            </span>
            <h1 className="font-display uppercase text-4xl sm:text-5xl font-bold tracking-tight mt-3">
              Past Papers &amp; Practice
            </h1>
            <p className="mt-4 max-w-2xl text-parchment/85 leading-relaxed">
              Every service draws its initial test from the same core subject areas. Use this
              breakdown to structure your revision, then confirm the exact current syllabus
              against your service's official advertisement.
            </p>
          </div>
          <Seal label="PRACTICE FILE" className="hidden lg:block w-40 h-40 text-gold/70 stamp shrink-0" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <section className="py-14 sm:py-16">
          <SectionHead
            eyebrow="Subject Breakdown"
            title="What Actually Gets Tested"
            blurb="Regardless of Army, Navy or Air Force, initial tests are drawn from four recurring subject clusters."
          />
          <CardGrid items={pastPapers.subjects} columns={4} />
        </section>

        <section className="pb-14 sm:pb-16">
          <SectionHead eyebrow="Study Method" title="How To Practice Effectively" />
          <div className="bg-forest text-parchment p-6 sm:p-8">
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {pastPapers.approach.map((a) => (
                <li key={a} className="flex gap-3 leading-relaxed text-sm text-parchment/90">
                  <span className="text-gold-light font-display font-bold shrink-0">★</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pb-14 sm:pb-16">
          <SectionHead eyebrow="Verified Links" title="Official Sources" />
          <div className="grid sm:grid-cols-3 gap-5">
            {pastPapers.sources.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="border border-ink/15 hover:border-gold p-6 transition-colors block bg-white/60"
              >
                <h4 className="font-display uppercase text-sm font-semibold text-forest mb-2">{s.label}</h4>
                <p className="text-sm text-ink/75 leading-relaxed">{s.note}</p>
                <span className="text-gold font-mono text-xs mt-3 inline-block">{s.url.replace("https://www.", "")} ↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="border-l-2 border-crimson pl-5 py-1 text-sm text-ink/70 leading-relaxed max-w-3xl">
            {pastPapers.disclaimer}
          </div>
        </section>
      </div>
    </div>
  );
}
