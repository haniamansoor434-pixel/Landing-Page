import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

export default function CtaSection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main CTA Card */}
          <div className="glass-card rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
            {/* Animated Background */}
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#56FBAC]/10 to-transparent opacity-50"></div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-20 h-20 bg-[#56FBAC]/20 rounded-full blur-2xl"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-10 w-32 h-32 bg-[#616083]/20 rounded-full blur-2xl"
            ></motion.div>

            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-[#56FBAC]/20"
              >
                <HiSparkles className="text-[#56FBAC]" />
                <span className="text-sm font-medium text-[#56FBAC]">Start Protecting Your Family Today</span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold mb-6 text-left md:text-center"
              >
                Ready to Keep Your
                <br className="hidden sm:block" />
                <span className="text-gradient sm:ml-2">Family Safe?</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-left md:text-center text-lg mb-10 max-w-2xl mx-auto"
              >
                Join millions of families who trust SafeTrack for real-time location sharing and peace of mind.
                Download now and start tracking in 2 minutes.
              </motion.p>

              {/* App Store Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full mb-8"
              >
                <button className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl hover:shadow-white/30">
                  <FaApple className="text-3xl shrink-0" />
                  <div className="text-left flex-1 sm:flex-none">
                    <div className="text-xs opacity-70 leading-tight">Download on the</div>
                    <div className="text-lg font-bold leading-tight">App Store</div>
                  </div>
                </button>

                <button className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-3 px-8 py-5 glass rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:bg-white/10 hover:shadow-2xl">
                  <FaGooglePlay className="text-3xl text-[#56FBAC] shrink-0" />
                  <div className="text-left flex-1 sm:flex-none">
                    <div className="text-xs opacity-70 leading-tight">Get it on</div>
                    <div className="text-lg font-bold leading-tight">Google Play</div>
                  </div>
                </button>
              </motion.div>

              {/* Trust Line */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3 sm:gap-4 text-sm text-gray-500"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#56FBAC] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free Forever
                </span>
                <span className="hidden sm:block text-white/20">•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#616083] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No Credit Card Required
                </span>
                <span className="hidden sm:block text-white/20">•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white/40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  2-Minute Setup
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
