import { useState } from "react";
import { X, Camera, Heart } from "lucide-react";

import life1 from "@/assets/life-1.jpg";
import life2 from "@/assets/life-2.jpg";
import life3 from "@/assets/life-3.jpg";
import life4 from "@/assets/life-4.jpg";
import life5 from "@/assets/life-5.jpg";
import life6 from "@/assets/life-6.jpg";

type Photo = {
  src: string;
  caption: string;
  span: string;
};

const photos: Photo[] = [
  { src: life1, caption: "Campus mornings — where every day begins", span: "col-span-2 row-span-2" },
  { src: life2, caption: "Study sessions & late-night laughs", span: "col-span-1 row-span-1" },
  { src: life3, caption: "On the court — energy never stops", span: "col-span-1 row-span-1" },
  { src: life4, caption: "Cultural nights that light up memories", span: "col-span-2 row-span-1" },
  { src: life5, caption: "Hostel life — the real college bond", span: "col-span-1 row-span-2" },
  { src: life6, caption: "Squad goals — friendships for life", span: "col-span-2 row-span-1" },
];

export function LifeAtAmrita() {
  const [open, setOpen] = useState<Photo | null>(null);

  return (
    <section id="life" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
          <Camera className="h-3.5 w-3.5" /> Moments
        </div>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
          Life at <span className="gradient-text">Amrita Amaravati</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          A glimpse into the moments that make this campus home — from sunrise walks to midnight talks.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => setOpen(p)}
            className={`group relative overflow-hidden rounded-2xl ring-1 ring-border transition hover:ring-primary/40 ${p.span}`}
          >
            <img
              src={p.src}
              alt={p.caption}
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 text-left opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-medium text-white drop-shadow">{p.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setOpen(null)}
        >
          <div className="relative max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(null)}
              className="absolute -right-3 -top-3 grid h-10 w-10 place-items-center rounded-full bg-card text-foreground shadow-lg ring-1 ring-border hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={open.src}
              alt={open.caption}
              className="max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="flex items-center gap-2 text-lg font-medium text-white">
                <Heart className="h-5 w-5 fill-rose-400 text-rose-400" /> {open.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
