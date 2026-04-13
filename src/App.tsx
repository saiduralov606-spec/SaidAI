/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar, Hero, ProofSection, About, Services, HowItWorks, VideoDemo, Project, CTA, Footer } from "./components/Portfolio";
import DashboardUI from "./components/DashboardUI";

export default function App() {
  const [view, setView] = useState<"landing" | "dashboard">("landing");

  if (view === "dashboard") {
    return <DashboardUI onBackToWebsite={() => setView("landing")} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar onDashboardClick={() => setView("dashboard")} />
      <main>
        <Hero />
        <ProofSection />
        <About />
        <Services />
        <HowItWorks />
        <VideoDemo />
        <Project />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
