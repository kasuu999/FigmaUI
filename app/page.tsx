import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PopularDishes from "@/components/PopularDishes";
import Testimonial from "@/components/Testimonial";
import Services from "@/components/Services";
import CulinaryJourney from "@/components/CulinaryJourney";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <PopularDishes />
      <Testimonial />
      <Services />
      <CulinaryJourney />
      <Footer />
    </main>
  );
}