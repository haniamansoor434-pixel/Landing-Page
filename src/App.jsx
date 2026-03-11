import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import Features from "./components/Features";
import WhySafeTrack from "./components/WhySafeTrack";
import HowItWorks from "./components/HowItWorks";
import Security from "./components/Security";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Navbar />
      <Hero />
      <TrustSection />
      <Features />
      <WhySafeTrack />
      <HowItWorks />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
}