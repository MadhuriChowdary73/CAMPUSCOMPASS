import { Link } from "@tanstack/react-router";
import { Compass, Moon, Sun, Search } from "lucide-react";
import { useTheme } from "@/lib/theme";

const nav = [
  { href: "#explore", label: "Explore" },
  { href: "#portals", label: "Portals" },
  { href: "#clubs", label: "Clubs" },
  { href: "#cgpa", label: "CGPA" },
  { href: "#survival", label: "Survival Kit" },
  { href: "#faq", label: "FAQ" },
  { href: "#life", label: "Life" },
];

export function Header({ onSearch }: { onSearch: () => void }) {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-2.5 ring-glow">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Compass className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm font-bold">Campus Compass</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">2026 · Amaravati</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={onSearch} aria-label="Search" className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition hover:text-foreground">
              <Search className="h-4 w-4" />
            </button>
            <button onClick={toggle} aria-label="Toggle theme" className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition hover:text-foreground">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
