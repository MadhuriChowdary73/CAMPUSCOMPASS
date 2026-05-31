import { Download, BookOpen, MapPin, GraduationCap, Folder } from "lucide-react";

const docs = [
  { icon: BookOpen, t: "Fresher Guide", d: "Everything to know in week 1" },
  { icon: MapPin, t: "Campus Guide", d: "Locations, timings, contacts" },
  { icon: GraduationCap, t: "Academic Guide", d: "Schedule · CIA · labs · ESE" },
  { icon: Folder, t: "Important Resources", d: "Forms, links, quick refs" },
];

export function Resources() {
  return (
    <section id="resources" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Downloads</div>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Resource <span className="gradient-text">center</span></h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {docs.map((d) => (
          <div key={d.t} className="glass group flex flex-col gap-4 rounded-2xl p-5 ring-glow">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
              <d.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-base font-bold">{d.t}</div>
              <div className="text-xs text-muted-foreground">{d.d}</div>
            </div>
            <button className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition group-hover:bg-gold group-hover:text-gold-foreground">
              <Download className="h-3.5 w-3.5" /> Download PDF
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
