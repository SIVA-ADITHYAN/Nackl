import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Trust from "@/components/Trust";
import Tribes from "@/components/Tribes";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <Features />
        <Trust />
        <Tribes />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
