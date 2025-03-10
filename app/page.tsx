import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TeamSection from "@/components/team-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GuardianRing | Smart Safety for Women",
  description:
    "A smart ring designed for women's safety with emergency alerts, GPS tracking, and mobile app integration.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
      <Footer />
    </main>
  )
}

