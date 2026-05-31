import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, X, Lightbulb } from "lucide-react";
import mapImg from "@/assets/campus-map.png";

type Spot = {
  id: string;
  name: string;
  x: number; // %
  y: number; // %
  tag: string;
  facts: string[];
  tip?: string;
};

const spots: Spot[] = [
  { id: "academic", name: "Academic Block", x: 42, y: 38, tag: "Classes & Labs", facts: ["Timings ~ 8:45 AM – 5:00 PM", "Schedule varies by department", "Lecture halls, labs & faculty rooms"], tip: "Reach 10 min early on Day 1." },
  { id: "canteen", name: "Canteen", x: 28, y: 50, tag: "Food & hangout", facts: ["Open 8:00 AM – 8:30 PM", "Egg + Non-veg available", "Popular: Masala Dosa"], tip: "Eat in — takeaway to hostel is limited." },
  { id: "boys", name: "Boys Hostel", x: 14, y: 80, tag: "Residence", facts: ["Gate closes ~ 8:45–9:00 PM", "No outside / non-veg food", "No kettles or cooking gear", "Laundry every weekend"] },
  { id: "girls", name: "Girls Hostel", x: 32, y: 80, tag: "Residence", facts: ["Gate closes ~ 8:00–8:30 PM", "No outside / non-veg food", "No kettles or cooking gear", "Laundry Fri & Sat · ironing extra"] },
  { id: "mess", name: "Mess", x: 22, y: 72, tag: "Dining", facts: ["Lunch 1:20 PM – 2:10 PM", "Daily rotating menu", "Veg dining hall"], tip: "Photograph weekly menu near entry." },
  { id: "ground", name: "Sports Ground", x: 58, y: 60, tag: "Play", facts: ["Football, cricket, basketball, volleyball"], tip: "Open till 7 PM — bring your own ball." },
  { id: "library", name: "Library", x: 50, y: 28, tag: "Study", facts: ["Reference + digital section", "Silent zones on upper floors", "Carry ID for entry"] },
  { id: "medical", name: "Medical Centre", x: 72, y: 38, tag: "Health", facts: ["First-aid + on-call doctor", "Save number in your phone"] },
  { id: "admin", name: "Administrative Block", x: 80, y: 28, tag: "Office", facts: ["Fees, ID, hostel admin", "Visit during morning hours"] },
  { id: "clubs", name: "Club Activity Area", x: 64, y: 70, tag: "Culture", facts: ["Practice & meetup zone", "Follow clubs on Instagram for slots"] },
];

const tour = [
  { name: "Main Gate", desc: "Where every story begins. Security, ID check, and the iconic Amrita arch.", emoji: "🚪" },
  { name: "Academic Block", desc: "Classrooms, labs and faculty corridors. Your weekday HQ.", emoji: "🏛️" },
  { name: "Library", desc: "Reference + silent zones. Carry your ID.", emoji: "📚" },
  { name: "Canteen", desc: "Masala dosa, conversations, between-class fuel.", emoji: "🍽️" },
  { name: "Hostel", desc: "Your home base. Know your gate timings.", emoji: "🛏️" },
  { name: "Student Activity Area", desc: "Where clubs rehearse, jam and prep events.", emoji: "🎭" },
];

export function ExploreCampus() {
  const [active, setActive] = useState<Spot | null>(null);
  const [stop, setStop] = useState(0);

  return (
    <section id="explore" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Flagship
        </div>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
          Explore <span className="gradient-text">Amrita Amaravati</span>
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">Click any glowing marker to discover what's there — or take the guided first-day tour.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* MAP PANEL */}
        <div className="glass relative overflow-hidden rounded-3xl p-3 ring-glow">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/30">
            <img src={mapImg} alt="Campus locator map" className="absolute inset-0 h-full w-full object-cover" />
            {spots.map((s) => (
              <button
                key={s.id}
                className="hotspot"
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
                onClick={() => setActive(s)}
                aria-label={s.name}
                title={s.name}
              />
            ))}
            {active && (
              <div className="glass absolute bottom-3 left-3 right-3 max-w-md rounded-2xl p-4 md:left-4 md:right-auto md:bottom-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gold">{active.tag}</div>
                    <div className="font-display text-lg font-bold">{active.name}</div>
                  </div>
                  <button onClick={() => setActive(null)} className="grid h-7 w-7 place-items-center rounded-full bg-card text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /></button>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {active.facts.map((f) => <li key={f} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{f}</li>)}
                </ul>
                {active.tip && (
                  <div className="mt-3 flex items-start gap-2 rounded-xl bg-gold/15 p-2 text-xs text-gold-foreground dark:text-gold">
                    <Lightbulb className="h-4 w-4 shrink-0" />{active.tip}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 px-2 pt-3 text-xs text-muted-foreground">
            <MapPin className="h-4 w-4 text-gold" /> {spots.length} locations · click markers to explore
          </div>
        </div>

        {/* TOUR PANEL */}
        <div className="glass flex flex-col rounded-3xl p-5 ring-glow">
          <div className="text-[10px] uppercase tracking-widest text-gold">First Day Tour</div>
          <div className="mt-1 font-display text-2xl font-bold">Stop {stop + 1} / {tour.length}</div>

          <div className="mt-4 grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/40 via-primary/10 to-gold/20 text-6xl">
            {tour[stop].emoji}
          </div>

          <div className="mt-4">
            <div className="font-display text-lg font-bold">{tour[stop].name}</div>
            <p className="mt-1 text-sm text-muted-foreground">{tour[stop].desc}</p>
          </div>

          <div className="mt-auto flex items-center justify-between pt-5">
            <button onClick={() => setStop((s) => Math.max(0, s - 1))} disabled={stop === 0}
              className="inline-flex items-center gap-1 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium transition disabled:opacity-40">
              <ChevronLeft className="h-4 w-4" /> Prev
            </button>
            <div className="flex gap-1">
              {tour.map((_, i) => <span key={i} className={`h-1.5 w-4 rounded-full transition ${i === stop ? "bg-primary" : "bg-border"}`} />)}
            </div>
            <button onClick={() => setStop((s) => Math.min(tour.length - 1, s + 1))} disabled={stop === tour.length - 1}
              className="inline-flex items-center gap-1 rounded-xl bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition disabled:opacity-40">
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
