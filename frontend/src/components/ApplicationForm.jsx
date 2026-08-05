import { useState } from "react";

const inputClass =
  "w-full border border-ink/20 bg-white px-3 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none";
const labelClass =
  "block font-mono text-[10px] uppercase tracking-[0.25em] text-forest mb-1.5";

export default function ApplicationForm({ course, onClose }) {
  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    cnic: "",
    dob: "",
    gender: "",
    education: "",
    email: "",
    phone: "",
    domicile: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-forest-dim/70 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl border border-gold/40 bg-parchment shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest text-parchment px-6 py-5 sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-light">
                {course.force} — {course.type}
              </span>
              <h2 className="mt-1 font-display uppercase text-xl font-bold leading-tight">
                Online Application
              </h2>
              <p className="mt-1 text-sm text-parchment/80">{course.title}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close form"
              className="shrink-0 border border-parchment/30 px-3 py-1 font-mono text-xs uppercase tracking-widest text-parchment hover:bg-parchment hover:text-forest transition-colors"
            >
              Close ✕
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="px-6 py-14 sm:px-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold text-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-8 w-8">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="mt-6 font-display uppercase text-2xl font-bold text-forest">
              Application Submitted
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/75">
              Thank you, <span className="font-semibold text-forest">{form.name || "Candidate"}</span>. Your
              application for <span className="font-semibold text-forest">{course.title}</span> has been
              received. Please keep your CNIC and original documents ready for the verification stage.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 border border-forest bg-forest px-8 py-3 font-mono text-xs uppercase tracking-[0.25em] text-parchment hover:bg-forest-light transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">Candidate Name *</label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name as per CNIC"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="fatherName">Father's Name *</label>
                <input
                  id="fatherName"
                  name="fatherName"
                  required
                  value={form.fatherName}
                  onChange={handleChange}
                  placeholder="Father's full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="cnic">CNIC / B-Form No. *</label>
                <input
                  id="cnic"
                  name="cnic"
                  required
                  value={form.cnic}
                  onChange={handleChange}
                  placeholder="xxxxx-xxxxxxx-x"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="dob">Date of Birth *</label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  required
                  value={form.dob}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="gender">Gender *</label>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={form.gender}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="education">Education Level *</label>
                <select
                  id="education"
                  name="education"
                  required
                  value={form.education}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select qualification</option>
                  <option value="Matric">Matric</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">Mobile Number *</label>
                <input
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="03xx-xxxxxxx"
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="domicile">Domicile / Province</label>
                <input
                  id="domicile"
                  name="domicile"
                  value={form.domicile}
                  onChange={handleChange}
                  placeholder="e.g. Punjab, Sindh, KPK, Balochistan"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-6 border-t border-ink/10 pt-5">
              <label className="flex items-start gap-3 text-sm text-ink/75">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 border border-ink/30 accent-forest"
                />
                <span>
                  I declare that the information provided above is correct and I agree to the
                  terms &amp; conditions of the recruitment process.
                </span>
              </label>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="border border-ink/25 px-8 py-3 font-mono text-xs uppercase tracking-[0.25em] text-ink/70 hover:border-ink hover:text-ink transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="border border-forest bg-forest px-8 py-3 font-mono text-xs uppercase tracking-[0.25em] text-parchment hover:bg-forest-light transition-colors"
              >
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
