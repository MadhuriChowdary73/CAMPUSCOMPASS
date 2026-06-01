import { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/icons/InstagramIcon";
import reluLogo from "@/assets/relu.png";
import roboticsLogo from "@/assets/robotics.png";
import avisrutaLogo from "@/assets/avisruta.png";
import chakravyuhaLogo from "@/assets/chakravyuha.png";
import prachuryaLogo from "@/assets/prachurya.png";
import drsyaLogo from "@/assets/drsya.png";
import advikaLogo from "@/assets/advika.png";
import saptaswaraLogo from "@/assets/saptaswara.png";
import nrityasparshLogo from "@/assets/nrityasparsh.png";
import councilLogo from "@/assets/student-council.png";

const clubs = [
  {
    name: "Relu",
    tag: "AI / ML",
    logo: reluLogo,
    desc: "Refining Logic & Unleashing AI — workshops and projects in AI/ML.",
    ig: "https://www.instagram.com/relu_avv/",
    grad: "from-primary/50 to-primary/10",
  },
  {
    name: "Robotics Club",
    tag: "Robotics",
    logo: roboticsLogo,
    desc: "Build bots, learn embedded systems, compete in robotics events.",
    ig: "https://www.instagram.com/roboticsclub.avv/",
    grad: "from-primary/60 to-primary/10",
  },
  {
    name: "Avisruta",
    tag: "Sports",
    logo: avisrutaLogo,
    desc: "Campus sports club — tournaments, training and inter-college fixtures.",
    ig: "https://www.instagram.com/avisruta_avv/",
    grad: "from-primary/60 to-primary/20",
  },
  {
    name: "Chakravyuha",
    tag: "Hackathons",
    logo: chakravyuhaLogo,
    desc: "Hackathons and problem-solving skills — coding contests and challenges.",
    ig: "https://www.instagram.com/chakravyuha_avv/",
    grad: "from-primary/60 to-gold/30",
  },
  {
    name: "Prachurya",
    tag: "Tech Events",
    logo: prachuryaLogo,
    desc: "Conducts tech events, talks and developer meetups on campus.",
    ig: "https://www.instagram.com/prachurya_avv/",
    grad: "from-gold/50 to-primary/20",
  },
  
  {
    name: "Drsya",
    tag: "Media",
    logo: drsyaLogo,
    desc: "Media club — photography, videography and campus coverage.",
    ig: "https://www.instagram.com/drsya__av/",
    grad: "from-gold/40 to-primary/30",
  },
  {
    name: "Advika",
    tag: "Art",
    logo: advikaLogo,
    desc: "Art club — painting, sketching, design and creative showcases.",
    ig: "https://www.instagram.com/advika_avv/",
    grad: "from-primary/40 to-gold/40",
  },
  {
    name: "Saptaswara",
    tag: "Singing",
    logo: saptaswaraLogo,
    desc: "Singing club — vocals, choir, open mics and music nights.",
    ig: "https://www.instagram.com/saptaswara_av/",
    grad: "from-gold/50 to-gold/10",
  },
  {
    name: "Nrityasparsh",
    tag: "Dance",
    logo: nrityasparshLogo,
    desc: "Dance club — choreography, performances and dance workshops.",
    ig: "https://www.instagram.com/nrityasparsh_av/",
    grad: "from-primary/50 to-gold/30",
  },
  {
    name: "Student Council",
    tag: "Council",
    logo: councilLogo,
    desc: "Official Amrita Student Council — leadership, events & student voice.",
    ig: "https://www.instagram.com/amritastudentcouncil/",
    grad: "from-primary/70 to-gold/40",
  },
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
        <div className="overflow-hidden rounded-2xl">
            <img
              src={chakravyuhaLogo}
              alt="Chakravyuha"
              className="h-full w-full object-cover"
            />
        </div>
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
              <div
                  className={`flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${c.grad} p-4`}
              >
                <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-white bg-white shadow-md">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gold">{c.tag}</div>
              <div className="font-display text-base font-bold">{c.name}</div>
              <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{c.desc}</p>
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
