import { useState, useEffect } from "react";

const TIME_LIMIT = 30 * 60; // 30 minutes in seconds

export default function IntelligenceQuiz({ quiz }) {
  const [selectedSet, setSelectedSet] = useState(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);

  const passPercentage = quiz.passPercentage;

  const startSet = (set) => {
    setSelectedSet(set);
    setCurrent(0);
    setAnswers(new Array(set.questions.length).fill(null));
    setFinished(false);
    setTimeLeft(TIME_LIMIT);
  };

  // Timer effect — runs only while a quiz is active and not finished
  useEffect(() => {
    if (!selectedSet || finished) return;
    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [selectedSet, finished, timeLeft]);

  const formattedTime = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const selectOption = (optionIndex) => {
    const next = [...answers];
    next[current] = optionIndex;
    setAnswers(next);
  };

  const nextQuestion = () => {
    if (current < selectedSet.questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const prevQuestion = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const reset = () => {
    setSelectedSet(null);
    setCurrent(0);
    setAnswers([]);
    setFinished(false);
  };

  // ---- Step 1: Set selection ----
  if (!selectedSet) {
    return (
      <div className="grid gap-5 sm:grid-cols-2">
        {quiz.sets.map((set) => (
          <button
            key={set.id}
            type="button"
            onClick={() => startSet(set)}
            className="text-left border border-ink/15 bg-white/70 p-6 hover:border-gold hover:shadow transition-all"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson">
              Intelligence MCQ
            </span>
            <h3 className="mt-2 font-display uppercase text-xl font-semibold text-forest">
              {set.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{set.description}</p>
<div className="mt-4 flex items-center justify-between">
              <span className="font-mono text-xs text-ink/60">
                {set.questions.length} questions · 30 min
              </span>
              <span className="border border-forest bg-forest px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-parchment">
                Start Test →
              </span>
            </div>
          </button>
        ))}
      </div>
    );
  }

  const question = selectedSet.questions[current];
  const total = selectedSet.questions.length;
  const answered = answers.filter((a) => a !== null).length;

  // ---- Step 3: Results ----
  if (finished) {
    const correct = answers.reduce(
      (acc, a, i) => acc + (a === selectedSet.questions[i].answer ? 1 : 0),
      0
    );
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= passPercentage;

    return (
      <div className="border border-ink/15 bg-white/70 p-6 sm:p-8 text-center">
        <div
          className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 ${
            passed ? "border-forest text-forest" : "border-crimson text-crimson"
          }`}
        >
          <span className="font-display text-3xl font-bold">{passed ? "✓" : "✕"}</span>
        </div>
        <h3
          className={`mt-5 font-display uppercase text-3xl font-bold ${
            passed ? "text-forest" : "text-crimson"
          }`}
        >
          {passed ? "PASS" : "FAIL"}
        </h3>
        <p className="mt-2 text-ink/75">
          {selectedSet.title} — {correct} / {total} correct
        </p>
        <div className="mt-4 font-mono text-4xl font-bold text-ink">
          {percentage}%
        </div>
        <p className="mt-3 text-sm text-ink/70">
          Passing requirement is{" "}
          <span className="font-semibold text-forest">{passPercentage}%</span>.
          {passed
            ? " Well done — you meet the intelligence screening standard."
            : " Keep practising — aim for the passing percentage before your actual test."}
        </p>
        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={reset}
            className="border border-ink/25 px-6 py-2.5 font-mono text-xs uppercase tracking-[0.25em] text-ink/70 hover:border-ink hover:text-ink transition-colors"
          >
            Choose Another Set
          </button>
          <button
            type="button"
            onClick={() => startSet(selectedSet)}
            className="border border-forest bg-forest px-6 py-2.5 font-mono text-xs uppercase tracking-[0.25em] text-parchment hover:bg-forest-light transition-colors"
          >
            Retake Test
          </button>
        </div>
      </div>
    );
  }

  // ---- Step 2: Question ----
  return (
    <div className="border border-ink/15 bg-white/70">
      {/* Progress bar */}
      <div className="h-1 bg-ink/10">
        <div
          className="h-full bg-gold transition-all"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      <div className="p-6 sm:p-8">
<div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-crimson">
            {selectedSet.title}
          </span>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-ink/60">
              Question {current + 1} of {total} · Answered {answered}
            </span>
            <span
              className={`flex items-center gap-2 border px-3 py-1 font-mono text-sm font-bold ${
                timeLeft <= 60
                  ? "border-crimson bg-crimson/10 text-crimson"
                  : "border-forest/30 bg-forest/5 text-forest"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <circle cx="12" cy="13" r="8" />
                <path d="M12 9v4l2.5 2.5M9 2h6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {formattedTime()}
            </span>
          </div>
        </div>

        <h3 className="mt-4 font-display text-xl sm:text-2xl font-semibold text-forest">
          {question.q}
        </h3>

        <div className="mt-6 grid gap-3">
          {question.options.map((opt, i) => {
            const selected = answers[current] === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => selectOption(i)}
                className={`flex items-center gap-3 border px-4 py-3 text-left text-sm transition-colors ${
                  selected
                    ? "border-gold bg-gold/10 text-forest"
                    : "border-ink/15 bg-white text-ink/80 hover:border-gold"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center border font-mono text-xs ${
                    selected ? "border-gold bg-gold text-forest-dim" : "border-ink/25 text-ink/60"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={prevQuestion}
            disabled={current === 0}
            className="border border-ink/25 px-6 py-2.5 font-mono text-xs uppercase tracking-[0.25em] text-ink/70 hover:border-ink hover:text-ink transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>
          <button
            type="button"
            onClick={nextQuestion}
            disabled={answers[current] === null}
            className="border border-forest bg-forest px-8 py-2.5 font-mono text-xs uppercase tracking-[0.25em] text-parchment hover:bg-forest-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {current === total - 1 ? "Submit & View Result" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}
