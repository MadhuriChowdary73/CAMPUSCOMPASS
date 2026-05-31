import { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/icons/InstagramIcon";

const clubs = [
  { name: "Relu", tag: "AI / ML", desc: "Refining Logic & Unleashing AI — workshops and projects in AI/ML.", ig: "https://www.instagram.com/relu_avv/", grad: "from-primary/50 to-primary/10" },
  { name: "Robotics Club", tag: "Robotics", desc: "Build bots, learn embedded systems, compete in robotics events.", ig: "https://www.instagram.com/roboticsclub.avv/", grad: "from-primary/60 to-primary/10" },
  { name: "Avisruta", tag: "Sports", desc: "Campus sports club — tournaments, training and inter-college fixtures.", ig: "https://www.instagram.com/avisruta_avv/", grad: "from-primary/60 to-primary/20" },
  { name: "Chakravyuha", tag: "Hackathons", desc: "Hackathons and problem-solving skills — coding contests and challenges.", ig: "https://www.instagram.com/chakravyuha_avv/", grad: "from-primary/60 to-gold/30" },
  { name: "Prachurya", tag: "Tech Events", desc: "Conducts tech events, talks and developer meetups on campus.", ig: "https://www.instagram.com/prachurya_avv/", grad: "from-gold/50 to-primary/20" },
  { name: "Raksha", tag: "Announcements", desc: "Club announcements and official student club communications hub.", ig: "#", grad: "from-gold/40 to-primary/40" },
  { name: "Drsya", tag: "Media", desc: "Media club — photography, videography and campus coverage.", ig: "https://www.instagram.com/drsya__av/", grad: "from-gold/40 to-primary/30" },
  { name: "Advika", tag: "Art", desc: "Art club — painting, sketching, design and creative showcases.", ig: "https://www.instagram.com/advika_avv/", grad: "from-primary/40 to-gold/40" },
  { name: "Saptaswara", tag: "Singing", desc: "Singing club — vocals, choir, open mics and music nights.", ig: "https://www.instagram.com/saptaswara_av/", grad: "from-gold/50 to-gold/10" },
  { name: "Nrityasparsh", tag: "Dance", desc: "Dance club — choreography, performances and dance workshops.", ig: "https://www.instagram.com/nrityasparsh_av/", grad: "from-primary/50 to-gold/30" },
  { name: "Student Council", tag: "Council", desc: "Official Amrita Student Council — leadership, events & student voice.", ig: "https://www.instagram.com/amritastudentcouncil/", grad: "from-primary/70 to-gold/40" },
];

const quiz = [
  { q: "Pick a vibe", opts: [{ l: "Build stuff", v: ["Robotics Club", "Relu", "Advika"] }, { l: "Perform", v: ["Saptaswara", "Nrityasparsh", "Drsya"] }, { l: "Compete", v: ["Avisruta", "Chakravyuha"] }, { l: "Organise", v: ["Prachurya", "Student Council", "Raksha"] }] },
  { q: "Weekend energy", opts: [{ l: "Lab / code", v: ["Relu", "Chakravyuha", "Robotics Club"] }, { l: "Stage / studio", v: ["Saptaswara", "Nrityasparsh"] }, { l: "Field", v: ["Avisruta"] }, { l: "Camera / art", v: ["Drsya", "Advika"] }] },
];

export function Clubs() {
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<string[][]>([]);
  const result = picks.flat();
  const tally: Record<string, number> = {};
  result.forEach((r) => (tally[r] = (tally[r] || 0) + 1));
  const ranked = Object.entries(tally).sort((a, b) => b[1] - a[1]).slice(0, 3).map((x) => x[0]);

  return (
    <section id="clubs" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Clubs Ecosystem</div>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Find your <span className="gradient-text">people</span></h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">10 student-led clubs. Follow on Instagram for auditions, jams, hackathons and meetups.</p>
      </div>

      {/* Spotlight */}
      <div className="glass mb-8 grid items-center gap-6 rounded-3xl p-6 ring-glow md:grid-cols-[1fr_2fr]">
        <div className="grid aspect-square place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/60 to-gold/30 text-6xl">⚡</div>
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold"><Sparkles className="h-3 w-3" /> Featured spotlight</div>
          <div className="mt-1 font-display text-2xl font-bold">Chakravyuha · Hackathons & Problem Solving</div>
          <p className="mt-2 text-sm text-muted-foreground">Hackathons, coding contests, problem-solving sessions and DSA challenges. Beginner-friendly — sharpen your skills with active student-led events.</p>
          <a href="https://www.instagram.com/chakravyuha_avv/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            <Instagram className="h-4 w-4" /> Follow @chakravyuha_avv
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {clubs.map((c) => (
          <div key={c.name} className="glass group flex flex-col gap-3 rounded-2xl p-4 transition hover:-translate-y-1">
            <div className={`grid aspect-[4/3] place-items-center overflow-hidden rounded-xl bg-gradient-to-br ${c.grad} text-3xl font-bold text-white/90`}>
              {c.name.charAt(0)}
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gold">{c.tag}</div>
              <div className="font-display text-base font-bold">{c.name}</div>
            </div>
            <div className="mt-auto flex gap-2">
              <a href={c.ig} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-2.5 py-1.5 text-xs font-semibold text-primary-foreground">
                <Instagram className="h-3.5 w-3.5" /> Instagram
              </a>
              <button className="inline-flex items-center justify-center gap-1 rounded-xl border border-border bg-card px-2.5 py-1.5 text-xs font-semibold">
                Explore <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quiz */}
      <div id="quiz" className="glass mt-10 rounded-3xl p-6 ring-glow">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-gold">Club finder quiz</div>
            <h3 className="mt-1 font-display text-2xl font-bold">{step < quiz.length ? quiz[step].q : "Your matches"}</h3>
          </div>
          <div className="text-xs text-muted-foreground">{Math.min(step + 1, quiz.length)} / {quiz.length}</div>
        </div>

        {step < quiz.length ? (
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quiz[step].opts.map((o) => (
              <button key={o.l} onClick={() => { setPicks([...picks, o.v]); setStep(step + 1); }}
                className="rounded-2xl border border-border bg-card/70 p-4 text-left text-sm font-semibold transition hover:border-primary hover:bg-accent">
                {o.l}
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-5 flex flex-wrap gap-3">
            {ranked.map((r) => (
              <span key={r} className="rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary">{r}</span>
            ))}
            <button onClick={() => { setPicks([]); setStep(0); }} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold">Retake</button>
          </div>
        )}
      </div>
    </section>
  );
}
