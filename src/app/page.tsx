"use client";

import SectionDivider from "@/components/SectionDivider";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DemoAgenda from "@/components/DemoAgenda";
import ForWho from "@/components/ForWho";
import Results from "@/components/Results";
import TrustLogos from "@/components/TrustLogos";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Guarantee from "@/components/Guarantee";
import CTA from "@/components/CTA";

export default function Page() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <DemoAgenda />
      <SectionDivider />
      <ForWho />
      <SectionDivider />
      <Results />
      <TrustLogos />
      <Testimonials />
       <Pricing />
      <Team />
      <FAQ />
      <Guarantee />
      <CTA />
    </main>
  );
}