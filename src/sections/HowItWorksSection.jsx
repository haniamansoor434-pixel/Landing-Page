import { motion } from "framer-motion";
import SectionHeader from "../components/ui/SectionHeader";
import { howItWorksSteps } from "../data/howItWorksSteps";
import loginImg from "../assets/screenshots/loginpage.png";
import shareCodeImg from "../assets/screenshots/shareCode.png";
import addMemberImg from "../assets/screenshots/addMember.png";

const stepImageMap = {
  login: loginImg,
  share: shareCodeImg,
  add: addMemberImg,
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
            centered={false}
            className="md:text-center"
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
                {/* Step Number */}
                <div className="flex items-center gap-6">
                  <div className="text-7xl font-black text-[#56FBAC]/20 group-hover:text-[#56FBAC] transition-colors duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="text-left">
                  <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-start">
                  {step.pills.map((pill) => (
                    <span key={pill} className="glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="flex-1 relative flex justify-center w-full mt-4 lg:mt-0"
              >
                <div className="relative w-full max-w-[260px] sm:max-w-[300px] aspect-[1/2] rounded-[2.5rem] bg-black p-2 shadow-2xl border border-white/10 group overflow-hidden">
                  {/* Decorative Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20 group-hover:opacity-40 transition-opacity blur-3xl z-0`}></div>

                  {/* Image Screen */}
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black z-10 border border-white/5">
                    <img src={stepImageMap[step.imageKey]} alt={step.title} className="w-full h-full object-cover object-[center_100%]" />
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
          className="text-center mt-16 w-full"
        >
          <div className="glass-card rounded-3xl p-8 inline-block w-full sm:w-auto">
            <p className="text-gray-400 mb-4 text-left sm:text-center">
              Ready to get started?
            </p>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#56FBAC] text-[#0C0E1D] rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-[#56FBAC]/40">
              Download SafeTrack Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
