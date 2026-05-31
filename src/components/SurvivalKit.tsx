import { Check, X, AlertTriangle, Clock, MessageCircleHeart, Heart, Wind, Brain } from "lucide-react";

const blocks = [
  { icon: Check, t: "Do's", c: "text-emerald-500", items: ["Attend every class in week 1", "Save important numbers", "Join 1–2 clubs", "Carry your ID everywhere", "Ask seniors for help"] },
  { icon: X, t: "Don'ts", c: "text-rose-500", items: ["Skip orientation", "Ignore hostel timings", "Carry outside food into hostel", "Wait till ESE to study", "Compare your start with others"] },
  { icon: AlertTriangle, t: "Common Mistakes", c: "text-amber-500", items: ["Forgetting AUMS login", "Missing CIA dates", "Last-minute fee payment", "Overcommitting in week 1", "Skipping mess timings"] },
  { icon: Clock, t: "Time Management", c: "text-sky-500", items: ["Weekly review every Sunday", "Block deep-work mornings", "Use one calendar only", "Sleep 7h minimum", "Batch errands together"] },
  { icon: MessageCircleHeart, t: "Senior Advice", c: "text-fuchsia-500", items: ["Build > grades alone", "Pick one club seriously", "Find a study group early", "Start internships by year 2", "Document your projects"] },
];

const wellness = [
  { icon: Heart, t: "Talk to someone", d: "Reach out to a friend, mentor, or counsellor." },
  { icon: Wind, t: "Breathe", d: "Box breathing · 4-4-4-4 · two minutes." },
  { icon: Brain, t: "One small win", d: "Tiny action beats overthinking. Just start." },
];

export function SurvivalKit() {
  return (
    <section id="survival" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Survival Kit</div>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">First-year <span className="gradient-text">survival kit</span></h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {blocks.map((b) => (
          <div key={b.t} className="glass rounded-2xl p-5 ring-glow">
            <b.icon className={`h-6 w-6 ${b.c}`} />
            <div className="mt-3 font-display text-base font-bold">{b.t}</div>
            <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
              {b.items.map((i) => <li key={i} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />{i}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="glass mt-10 rounded-3xl p-6 ring-glow">
        <div className="text-[10px] uppercase tracking-widest text-gold">Mental wellness</div>
        <h3 className="mt-1 font-display text-2xl font-bold">You're doing better than you think.</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {wellness.map((w) => (
            <div key={w.t} className="rounded-2xl border border-border bg-card/60 p-4">
              <w.icon className="h-5 w-5 text-primary" />
              <div className="mt-2 text-sm font-bold">{w.t}</div>
              <div className="text-xs text-muted-foreground">{w.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
