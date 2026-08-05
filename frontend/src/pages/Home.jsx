import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seal from "../components/Seal";
import SectionHead from "../components/SectionHead";
import ProcessTimeline from "../components/ProcessTimeline";
import announcements from "../data/announcements";
import heroImage from "../assets/hero.png";
import slide1 from "../assets/1.jpg";
import slide2 from "../assets/2.jpg";
import slide3 from "../assets/3.jpg";

const branches = [
  {
    to: "/army",
    name: "Pakistan Army",
    tagline: "Junoon, Josh, Jazba",
    detail: "PMA Long Course, DSSC, Lady Cadet Course, soldier enrolment and more.",
  },
  {
    to: "/navy",
    name: "Pakistan Navy",
    tagline: "Guardians of the coastline",
    detail: "PN Cadet entry, Short Service Commission, sailor trades.",
  },
  {
    to: "/air-force",
    name: "Pakistan Air Force",
    tagline: "Second to none",
    detail: "GD Pilot, Aeronautical Engineering, ground branches, airman trades.",
  },
];

const pipeline = [
  {
    title: "Choose Your Branch & Entry",
    description:
      "Match your current education level and age against the entry schemes for Army, Navy or Air Force. Each has multiple routes — cadet entry straight after Intermediate, or graduate/specialist commissions.",
  },
  {
    title: "Clear The Initial Test",
    description:
      "Register on the official portal and appear at your Selection & Recruitment Centre for an intelligence test, academic test and preliminary interview.",
  },
  {
    title: "Pass Physical & Medical Screening",
    description:
      "A fitness routine and preliminary medical check filter candidates before they're forwarded for the services' shared assessment board.",
  },
  {
    title: "Attend The ISSB",
    description:
      "A four-day psychological, group-task and interview process common to all three services, held at boards such as Kohat, Malir, Gujranwala or Quetta.",
  },
  {
    title: "Final Medical & Merit",
    description:
      "ISSB-recommended candidates undergo a detailed CMH medical board. A final merit list is compiled and training call letters are issued.",
  },
];

export default function Home() {
  const slides = useMemo(
    () => [
      {
        image: slide1,
        title: "Serve with purpose",
        subtitle: "From initial tests to ISSB — one place for every step.",
      },
      {
        image: slide2,
        title: "Train for excellence",
        subtitle: "Physical, academic and leadership preparation in one dossier.",
      },
      {
        image: slide3,
        title: "Choose your service",
        subtitle: "Army, Navy and Air Force routes guided side by side.",
      },
    ],
    []
  );

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="grain-bg">
      <div className="bg-crimson text-parchment">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="font-mono uppercase tracking-[0.25em] text-[11px]">Latest openings</div>
          <div className="flex-1 overflow-hidden">
            <div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap">
              {announcements.map((item) => (
                <span key={item.id} className="mr-8">
                  {item.force} · {item.type} · {item.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
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
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-14 grid lg:grid-cols-[1.1fr_auto] gap-12 items-center min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh]">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold-light">
              File No. FHP-2026 · Aspirant's Briefing
            </span>
            <h1 className="font-display uppercase text-4xl sm:text-6xl font-bold tracking-tight mt-4 leading-[1.02]">
              Forces Hub<br />Pakistan
            </h1>
            <p className="mt-5 max-w-xl text-parchment/85 text-lg leading-relaxed">
              One dossier for everything you need to join the Pakistan Army, Navy or Air Force —
              eligibility, entry schemes, initial tests, physical standards and a complete ISSB
              walkthrough.
            </p>
            <div className="mt-5 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 inline-flex items-center gap-2 text-sm text-parchment/90">
              <span className="font-mono uppercase tracking-[0.25em] text-[10px] text-gold-light">Now showing</span>
              <span className="font-display uppercase tracking-wide">{slides[activeSlide].title}</span>
            </div>
            <p className="mt-3 text-sm text-parchment/80 leading-relaxed">{slides[activeSlide].subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/army"
                className="bg-gold text-forest-dim font-display uppercase tracking-wide text-sm font-semibold px-6 py-3 hover:bg-gold-light transition-colors"
              >
                Start With Army
              </Link>
              <Link
                to="/issb"
                className="border border-gold/60 text-parchment font-display uppercase tracking-wide text-sm font-semibold px-6 py-3 hover:border-gold hover:text-gold-light transition-colors"
              >
                ISSB Guide
              </Link>
            </div>
          </div>
          <Seal label="FORCES HUB PAKISTAN" className="hidden lg:block w-48 h-48 text-gold/70 stamp shrink-0" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pb-5 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-2 flex-1 rounded-full transition-all duration-500 ${index === activeSlide ? "bg-gold scale-y-110" : "bg-parchment/30"}`}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Branch selector */}
        <section className="py-14 sm:py-20">
          <SectionHead
            eyebrow="Pick Your Service"
            title="Three Services, One Dossier"
            blurb="Every branch has its own entry routes, physical standards and academic focus. Open a service dossier to see the full picture."
          />
          <div className="grid sm:grid-cols-3 gap-5">
            {branches.map((b) => (
              <Link
                key={b.to}
                to={b.to}
                className="group bg-white/70 border border-ink/15 hover:border-gold p-6 flex flex-col justify-between min-h-[190px] transition-colors"
              >
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-crimson mb-2">
                    {b.tagline}
                  </div>
                  <h3 className="font-display uppercase text-xl font-semibold text-forest">{b.name}</h3>
                  <p className="text-sm text-ink/75 mt-2 leading-relaxed">{b.detail}</p>
                </div>
                <span className="mt-4 text-gold font-display text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                  Open Dossier <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Pipeline */}
        <section className="pb-14 sm:pb-20">
          <SectionHead
            eyebrow="The Full Journey"
            title="From Application To Uniform"
            blurb="Regardless of which service or branch you choose, the selection pipeline follows roughly the same five stages."
          />
          <ProcessTimeline steps={pipeline} />
        </section>

        {/* Quick links */}
        <section className="pb-20">
          <SectionHead eyebrow="Go Deeper" title="Preparation Resources" />
          <div className="grid sm:grid-cols-3 gap-5">
            <Link to="/initial-test" className="border border-ink/15 hover:border-gold p-6 transition-colors block">
              <h4 className="font-display uppercase text-sm font-semibold text-forest mb-2">Initial Test Guide</h4>
              <p className="text-sm text-ink/75 leading-relaxed">
                Intelligence test, academic subjects, preliminary interview and physical screening explained stage by stage.
              </p>
            </Link>
            <Link to="/issb" className="border border-ink/15 hover:border-gold p-6 transition-colors block">
              <h4 className="font-display uppercase text-sm font-semibold text-forest mb-2">ISSB Guide</h4>
              <p className="text-sm text-ink/75 leading-relaxed">
                A full day-by-day breakdown of the four-day ISSB process, plus PIQ, interview and group-task tips.
              </p>
            </Link>
            <Link to="/past-papers" className="border border-ink/15 hover:border-gold p-6 transition-colors block">
              <h4 className="font-display uppercase text-sm font-semibold text-forest mb-2">Past Papers</h4>
              <p className="text-sm text-ink/75 leading-relaxed">
                Subject breakdowns and trusted sources for past initial-test papers across all three services.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
