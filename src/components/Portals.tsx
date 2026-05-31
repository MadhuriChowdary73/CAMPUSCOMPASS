import { ExternalLink, Wallet, ClipboardList, Smartphone, HelpCircle, CheckCircle2 } from "lucide-react";

const portals = [
  {
    name: "MyAmrita Portal",
    tag: "Individual Fee Payment · Profile",
    desc: "All details of your individual fee payment — semester fees, hostel, mess, transport. Download receipts and track dues.",
    color: "from-primary/40 to-primary/10",
    url: "https://my.amrita.edu/index/login",
    icon: Wallet,
    fns: ["Individual Fee Payment", "Pending Dues", "Payment History", "Download Receipts", "Student Profile", "Hostel / Mess Fees", "Notifications"],
  },
  {
    name: "AUMS Amaravati",
    tag: "Exams · Results · Hall Tickets",
    desc: "The exams portal — CIA marks, lab test marks, mid-sem, end-sem results, hall tickets and attendance summary published by faculty.",
    color: "from-gold/40 to-gold/10",
    url: "https://aumscn.amrita.edu/cas/login?service=https%3A%2F%2Faumscn.amrita.edu%2Faums%2FJsp%2FCore_Common%2Findex.jsp",
    icon: ClipboardList,
    fns: ["CIA Marks", "Lab Test Marks", "Mid-Sem Results", "End-Sem Results", "Hall Tickets", "Course Registration", "Faculty Info"],
  },
  {
    name: "Amrita Student App",
    tag: "Attendance · Gate Pass",
    desc: "Mobile app for daily campus life — live attendance %, gate pass requests for leaving campus, and instant student updates.",
    color: "from-primary/30 to-gold/20",
    url: "#",
    icon: Smartphone,
    fns: ["Live Attendance %", "Subject-wise Attendance", "Gate Pass Requests", "Leave Approval Status", "Push Notifications", "Student Updates"],
  },
];

const decision = [
  { q: "Need Fee Payment?", a: "MyAmrita" },
  { q: "Need Results?", a: "AUMS" },
  { q: "Need CIA Marks?", a: "AUMS" },
  { q: "Need Attendance?", a: "Student App" },
  { q: "Need Gate Pass?", a: "Student App" },
];

const tutorials = [
  "How to Pay Fees",
  "How to Check CIA Marks",
  "How to Check Results",
  "How to Track Attendance",
  "How to Request Gate Pass",
];

export function Portals() {
  return (
    <section id="portals" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Digital Ecosystem</div>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Student <span className="gradient-text">Digital Ecosystem</span></h2>
        <p className="mt-2 text-muted-foreground">Three apps run your academic life. Here's how each one fits.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {portals.map((p) => (
          <div key={p.name} className="glass flex flex-col rounded-3xl p-5 ring-glow">
            <div className={`grid aspect-[16/9] place-items-center overflow-hidden rounded-2xl bg-gradient-to-br ${p.color}`}>
              <p.icon className="h-14 w-14 text-foreground/80" />
            </div>
            <div className="mt-4">
              <div className="text-[10px] uppercase tracking-widest text-gold">{p.tag}</div>
              <div className="font-display text-xl font-bold">{p.name}</div>
              <p className="mt-1.5 text-xs text-muted-foreground">{p.desc}</p>
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
              {p.fns.map((f) => <li key={f} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-primary" />{f}</li>)}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">
                Open Portal <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Decision tree */}
      <div className="mt-12">
        <div className="glass rounded-3xl p-6 ring-glow">
          <div className="flex items-center gap-2 text-gold"><HelpCircle className="h-4 w-4" /><div className="text-[10px] uppercase tracking-widest">Decision tree</div></div>
          <h3 className="mt-2 font-display text-2xl font-bold">Which portal should I use?</h3>
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {decision.map((d) => (
              <div key={d.q} className="flex items-center justify-between rounded-xl border border-border bg-card/60 px-4 py-3">
                <span className="text-sm">{d.q}</span>
                <span className="rounded-lg bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary">{d.a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
