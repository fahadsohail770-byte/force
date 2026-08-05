import Seal from "../components/Seal";
import SectionHead from "../components/SectionHead";
import IntelligenceQuiz from "../components/IntelligenceQuiz";
import initialTest from "../data/initialTest";

export default function InitialTest() {
  return (
    <div className="grain-bg">
      <section className="bg-forest text-parchment">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold-light">
              Stage One · Before ISSB
            </span>
            <h1 className="font-display uppercase text-4xl sm:text-5xl font-bold tracking-tight mt-3">
              Initial Test Guide
            </h1>
            <p className="mt-4 max-w-2xl text-parchment/85 leading-relaxed">{initialTest.overview}</p>
          </div>
          <Seal label="INITIAL SCREENING" className="hidden lg:block w-40 h-40 text-gold/70 stamp shrink-0" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <section className="py-14 sm:py-16 space-y-10">
          {initialTest.sections.map((s, i) => (
            <div key={s.title} className="grid md:grid-cols-[220px_1fr] gap-6 border-t hairline pt-8 first:border-t-0 first:pt-0">
              <div>
                <span className="font-mono text-3xl font-bold text-gold/40">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display uppercase text-xl font-semibold text-forest mt-1">{s.title}</h3>
              </div>
              <div>
                <p className="text-ink/85 leading-relaxed">{s.description}</p>
                <div className="mt-4 bg-white/70 border border-ink/12 p-5">
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-crimson mb-3">
                    How To Prepare
                  </h4>
                  <ul className="space-y-2 text-sm text-ink/80 leading-relaxed">
                    {s.practice.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-gold shrink-0">›</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

<section className="pb-20">
          <SectionHead
            eyebrow="Practice Test"
            title="Intelligence Quiz"
            blurb="Take a timed-style verbal and non-verbal MCQ test to gauge your readiness. A score of 80% or above is a PASS; anything below is a FAIL — exactly like the initial screening at the selection centre."
          />
          <IntelligenceQuiz quiz={initialTest.quiz} />
        </section>

        <section className="pb-20">
          <SectionHead eyebrow="Test-Day Discipline" title="General Tips" />
          <div className="bg-forest text-parchment p-6 sm:p-8">
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {initialTest.generalTips.map((tip) => (
                <li key={tip} className="flex gap-3 leading-relaxed text-sm text-parchment/90">
                  <span className="text-gold-light font-display font-bold shrink-0">★</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
