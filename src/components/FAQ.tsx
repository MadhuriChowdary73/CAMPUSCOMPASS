import { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const faqs = [
  { q: "What time do hostel gates close?", a: "Girls Hostel ~ 8:00–8:30 PM. Boys Hostel ~ 8:45–9:00 PM." },
  { q: "When is lunch at the mess?", a: "Lunch is served 1:20 PM – 2:10 PM. Don't miss the window." },
  { q: "Which portal shows my CIA marks?", a: "AUMS Amaravati. MyAmrita is for fees and profile only." },
  { q: "Where do I request a gate pass?", a: "On the Amrita Student App." },
  { q: "Is non-veg food allowed in hostel?", a: "No. Non-veg and outside food are not allowed inside hostels." },
  { q: "How many exams per semester?", a: "Continuous CIA + lab tests (frequency varies) + 1 mid-sem + 1 end-sem (ESE)." },
  { q: "Are kettles allowed in hostel rooms?", a: "No. Kettles and personal cooking appliances are not permitted." },
  { q: "When is laundry day?", a: "Girls Hostel: Fri & Sat. Boys Hostel: weekends. Ironing is charged extra." },
  { q: "Where can I play sports?", a: "Sports ground — football, cricket, basketball, volleyball. Open till ~7 PM." },
  { q: "Most popular canteen dish?", a: "Masala Dosa, hands down. Egg + non-veg also available." },
];

export function FAQ() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<number | null>(0);
  const filtered = useMemo(() => faqs.filter((f) => (f.q + f.a).toLowerCase().includes(q.toLowerCase())), [q]);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">FAQ Center</div>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Quick <span className="gradient-text">answers</span></h2>
        </div>
        <div className="glass flex w-full max-w-sm items-center gap-2 rounded-xl px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search questions..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </div>
      </div>

      <div className="space-y-2">
        {filtered.map((f, i) => (
          <div key={f.q} className="glass overflow-hidden rounded-2xl">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
              <span className="font-semibold">{f.q}</span>
              <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <div className="px-5 pb-4 text-sm text-muted-foreground">{f.a}</div>}
          </div>
        ))}
        {filtered.length === 0 && <div className="glass rounded-2xl p-6 text-center text-sm text-muted-foreground">No matches. Try different keywords.</div>}
      </div>
    </section>
  );
}
