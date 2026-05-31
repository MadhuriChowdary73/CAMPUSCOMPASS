import { useMemo, useState } from "react";
import { Plus, Trash2, Calculator, TrendingUp } from "lucide-react";

type Course = { name: string; credits: number; grade: number };
const GRADES = [
  { l: "O", v: 10 }, { l: "A+", v: 9.5 }, { l: "A", v: 9 }, { l: "B+", v: 8 },
  { l: "B", v: 7 }, { l: "C", v: 6 }, { l: "P", v: 5 }, { l: "F", v: 0 }, { l: "FA", v: 0 },
];


export function CGPAHub() {
  const [courses, setCourses] = useState<Course[]>([
    { name: "Mathematics", credits: 4, grade: 9.5 },
    { name: "Programming", credits: 4, grade: 10 },
    { name: "Physics", credits: 3, grade: 9 },
  ]);
  const [sgpas, setSgpas] = useState<{ sem: number; sgpa: number; credits: number }[]>([
    { sem: 1, sgpa: 8.5, credits: 22 },
    { sem: 2, sgpa: 8.9, credits: 24 },
  ]);

  const sgpa = useMemo(() => {
    const tc = courses.reduce((s, c) => s + c.credits, 0);
    const tp = courses.reduce((s, c) => s + c.credits * c.grade, 0);
    return tc ? tp / tc : 0;
  }, [courses]);

  const cgpa = useMemo(() => {
    const tc = sgpas.reduce((s, c) => s + c.credits, 0);
    const tp = sgpas.reduce((s, c) => s + c.credits * c.sgpa, 0);
    return tc ? tp / tc : 0;
  }, [sgpas]);

  return (
    <section id="cgpa" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Analytics</div>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">CGPA <span className="gradient-text">Hub</span></h2>
        <p className="mt-2 text-muted-foreground">Calculate SGPA per semester, track CGPA across semesters — all in your browser.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* SGPA */}
        <div className="glass rounded-3xl p-6 ring-glow">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gold">Semester Calculator</div>
              <h3 className="font-display text-xl font-bold">SGPA</h3>
            </div>
            <div className="rounded-2xl bg-primary/10 px-4 py-2 text-right">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">SGPA</div>
              <div className="font-display text-3xl font-bold text-primary">{sgpa.toFixed(2)}</div>
            </div>
          </div>
          <div className="mt-5 space-y-2">
            {courses.map((c, i) => (
              <div key={i} className="grid grid-cols-[1fr_70px_90px_36px] gap-2">
                <input value={c.name} onChange={(e) => setCourses(courses.map((x, j) => j === i ? { ...x, name: e.target.value } : x))}
                  className="rounded-xl border border-border bg-card px-3 py-2 text-sm" />
                <input type="number" min={1} max={6} value={c.credits} onChange={(e) => setCourses(courses.map((x, j) => j === i ? { ...x, credits: +e.target.value || 0 } : x))}
                  className="rounded-xl border border-border bg-card px-3 py-2 text-sm" />
                <select value={c.grade} onChange={(e) => setCourses(courses.map((x, j) => j === i ? { ...x, grade: +e.target.value } : x))}
                  className="rounded-xl border border-border bg-card px-2 py-2 text-sm">
                  {GRADES.map((g) => <option key={g.l} value={g.v}>{g.l} ({g.v})</option>)}
                </select>
                <button onClick={() => setCourses(courses.filter((_, j) => j !== i))} className="grid place-items-center rounded-xl border border-border text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <button onClick={() => setCourses([...courses, { name: "New course", credits: 3, grade: 8 }])}
            className="mt-3 inline-flex items-center gap-1.5 rounded-xl border border-dashed border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground">
            <Plus className="h-3.5 w-3.5" /> Add course
          </button>
        </div>

        {/* CGPA */}
        <div className="glass rounded-3xl p-6 ring-glow">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gold">Semester Tracker</div>
              <h3 className="font-display text-xl font-bold">CGPA</h3>
            </div>
            <div className="rounded-2xl bg-gold/15 px-4 py-2 text-right">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">CGPA</div>
              <div className="font-display text-3xl font-bold text-gold-foreground dark:text-gold">{cgpa.toFixed(2)}</div>
            </div>
          </div>
          <div className="mt-5 space-y-2">
            {sgpas.map((s, i) => (
              <div key={i} className="grid grid-cols-[60px_1fr_1fr_36px] items-center gap-2">
                <div className="rounded-xl bg-primary/10 px-2 py-2 text-center text-xs font-bold text-primary">S{s.sem}</div>
                <input type="number" step="0.01" value={s.sgpa} onChange={(e) => setSgpas(sgpas.map((x, j) => j === i ? { ...x, sgpa: +e.target.value || 0 } : x))}
                  className="rounded-xl border border-border bg-card px-3 py-2 text-sm" placeholder="SGPA" />
                <input type="number" value={s.credits} onChange={(e) => setSgpas(sgpas.map((x, j) => j === i ? { ...x, credits: +e.target.value || 0 } : x))}
                  className="rounded-xl border border-border bg-card px-3 py-2 text-sm" placeholder="Credits" />
                <button onClick={() => setSgpas(sgpas.filter((_, j) => j !== i))} className="grid place-items-center rounded-xl border border-border text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <button onClick={() => setSgpas([...sgpas, { sem: sgpas.length + 1, sgpa: 8, credits: 22 }])}
            className="mt-3 inline-flex items-center gap-1.5 rounded-xl border border-dashed border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground">
            <Plus className="h-3.5 w-3.5" /> Add semester
          </button>

          <div className="mt-5 grid grid-cols-5 gap-2">
            {GRADES.slice(0, 5).map((g) => (
              <div key={g.l} className="rounded-xl border border-border bg-card/50 p-2 text-center">
                <div className="font-display text-sm font-bold">{g.l}</div>
                <div className="text-[10px] text-muted-foreground">{g.v} pts</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {[
          { i: Calculator, t: "Auto SGPA", d: "Credits × Grade points / total credits" },
          { i: TrendingUp, t: "Live CGPA", d: "Weighted across all semesters" },
          { i: Calculator, t: "Grade scale", d: "O=10, A+=9, A=8, B+=7, B=6, C=5, P=4, F=0" },
        ].map((x) => (
          <div key={x.t} className="glass rounded-2xl p-4">
            <x.i className="h-5 w-5 text-gold" />
            <div className="mt-2 text-sm font-bold">{x.t}</div>
            <div className="text-xs text-muted-foreground">{x.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
