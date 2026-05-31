import { GraduationCap, FlaskConical, BookOpen, FileText, FolderGit2, ClipboardCheck, Trophy, ArrowRight } from "lucide-react";

const stages = [
  { icon: GraduationCap, label: "Semester Start", note: "Orientation & onboarding" },
  { icon: BookOpen, label: "Classes", note: "Daily lectures · 8:45 AM →" },
  { icon: FlaskConical, label: "Labs", note: "Lab tests vary by subject" },
  { icon: FileText, label: "Assignments", note: "Continuous submissions" },
  { icon: FolderGit2, label: "Projects", note: "Team + solo builds" },
  { icon: ClipboardCheck, label: "CIA + Mid Sem", note: "Internal assessments" },
  { icon: ClipboardCheck, label: "End Semester", note: "1 final ESE" },
  { icon: Trophy, label: "Results", note: "Published on AUMS" },
];

export function AcademicJourney() {
  return (
    <section id="academic" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
          Roadmap
        </div>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Your <span className="gradient-text">Academic Journey</span></h2>
        <p className="mt-2 text-muted-foreground">One semester at a glance — from first class to results.</p>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
          {stages.map((s, i) => (
            <div key={s.label} className="glass relative flex flex-col items-start gap-2 rounded-2xl p-4">
              <div className="absolute -top-2 right-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">{i + 1}</div>
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gold/20 text-gold-foreground dark:text-gold">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-bold">{s.label}</div>
              <div className="text-[11px] text-muted-foreground">{s.note}</div>
              {i < stages.length - 1 && (
                <ArrowRight className="absolute right-[-14px] top-1/2 hidden h-4 w-4 -translate-y-1/2 text-primary md:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { t: "Mid Sem", d: "One mid-semester examination per subject." },
          { t: "Lab Tests", d: "Frequency varies — practical evaluations through the term." },
          { t: "CIA + ESE", d: "Continuous Internal Assessment + a single End Semester Exam." },
        ].map((x) => (
          <div key={x.t} className="glass rounded-2xl p-4">
            <div className="text-[10px] uppercase tracking-widest text-gold">{x.t}</div>
            <div className="mt-1 text-sm text-muted-foreground">{x.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
