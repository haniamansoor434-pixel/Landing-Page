import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import PageBackground from "../layout/PageBackground";
import CtaSection from "../sections/CtaSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import SecuritySection from "../sections/SecuritySection";
import TrustSection from "../sections/TrustSection";
import WhyLocafiiSection from "../sections/WhyLocafiiSection";

export default function LandingPage() {
    return (
        <div className="relative overflow-hidden">
            <PageBackground />
            <Navbar />
            <HeroSection />
            <TrustSection />
            <FeaturesSection />
            <WhyLocafiiSection />
            <HowItWorksSection />
            <SecuritySection />
            <CtaSection />
            <Footer />
        </div>
    );
}
