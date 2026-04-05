import { motion } from "framer-motion";
import {
  FiMapPin,
  FiBell,
  FiUsers,
  FiClock,
  FiBattery,
  FiShield,
} from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { useState } from "react";
import SectionHeader from "../components/ui/SectionHeader";
import { featuresData } from "../data/featuresData";

const iconMap = {
  alert: <IoAlertCircleOutline />,
  battery: <FiBattery />,
  bell: <FiBell />,
  clock: <FiClock />,
  language: <MdLanguage />,
  locationMarker: <HiOutlineLocationMarker />,
  mapPin: <FiMapPin />,
  shield: <FiShield />,
  users: <FiUsers />,
};

export default function FeaturesSection() {
  const [showAll, setShowAll] = useState(false);

  const mainFeatures = featuresData.slice(0, 6);
  const remainingFeatures = featuresData.slice(6);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <SectionHeader
            title="Everything You Need for"
            highlight="Complete Peace of Mind"
            description="Powerful features designed to keep your family safe and connected, wherever they are in the world."
          />
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[...mainFeatures, ...(showAll ? remainingFeatures : [])].map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card rounded-3xl p-6 sm:p-8 hover:bg-white/5 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white text-xl sm:text-2xl mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                {iconMap[feature.icon]}
              </div>
              <h3 className="relative text-lg sm:text-xl font-bold mb-3">{feature.title}</h3>
              <p className="relative text-gray-400 text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-left md:text-center mt-12 sm:mt-16"
          >
            <button
              onClick={() => setShowAll(true)}
              className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base bg-[#56FBAC] text-[#0C0E1D] rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#56FBAC]/40"
            >
              Explore All Features
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}