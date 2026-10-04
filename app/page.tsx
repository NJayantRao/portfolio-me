import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/hero/hero";
import { WorkSection } from "@/components/work/work-section";
import { TechStack } from "@/components/stack/tech-stack";
import { JourneySection } from "@/components/journey/journey-section";
import { GithubSection } from "@/components/github/github-section";
import { ClosingCta } from "@/components/contact/closing-cta";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechStack />
        <WorkSection />
        <JourneySection />
        <GithubSection />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
