const weeks = [
  { w: "Week 1", t: "Land & orient", items: ["Hostel setup", "Pick up ID & docs", "Walk the campus map"] },
  { w: "Week 2", t: "Find your rhythm", items: ["Lock your timetable", "Test AUMS + MyAmrita logins", "Spot your canteen order"] },
  { w: "Week 3", t: "Explore clubs", items: ["Attend 3 club intros", "Follow them on Instagram", "Pick 1–2 to commit to"] },
  { w: "Week 4", t: "Build a system", items: ["Notes setup", "Calendar for CIA / labs", "First weekly review"] },
];

export function FirstMonth() {
  return (
    <section id="first-month" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">First 30 Days</div>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">First-month <span className="gradient-text">roadmap</span></h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary via-gold to-transparent md:block" />
        <div className="space-y-4">
          {weeks.map((w, i) => (
            <div key={w.w} className="relative grid gap-4 md:grid-cols-[120px_1fr] md:pl-10">
              <div className="absolute left-2.5 top-5 hidden h-3 w-3 rounded-full bg-primary ring-4 ring-background md:block" style={{ animationDelay: `${i * 0.1}s` }} />
              <div className="text-xs font-bold uppercase tracking-widest text-gold md:pt-4">{w.w}</div>
              <div className="glass rounded-2xl p-5 ring-glow">
                <div className="font-display text-lg font-bold">{w.t}</div>
                <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-3">
                  {w.items.map((it) => <li key={it} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />{it}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
