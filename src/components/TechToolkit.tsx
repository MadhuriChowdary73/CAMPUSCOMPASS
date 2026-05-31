import { Code2, Brain, Sparkles, Wrench, ListTodo, ArrowRight } from "lucide-react";

const cats = [
  { icon: Code2, t: "Coding Platforms", items: ["LeetCode", "HackerRank", "CodeChef", "Codeforces"] },
  { icon: Brain, t: "Learning Platforms", items: ["Coursera", "NPTEL", "freeCodeCamp", "YouTube"] },
  { icon: Sparkles, t: "AI Tools", items: ["ChatGPT", "Claude", "Cursor", "Lovable"] },
  { icon: Wrench, t: "Development", items: ["VS Code", "GitHub", "Vercel", "Postman"] },
  { icon: ListTodo, t: "Productivity", items: ["Notion", "Obsidian", "Todoist", "Google Calendar"] },
];

const roadmap = ["Fresher", "Clubs", "Projects", "Hackathons", "Open Source", "Internships", "Placements"];

export function TechToolkit() {
  return (
    <section id="toolkit" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Build your edge</div>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Tech <span className="gradient-text">Toolkit</span></h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {cats.map((c) => (
          <div key={c.t} className="glass rounded-2xl p-5 ring-glow">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
              <c.icon className="h-5 w-5" />
            </div>
            <div className="mt-3 font-display text-base font-bold">{c.t}</div>
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
              {c.items.map((i) => <li key={i}>· {i}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Growth pathway</div>
        <h3 className="mt-4 font-display text-3xl font-bold">Opportunity <span className="gradient-text">Roadmap</span></h3>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {roadmap.map((r, i) => (
            <div key={r} className="flex items-center gap-2">
              <div className={`glass rounded-2xl px-4 py-2.5 text-sm font-semibold ${i === 0 ? "ring-1 ring-primary" : ""}`}>{r}</div>
              {i < roadmap.length - 1 && <ArrowRight className="h-4 w-4 text-primary" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
