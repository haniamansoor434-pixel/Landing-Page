import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiLock, FiDatabase, FiCheckCircle, FiMapPin, FiUsers } from "react-icons/fi";

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
          className="text-center lg:text-left"
        >


          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
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
            className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start"
          >
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20">
              <FaApple className="text-2xl" />
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="text-base font-bold">App Store</div>
              </div>
            </button>

            <button className="group relative inline-flex items-center gap-3 px-8 py-4 glass rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <FaGooglePlay className="text-2xl text-green-400" />
              <div className="text-left">
                <div className="text-xs opacity-70">Get it on</div>
                <div className="text-base font-bold">Google Play</div>
              </div>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400 justify-center lg:justify-start"
          >
            <div className="flex items-center gap-2">
              <FiLock className="text-green-400 text-xl" />
              <span>End-to-End Encrypted</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <FiDatabase className="text-green-400 text-xl" />
              <span>No Data Selling</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-green-400 text-xl" />
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
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-[3rem] blur-3xl"></div>

            {/* Phone Frame */}
            <div className="relative glass-card rounded-[3rem] p-3 w-80 h-[600px] overflow-hidden border border-white/10 shadow-xl">
              {/* Notch & Speaker */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 flex justify-center items-center z-10">
                <div className="w-16 h-1.5 bg-gray-700 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-700 rounded-full ml-2"></div>
              </div>

              {/* Screen Content */}
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] overflow-hidden relative">
                <div className="p-6 space-y-4">
                  <div className="h-8 bg-white/10 rounded-lg w-3/4 animate-pulse"></div>
                  <div className="h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl relative">
                    {/* Floating icons inside screen */}
                    <div className="absolute top-4 left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-4 right-6 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/10 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-white/10 rounded w-5/6 animate-pulse"></div>
                    <div className="h-4 bg-white/10 rounded w-4/6 animate-pulse"></div>
                  </div>
                </div>
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

            {/* Floating Badge 2 */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-4 bottom-32 glass-card px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm"
            >
              <div className="text-xs text-gray-400 flex items-center gap-1">
                <FiUsers className="text-purple-400" /> Family Circle
              </div>
              <div className="font-bold flex items-center gap-1">4 Members</div>
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