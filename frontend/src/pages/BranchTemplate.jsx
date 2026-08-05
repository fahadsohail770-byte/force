import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seal from "../components/Seal";
import SectionHead from "../components/SectionHead";
import EntryTable from "../components/EntryTable";
import ProcessTimeline from "../components/ProcessTimeline";
import CardGrid from "../components/CardGrid";
import armySlide1 from "../assets/1.jpg";
import armySlide2 from "../assets/2.jpg";
import armySlide3 from "../assets/3.jpg";
import airforceSlide1 from "../assets/4.jpg";
import airforceSlide2 from "../assets/5.jpg";
import airforceSlide3 from "../assets/6.jpg";
import navySlide1 from "../assets/8.jpg";
import navySlide2 from "../assets/9.jpg";
import navySlide3 from "../assets/10.jpg";

export default function BranchTemplate({ data }) {
  const slides = useMemo(() => {
    const baseSlides = [
      { image: data.heroImage, title: data.branchName, subtitle: data.tagline },
      { image: data.heroImage, title: `${data.branchName} Entry Routes`, subtitle: "Officer and non-officer pathways explained clearly." },
      { image: data.heroImage, title: `${data.branchName} Selection`, subtitle: "From initial test to ISSB, every step is mapped for you." },
    ];

    if (data.branchName === "Pakistan Army") {
      return [
        { image: armySlide1, title: data.branchName, subtitle: data.tagline },
        { image: armySlide2, title: `${data.branchName} Entry Routes`, subtitle: "Officer and non-officer pathways explained clearly." },
        { image: armySlide3, title: `${data.branchName} Selection`, subtitle: "From initial test to ISSB, every step is mapped for you." },
      ];
    }

    if (data.branchName === "Pakistan Air Force") {
      return [
        { image: airforceSlide1, title: data.branchName, subtitle: data.tagline },
        { image: airforceSlide2, title: `${data.branchName} Entry Routes`, subtitle: "Pilot, engineering and specialist branches explained clearly." },
        { image: airforceSlide3, title: `${data.branchName} Selection`, subtitle: "From registration to medical and aptitude stages, every step is mapped for you." },
      ];
    }

    if (data.branchName === "Pakistan Navy") {
      return [
        { image: navySlide1, title: data.branchName, subtitle: data.tagline },
        { image: navySlide2, title: `${data.branchName} Entry Routes`, subtitle: "Cadet, SSC and sailor routes explained clearly." },
        { image: navySlide3, title: `${data.branchName} Selection`, subtitle: "From registration to medical and nautical assessment, every step is mapped for you." },
      ];
    }

    return baseSlides;
  }, [data.branchName, data.heroImage, data.tagline]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="grain-bg">
      {/* Hero */}
      <section className="bg-black text-parchment relative overflow-hidden min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh]">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.45) 60%, rgba(0, 0, 0, 0.6) 100%), url(${slides[activeSlide].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.03)",
            filter: "saturate(0.85) brightness(0.95)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[1fr_auto] gap-10 items-center min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh]">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold-light">
              Service Dossier
            </span>
            <h1 className="font-display uppercase text-4xl sm:text-5xl font-bold tracking-tight mt-3 leading-[1.05]">
              {data.branchName}
            </h1>
            {data.motto && (
              <p className="mt-3 inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-gold-light">
                Motto: {data.motto}
              </p>
            )}
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-gold-light">
              <span>Featured</span>
              <span>{slides[activeSlide].title}</span>
            </div>
            <p className="mt-4 max-w-xl text-parchment/85 leading-relaxed">{data.tagline}</p>
            <p className="mt-3 text-sm text-parchment/80 leading-relaxed">{slides[activeSlide].subtitle}</p>
            <p className="mt-5 max-w-2xl text-parchment/75 text-sm leading-relaxed border-l-2 border-gold/50 pl-4">
              {data.intro}
            </p>
            <a
              href={data.portal}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-7 bg-gold text-forest-dim font-display uppercase tracking-wide text-sm font-semibold px-6 py-3 hover:bg-gold-light transition-colors"
            >
              Visit Official Portal ↗
            </a>
          </div>
          <Seal label={data.branchName} className="hidden lg:block w-40 h-40 text-gold/70 stamp shrink-0" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pb-5 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={`${slide.title}-${index}`}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-2 flex-1 rounded-full transition-all duration-500 ${index === activeSlide ? "bg-gold scale-y-110" : "bg-parchment/30"}`}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-gold/25">
          {data.stats.map((s) => (
            <div key={s.label} className="px-5 py-5 border-r border-gold/15 last:border-r-0">
              <div className="font-mono text-[10px] uppercase tracking-wider text-gold-light">{s.label}</div>
              <div className="font-display text-lg font-semibold mt-1">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Entry schemes */}
        <section className="py-14 sm:py-16">
          <SectionHead
            eyebrow="How To Join"
            title="Entry Schemes & Eligibility"
            blurb="Each route into the service has its own age bracket, education requirement and gender eligibility. Match your current qualification against the table below before you register."
          />
          <EntryTable entries={data.entries} />
        </section>

        {/* General eligibility */}
        <section className="pb-14 sm:pb-16">
          <SectionHead eyebrow="Baseline Requirements" title="General Eligibility" />
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {data.eligibilityGeneral.map((item) => (
              <li key={item} className="flex gap-3 text-ink/85 leading-relaxed">
                <span className="text-gold font-display font-bold shrink-0">›</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Selection process */}
        <section className="pb-14 sm:pb-16">
          <SectionHead
            eyebrow="Step By Step"
            title="Selection Process"
            blurb="From registration to final merit — here is the full sequence of stages you'll go through."
          />
          <ProcessTimeline steps={data.selectionProcess} />
        </section>

        {/* Physical standards */}
        <section className="pb-14 sm:pb-16">
          <SectionHead eyebrow="Get Fit" title="Physical Standards" />
          <CardGrid items={data.physicalStandards} columns={4} />
        </section>

        {/* Preparation subjects */}
        <section className="pb-14 sm:pb-16">
          <SectionHead
            eyebrow="Study Plan"
            title="What To Prepare"
            blurb="Subject areas covered in the initial written/academic test for this service."
          />
          <CardGrid items={data.preparationSubjects} columns={4} />
        </section>

        {/* Tips */}
        <section className="pb-14 sm:pb-16">
          <SectionHead eyebrow="Insider Notes" title="Preparation Tips" />
          <div className="bg-forest text-parchment p-6 sm:p-8">
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {data.tips.map((tip) => (
                <li key={tip} className="flex gap-3 leading-relaxed text-sm text-parchment/90">
                  <span className="text-gold-light font-display font-bold shrink-0">★</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Documents */}
        <section className="pb-14 sm:pb-16">
          <SectionHead eyebrow="Bring These" title="Document Checklist" />
          <div className="border border-ink/15 bg-white/60 p-6 sm:p-8">
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm">
              {data.documents.map((doc) => (
                <li key={doc} className="flex gap-3">
                  <span className="text-crimson">▢</span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cross-links */}
        <section className="pb-20">
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/initial-test"
              className="group border border-ink/15 hover:border-gold p-6 flex items-center justify-between transition-colors"
            >
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-crimson mb-1">Next Up</div>
                <div className="font-display uppercase text-lg font-semibold text-forest">Initial Test Guide</div>
              </div>
              <span className="text-2xl text-gold group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              to="/issb"
              className="group border border-ink/15 hover:border-gold p-6 flex items-center justify-between transition-colors"
            >
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-crimson mb-1">Then</div>
                <div className="font-display uppercase text-lg font-semibold text-forest">Full ISSB Guide</div>
              </div>
              <span className="text-2xl text-gold group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
