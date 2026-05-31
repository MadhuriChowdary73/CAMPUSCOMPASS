import { ArrowUp, Compass } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

const clubs = [
  ["Chakravyuha", "https://www.instagram.com/chakravyuha_avv/"],
  ["Relu", "https://www.instagram.com/relu_avv/"],
  ["Prachurya", "https://www.instagram.com/prachurya_avv/"],
  ["Robotics", "https://www.instagram.com/roboticsclub.avv/"],
  ["Drsya", "https://www.instagram.com/drsya__av/"],
  ["Advika", "https://www.instagram.com/advika_avv/"],
  ["Saptaswara", "https://www.instagram.com/saptaswara_av/"],
  ["Nrityasparsh", "https://www.instagram.com/nrityasparsh_av/"],
  ["Avisruta", "https://www.instagram.com/avisruta_avv/"],
];

export function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-7xl px-4 pb-10">
      <div className="glass rounded-3xl p-8 ring-glow">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground"><Compass className="h-5 w-5" /></div>
              <div>
                <div className="font-display text-lg font-bold">Campus Compass 2026</div>
                <div className="text-xs text-muted-foreground">Fresher OS · Amrita Vishwa Vidyapeetham, Amaravati</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A student-built onboarding platform. Not officially affiliated. Information is community-curated for the 2026 batch.
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-gold">Council</div>
            <a href="https://www.instagram.com/amritastudentcouncil/" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm hover:text-primary">
              <InstagramIcon className="h-4 w-4" /> @amritastudentcouncil
            </a>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-gold">Clubs</div>
            <ul className="mt-3 grid grid-cols-2 gap-1 text-xs">
              {clubs.map(([n, u]) => (
                <li key={n}><a className="text-muted-foreground hover:text-primary" href={u} target="_blank" rel="noreferrer">{n}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5 text-xs text-muted-foreground">
          <div>© 2026 Campus Compass · Built for freshers, by students.</div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 hover:text-foreground">
            <ArrowUp className="h-3.5 w-3.5" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
