import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import MapPreview from "./components/MapPreview";
import Security from "./components/Security";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import "../styles/Landing.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <MapPreview />
      <Security />
      <CTA />
      <Footer />
    </>
  );
}