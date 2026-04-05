import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiLock, FiDatabase, FiCheckCircle, FiMapPin, FiUsers } from "react-icons/fi";
import trackScreenSrc from "../assets/screenshots/trackScreen.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >


          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Stay Connected.
            <br />
            <span className="text-gradient">Stay Safe.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl"
          >
            Real-time GPS tracking that brings peace of mind. Keep your loved ones safe with location sharing that&apos;s completely free, private, and secure.
          </motion.p>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto items-stretch sm:items-center justify-start"
          >
            <button className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-xl hover:shadow-white/20">
              <FaApple className="text-2xl" />
              <div className="text-left flex-1 sm:flex-none">
                <div className="text-xs opacity-70 leading-tight">Download on the</div>
                <div className="text-base font-bold leading-tight">App Store</div>
              </div>
            </button>

            <button className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-3 px-8 py-4 glass rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:bg-white/10">
              <FaGooglePlay className="text-2xl text-[#56FBAC]" />
              <div className="text-left flex-1 sm:flex-none">
                <div className="text-xs opacity-70 leading-tight">Get it on</div>
                <div className="text-base font-bold leading-tight">Google Play</div>
              </div>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-gray-400 justify-start"
          >
            <div className="flex items-center gap-3">
              <FiLock className="text-[#56FBAC] text-xl shrink-0" />
              <span>End-to-End Encrypted</span>
            </div>
            <div className="hidden sm:block text-white/20">•</div>
            <div className="flex items-center gap-3">
              <FiDatabase className="text-[#56FBAC] text-xl shrink-0" />
              <span>No Data Selling</span>
            </div>
            <div className="hidden sm:block text-white/20">•</div>
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-[#56FBAC] text-xl shrink-0" />
              <span>No Subscriptions</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Floating Phone Container */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 1, -1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Soft Glow Behind Phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#56FBAC]/10 to-[#1A1C30]/40 rounded-[3rem] blur-3xl"></div>

            {/* Phone Frame */}
            <div className="relative glass-card rounded-[3rem] p-3 w-80 h-[650px] overflow-hidden border border-white/10 shadow-xl">

              {/* Screen Content */}
              <div className="w-full h-full bg-[#1A1C30] rounded-[2rem] overflow-hidden relative border border-black">

                <img
                  src={trackScreenSrc}
                  alt="SafeTrack Live Location Screen"
                  className="w-full h-full object-cover object-[center_250%] scale-100"
                />

              </div>
            </div>

            {/* Floating Badge 1 */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-20 glass-card px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm"
            >
              <div className="text-xs text-gray-400 flex items-center gap-1">
                <FiMapPin className="text-green-400" /> Live Location
              </div>
              <div className="font-bold text-green-400 flex items-center gap-1">● Active</div>
            </motion.div>


          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}