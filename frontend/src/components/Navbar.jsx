import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Briefing", end: true },
  { to: "/announcements", label: "Announcements" },
  { to: "/army", label: "Army" },
  { to: "/navy", label: "Navy" },
  { to: "/air-force", label: "Air Force" },
  { to: "/initial-test", label: "Initial Test" },
  { to: "/issb", label: "ISSB" },
  { to: "/past-papers", label: "Past Papers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-forest text-parchment border-b-2 border-gold/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <span className="w-9 h-9 rounded-full border-2 border-gold flex items-center justify-center shrink-0">
              <span className="w-2.5 h-2.5 rotate-45 bg-gold" />
            </span>
            <span className="font-display uppercase tracking-wide leading-none">
              <span className="block text-base sm:text-lg font-semibold">Forces Hub</span>
              <span className="block text-[10px] tracking-[0.3em] text-gold-light">Pakistan</span>
            </span>
          </NavLink>

          <nav className="hidden lg:flex items-center gap-1 font-display uppercase text-sm tracking-wide">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `px-3 py-2 border-b-2 transition-colors ${
                    isActive
                      ? "border-gold text-gold-light"
                      : "border-transparent text-parchment/85 hover:text-gold-light hover:border-gold/50"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-0.5 bg-parchment transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-6 h-0.5 bg-parchment transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-parchment transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-forest-dim border-t border-gold/30 font-display uppercase text-sm tracking-wide">
          <div className="max-w-6xl mx-auto px-5 py-2 flex flex-col">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 border-b border-gold/10 ${isActive ? "text-gold-light" : "text-parchment/85"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
