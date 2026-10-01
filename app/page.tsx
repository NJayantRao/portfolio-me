import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/hero/hero";
import { WhatIBuild } from "@/components/sections/what-i-build";
import { WorkSection } from "@/components/work/work-section";
import { LabSection } from "@/components/lab/lab-section";
import { TechStack } from "@/components/stack/tech-stack";
import { JourneySection } from "@/components/journey/journey-section";
import { CurrentlySection } from "@/components/journey/currently-section";
import { WritingSection } from "@/components/writing/writing-section";
import { GithubSection } from "@/components/github/github-section";
import { ContactSection } from "@/components/contact/contact-section";
import { ClosingCta } from "@/components/contact/closing-cta";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhatIBuild />
        <WorkSection />
        <LabSection />
        <TechStack />
        <JourneySection />
        <CurrentlySection />
        <WritingSection />
        <GithubSection />
        <ContactSection />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
