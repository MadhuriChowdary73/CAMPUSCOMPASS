const tips = [
  "🎓 Welcome to Amrita Amaravati — Batch of 2026",
  "📍 Hostel gates close 8:30 PM (Girls) · 9:00 PM (Boys)",
  "🍽️ Mess lunch 1:20 – 2:10 PM",
  "📚 Check AUMS for CIA marks & results",
  "💳 Pay fees on MyAmrita Portal",
  "🤖 Follow @relu_avv for AI workshops",
  "📸 Drsya is open for all photography lovers",
  "⚽ Sports Ground open till 7 PM",
  "🛡️ Chakravyuha — beginner-friendly cybersecurity club",
  "📱 Use the Amrita Student App for attendance & gate pass",
];

export function Ticker() {
  const items = [...tips, ...tips];
  return (
    <div className="my-12 border-y border-border bg-card/40 py-3">
      <div className="overflow-hidden">
        <div className="flex w-max gap-10 animate-marquee whitespace-nowrap">
          {items.map((t, i) => (
            <span key={i} className="text-sm text-muted-foreground">
              <span className="mx-3 text-gold">◆</span>{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
