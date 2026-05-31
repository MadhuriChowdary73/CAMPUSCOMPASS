import hero from "@/assets/hero-campus.svg";
import { ArrowRight, Sparkles, MapPin, GraduationCap, Users, BookOpen, Calculator, ShieldCheck } from "lucide-react";

const stats = [
  { value: "8+", label: "Locations mapped" },
  { value: "10", label: "Student clubs" },
  { value: "3", label: "Core portals" },
  { value: "1", label: "OS for freshers" },
];

const quick = [
  { icon: MapPin, label: "Explore Campus", href: "#explore" },
  { icon: GraduationCap, label: "Student Portals", href: "#portals" },
  { icon: Users, label: "Clubs", href: "#clubs" },
  { icon: BookOpen, label: "Academic Guide", href: "#academic" },
  { icon: Calculator, label: "CGPA Center", href: "#cgpa" },
  { icon: ShieldCheck, label: "Survival Kit", href: "#survival" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="animate-[fade-up_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> The Fresher Operating System
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
              Welcome to <span className="gradient-text">Amrita Amaravati</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              One premium interface for your campus, portals, clubs, academics, and survival. Built for the 2026 batch — designed like the apps you actually use.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#explore" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:translate-y-[-1px]">
                Explore Campus <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a href="#portals" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:bg-accent">
                Quick Start
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4">
                  <div className="font-display text-2xl font-bold text-foreground">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-gold/20 to-transparent blur-2xl" />
            <div className="glass overflow-hidden rounded-[2rem] ring-glow">
              <img src={hero} alt="Amrita Amaravati campus illustration" width={1536} height={896} className="h-full w-full object-cover" />
            </div>
            <div className="glass absolute -bottom-4 -left-4 hidden rounded-2xl px-4 py-3 md:block">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Live</div>
              <div className="font-display text-sm font-semibold">Campus dashboard online</div>
            </div>
          </div>
        </div>

        <div id="dashboard" className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {quick.map((q) => (
            <a key={q.label} href={q.href} className="glass group flex flex-col items-start gap-3 rounded-2xl p-4 transition hover:-translate-y-1 hover:ring-glow">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <q.icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold">{q.label}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
