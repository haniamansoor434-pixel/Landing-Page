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

export default function Features() {
  const [showAll, setShowAll] = useState(false);

  const allFeatures = [
    {
      icon: <FiMapPin />,
      title: "Real-Time Tracking",
      description: "See exact live locations of your family members on an interactive map in real-time.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiUsers />,
      title: "Family Groups",
      description: "Create private circles for family, friends, or teams. Stay connected with those who matter.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <HiOutlineLocationMarker />,
      title: "Geofence Zones",
      description: "Set safe zones like home or school. Get alerts when someone arrives or leaves.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <IoAlertCircleOutline />,
      title: "SOS Emergency",
      description: "One-tap emergency button instantly notifies your trusted circle with your location.",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: <FiClock />,
      title: "Location History",
      description: "Review past routes and locations for the last 7 days. Never wonder where they've been.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FiBell />,
      title: "Smart Notifications",
      description: "Get instant alerts for arrivals, departures, and important location updates.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <MdLanguage />,
      title: "Multi-Language",
      description: "Use SafeTrack in your preferred language with full multi-language support.",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: <FiBattery />,
      title: "Battery Efficient",
      description: "Optimized GPS usage ensures minimal battery consumption for all-day tracking.",
      gradient: "from-lime-500 to-green-500",
    },
    {
      icon: <FiShield />,
      title: "Fully Secure",
      description: "End-to-end encryption. No data selling. No third-party tracking. Completely private.",
      gradient: "from-rose-500 to-pink-500",
    },
  ];

  const mainFeatures = allFeatures.slice(0, 6);
  const remainingFeatures = allFeatures.slice(6);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need for
            <br />
            <span className="text-gradient">Complete Peace of Mind</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Powerful features designed to keep your family safe and connected, wherever they are in the world.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...mainFeatures, ...(showAll ? remainingFeatures : [])].map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="relative text-xl font-bold mb-3">{feature.title}</h3>
              <p className="relative text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowAll(true)}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
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