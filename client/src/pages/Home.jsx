import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SearchSection from "../components/SearchSection";
import FeaturedMentors from "../components/FeaturedMentors";
import HowItWorks from "../components/HowItWorks";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <SearchSection />
      <FeaturedMentors />
      <HowItWorks />
      <Categories />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;