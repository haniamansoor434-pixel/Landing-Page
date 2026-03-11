import { motion } from "framer-motion";
import { FiDownload, FiUsers, FiMapPin } from "react-icons/fi";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FiDownload />,
      title: "Download the App",
      description:
        "Get SafeTrack from the App Store or Google Play. Free to download and easy to set up in minutes. No credit card needed.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      icon: <FiUsers />,
      title: "Create Your Circle",
      description:
        "Create a group and share your unique tracking code with family or friends. They accept the invite and you're instantly connected.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      icon: <FiMapPin />,
      title: "Stay Connected",
      description:
        "See everyone's live location on the map. Get alerts, track history, and enjoy complete peace of mind knowing your loved ones are safe.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="how" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started in
            <br />
            <span className="text-gradient">Three Simple Steps</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Setting up SafeTrack takes less than 2 minutes. Here's how it works.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
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
                    {step.icon}
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
                  {index === 0 && (
                    <>
                      <span className="glass px-4 py-2 rounded-full text-sm">
                        iOS & Android
                      </span>
                      <span className="glass px-4 py-2 rounded-full text-sm">
                        2-Minute Setup
                      </span>
                      <span className="glass px-4 py-2 rounded-full text-sm">
                        No Payment Info
                      </span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="glass px-4 py-2 rounded-full text-sm">
                        Unlimited Members
                      </span>
                      <span className="glass px-4 py-2 rounded-full text-sm">
                        Private & Secure
                      </span>
                      <span className="glass px-4 py-2 rounded-full text-sm">
                        Simple Invite Code
                      </span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="glass px-4 py-2 rounded-full text-sm">
                        Real-Time Updates
                      </span>
                      <span className="glass px-4 py-2 rounded-full text-sm">
                        Smart Alerts
                      </span>
                      <span className="glass px-4 py-2 rounded-full text-sm">
                        7-Day History
                      </span>
                    </>
                  )}
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
                    {step.icon}
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
