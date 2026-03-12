import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { HiShieldCheck, HiSparkles } from "react-icons/hi2";

export default function Hero() {
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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <HiSparkles className="text-purple-400" />
            <span className="text-sm font-medium">No Ads • Privacy First</span>
          </motion.div>

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
            Real-time GPS tracking that brings peace of mind. Keep your loved ones safe with location sharing that's completely free, private, and secure.
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
              <HiShieldCheck className="text-green-400 text-xl" />
              <span>End-to-End Encrypted</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div>No Data Selling</div>
            <div className="hidden sm:block">•</div>
            <div>No Subscriptions</div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-[3rem] blur-3xl"></div>

            {/* Phone Frame */}
            <div className="relative glass-card rounded-[3rem] p-3 w-80 h-[600px] overflow-hidden">
              {/* Phone Notch */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-950 rounded-full z-10"></div>

              {/* Screen Content - Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="h-8 bg-white/10 rounded-lg w-3/4"></div>
                  <div className="h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/10 rounded w-full"></div>
                    <div className="h-4 bg-white/10 rounded w-5/6"></div>
                    <div className="h-4 bg-white/10 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge 1 */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-20 glass-card px-4 py-3 rounded-2xl shadow-xl"
            >
              <div className="text-xs text-gray-400">Live Location</div>
              <div className="font-bold text-green-400">● Active</div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-4 bottom-32 glass-card px-4 py-3 rounded-2xl shadow-xl"
            >
              <div className="text-xs text-gray-400">Family Circle</div>
              <div className="font-bold">4 Members</div>
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