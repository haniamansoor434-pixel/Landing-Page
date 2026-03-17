import { motion } from "framer-motion";
import { FiDownload, FiUsers, FiMapPin } from "react-icons/fi";
import SectionHeader from "../components/ui/SectionHeader";
import { howItWorksSteps } from "../data/howItWorksSteps";

const stepIconMap = {
  download: <FiDownload />,
  mapPin: <FiMapPin />,
  users: <FiUsers />,
};

export default function HowItWorksSection() {

  return (
    <section id="how" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            title="Get Started in"
            highlight="Three Simple Steps"
            description="Setting up SafeTrack takes less than 2 minutes. Here's how it works."
          />
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                {/* Step Number & Icon */}
                <div className="flex items-center gap-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                    {stepIconMap[step.icon]}
                  </div>
                  <div className="text-7xl font-black text-white/5">
                    {step.number}
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3">
                  {step.pills.map((pill) => (
                    <span key={pill} className="glass px-4 py-2 rounded-full text-sm">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="flex-1 relative"
              >
                <div className="glass-card rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden group">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>

                  {/* Large Icon */}
                  <div className={`relative text-9xl bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`}>
                    {stepIconMap[step.icon]}
                  </div>

                  {/* Floating Number */}
                  <div className="absolute top-8 right-8 text-6xl font-black text-white/5">
                    {step.number}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-3xl p-8 inline-block">
            <p className="text-gray-400 mb-4">
              Ready to get started?
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-blue-500/25">
              Download SafeTrack Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
