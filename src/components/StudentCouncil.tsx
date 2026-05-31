import { Instagram, Users, Megaphone, Layers } from "lucide-react";

export function StudentCouncil() {
  return (
    <section id="council" className="mx-auto max-w-7xl px-4 py-20">
      <div className="glass overflow-hidden rounded-3xl p-8 ring-glow md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Leadership</div>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              <span className="gradient-text">Student Council</span>
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              The elected voice of the student body. Bridge between students, faculty and administration — driving events, welfare and representation.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Users, t: "Representation", d: "Voice across departments" },
                { icon: Megaphone, t: "Events", d: "Fests, drives, campaigns" },
                { icon: Layers, t: "Structure", d: "President · Secretaries · Reps" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-border bg-card/60 p-4">
                  <x.icon className="h-5 w-5 text-gold" />
                  <div className="mt-2 text-sm font-bold">{x.t}</div>
                  <div className="text-[11px] text-muted-foreground">{x.d}</div>
                </div>
              ))}
            </div>
            <a href="https://www.instagram.com/amritastudentcouncil/" target="_blank" rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
              <Instagram className="h-4 w-4" /> @amritastudentcouncil
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/30 via-gold/20 to-transparent blur-2xl" />
            <div className="glass rounded-3xl p-6">
              <div className="text-[10px] uppercase tracking-widest text-gold">Org structure</div>
              <div className="mt-4 space-y-2 text-sm">
                {[
                  { lvl: 0, n: "President" },
                  { lvl: 1, n: "Vice President" },
                  { lvl: 2, n: "General Secretary" },
                  { lvl: 3, n: "Cultural · Tech · Sports Secretaries" },
                  { lvl: 4, n: "Class Representatives" },
                ].map((r) => (
                  <div key={r.n} style={{ marginLeft: r.lvl * 14 }} className="flex items-center gap-2 rounded-xl border border-border bg-card/50 px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {r.n}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
