import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import WhyUs from "@/components/WhyUs";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import { coordinates } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Restaurante Píri Píri",
  servesCuisine: ["Frango na brasa", "Moçambicana", "Portuguesa", "Marisco"],
  priceRange: "800 - 1400 MZN",
  telephone: "+258846724350",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. 24 de Julho",
    addressLocality: "Maputo",
    addressCountry: "MZ",
  },
  geo: { "@type": "GeoCoordinates", latitude: coordinates.lat, longitude: coordinates.lng },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.0", reviewCount: "1341" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    closes: "02:00",
  },
  hasMenu: { "@type": "Menu", name: "Menu Píri Píri" },
  acceptsReservations: "False",
  sameAs: [
    "https://www.facebook.com/restaurantepiripirimaputo/",
    "https://www.instagram.com/restaurantepiripirimaputo",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader />
      <Cursor />
      <SmoothScroll />
      <Nav />
      <main className="relative overflow-hidden">
        <Hero />
        <Specialties />
        <WhyUs />
        <MenuSection />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
