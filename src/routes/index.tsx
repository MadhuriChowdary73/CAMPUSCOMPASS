import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ExploreCampus } from "@/components/ExploreCampus";
import { AcademicJourney } from "@/components/AcademicJourney";
import { Portals } from "@/components/Portals";
import { Clubs } from "@/components/Clubs";
import { StudentCouncil } from "@/components/StudentCouncil";
import { CGPAHub } from "@/components/CGPAHub";
import { TechToolkit } from "@/components/TechToolkit";
import { SurvivalKit } from "@/components/SurvivalKit";
import { FirstMonth } from "@/components/FirstMonth";
import { FAQ } from "@/components/FAQ";
import { LifeAtAmrita } from "@/components/LifeAtAmrita";

import { Ticker } from "@/components/Ticker";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Campus Compass 2026 — Fresher OS for Amrita Amaravati" },
      { name: "description", content: "Interactive campus map, student portals, clubs, CGPA hub and survival kit for the 2026 Amrita Amaravati batch." },
      { property: "og:title", content: "Campus Compass 2026 — Fresher OS for Amrita Amaravati" },
      { property: "og:description", content: "Your premium onboarding platform — campus, portals, clubs and academics in one place." },
    ],
  }),
  component: Index,
});

function Index() {
  const [search, setSearch] = useState(false);
  return (
    <main className="min-h-screen">
      <Header onSearch={() => setSearch(true)} />
      <CommandPalette open={search} onClose={() => setSearch(false)} />
      <Hero />
      <ExploreCampus />
      <AcademicJourney />
      <Portals />
      <Clubs />
      <StudentCouncil />
      <CGPAHub />
      <TechToolkit />
      <SurvivalKit />
      <FirstMonth />
      <Ticker />
      <FAQ />
      <LifeAtAmrita />
      <Footer />
    </main>
  );
}
