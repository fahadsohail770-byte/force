import { useState } from "react";
import { Link } from "react-router-dom";
import announcements from "../data/announcements";
import ApplicationForm from "../components/ApplicationForm";

export default function Announcements() {
  const [activeCourse, setActiveCourse] = useState(null);

  const openForm = (course) => setActiveCourse(course);
  const closeForm = () => setActiveCourse(null);

  return (
    <div className="grain-bg min-h-screen">
      <section className="bg-forest text-parchment">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold-light">
            Live Openings
          </span>
          <h1 className="font-display uppercase text-4xl sm:text-5xl font-bold tracking-tight mt-3">
            Announcements & Openings
          </h1>
          <p className="mt-4 max-w-3xl text-parchment/85 leading-relaxed">
            Browse the latest registration, job and admission notices for the Pakistan Army, Navy and Air Force. Each listing highlights whether it is a commission or non-commission entry.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid gap-5">
          {announcements.map((item) => (
            <article key={item.id} className="border border-ink/15 bg-white/70 p-6 shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson">
                  {item.force}
                </span>
                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-gold-dark">
                  {item.type}
                </span>
                <span className="rounded-full border border-ink/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70">
                  {item.category}
                </span>
              </div>
              <h2 className="mt-4 font-display uppercase text-xl font-semibold text-forest">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{item.summary}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm text-ink/70">
                  <span className="font-semibold text-forest">Deadline:</span> {item.deadline}
                </div>
                <button
                  type="button"
                  onClick={() => openForm(item)}
                  className="border border-forest bg-forest px-6 py-2.5 font-mono text-xs uppercase tracking-[0.25em] text-parchment hover:bg-forest-light hover:border-gold transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Link to="/army" className="border border-ink/15 hover:border-gold p-5 transition-colors">
            <h3 className="font-display uppercase text-sm font-semibold text-forest">Army Dossier</h3>
            <p className="mt-2 text-sm text-ink/75">See officer and non-officer entry routes.</p>
          </Link>
          <Link to="/navy" className="border border-ink/15 hover:border-gold p-5 transition-colors">
            <h3 className="font-display uppercase text-sm font-semibold text-forest">Navy Dossier</h3>
            <p className="mt-2 text-sm text-ink/75">Explore cadet, SSC and sailor opportunities.</p>
          </Link>
<Link to="/air-force" className="border border-ink/15 hover:border-gold p-5 transition-colors">
            <h3 className="font-display uppercase text-sm font-semibold text-forest">Air Force Dossier</h3>
            <p className="mt-2 text-sm text-ink/75">Find pilot, engineering and airman entry options.</p>
          </Link>
        </div>
      </div>

      {activeCourse && (
        <ApplicationForm course={activeCourse} onClose={closeForm} />
      )}
    </div>
  );
}
