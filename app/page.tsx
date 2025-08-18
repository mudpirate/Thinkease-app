import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testinomials";
import FAQSection from "@/components/faq";

export default function Home() {
  return (
    <>
      <div className="dark:bg-black ">
        <Hero />
        <Section />
        <FAQSection />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
