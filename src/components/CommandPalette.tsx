import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";

const targets = [
  { t: "Explore Campus", h: "#explore" },
  { t: "Academic Block", h: "#explore" },
  { t: "Canteen", h: "#explore" },
  { t: "Boys Hostel", h: "#explore" },
  { t: "Girls Hostel", h: "#explore" },
  { t: "Mess timings", h: "#explore" },
  { t: "Sports Ground", h: "#explore" },
  { t: "First day tour", h: "#explore" },
  { t: "MyAmrita Portal", h: "#portals" },
  { t: "AUMS Amaravati", h: "#portals" },
  { t: "Amrita Student App", h: "#portals" },
  { t: "Which portal to use", h: "#portals" },
  { t: "Portal tutorials", h: "#portals" },
  { t: "Clubs", h: "#clubs" },
  { t: "Club Finder Quiz", h: "#quiz" },
  { t: "Student Council", h: "#council" },
  { t: "CGPA Calculator", h: "#cgpa" },
  { t: "SGPA Calculator", h: "#cgpa" },
  { t: "Academic Journey", h: "#academic" },
  { t: "Tech Toolkit", h: "#toolkit" },
  { t: "Survival Kit", h: "#survival" },
  { t: "Mental Wellness", h: "#survival" },
  { t: "First Month Roadmap", h: "#first-month" },
  { t: "FAQ", h: "#faq" },
  { t: "Resources", h: "#resources" },
];

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  const filtered = targets.filter((t) => t.t.toLowerCase().includes(q.toLowerCase())).slice(0, 8);

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-background/70 p-4 pt-24 backdrop-blur" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="glass w-full max-w-lg rounded-2xl p-2 ring-glow">
        <div className="flex items-center gap-2 px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search the OS..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          <button onClick={onClose} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-accent"><X className="h-4 w-4" /></button>
        </div>
        <div className="max-h-80 overflow-y-auto p-1">
          {filtered.map((f) => (
            <a key={f.t} href={f.h} onClick={onClose} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm hover:bg-accent">
              <span>{f.t}</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{f.h}</span>
            </a>
          ))}
          {filtered.length === 0 && <div className="px-3 py-6 text-center text-sm text-muted-foreground">No results.</div>}
        </div>
      </div>
    </div>
  );
}
