import { motion } from "framer-motion";
import { FiShield, FiLock, FiEyeOff, FiServer } from "react-icons/fi";
import { HiShieldCheck } from "react-icons/hi2";
import SectionHeader from "../components/ui/SectionHeader";
import { securityFeatures } from "../data/securityFeatures";

const securityIconMap = {
  eyeOff: <FiEyeOff />,
  lock: <FiLock />,
  server: <FiServer />,
  shieldCheck: <HiShieldCheck />,
};

export default function SecuritySection() {

  return (
    <section id="security" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Main Container */}
        <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>

          <div className="relative z-10">
            {/* Icon & Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-4xl">
                <FiShield />
              </div>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <SectionHeader
                title="Your Privacy is"
                highlight="Sacred"
                description="SafeTrack is built with privacy at its core. Your location data is fully encrypted and only shared with people you explicitly trust."
              />
            </motion.div>

            {/* Security Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-green-400 text-2xl mx-auto mb-4">
                    {securityIconMap[feature.icon]}
                  </div>
                  <h3 className="text-base font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Trust Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-400">GDPR Compliant</span>
                </div>
                <div className="hidden md:block text-gray-600">•</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-400">SOC 2 Certified</span>
                </div>
                <div className="hidden md:block text-gray-600">•</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-400">256-bit Encryption</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p>
            Your location stays between you and your trusted circle. No third parties. No exceptions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
