import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import { comparisonData } from "../data/comparisonData";

export default function WhySafeTrackSection() {

    return (
        <section className="py-20 px-6 relative">
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
                        Why Choose <span className="text-gradient">SafeTrack</span>?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See how SafeTrack compares to other tracking apps like Life360 and Find My Friends.
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card rounded-3xl overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <div className="min-w-[640px]">
                            {/* Table Header */}
                            <div className="grid grid-cols-3 gap-4 p-6 bg-white/5 border-b border-white/10">
                                <div className="text-xs sm:text-sm text-gray-400 font-medium">Feature</div>
                                <div className="text-left">
                                    <div className="text-base sm:text-lg font-bold text-gradient mb-1">SafeTrack</div>
                                    <div className="text-xs text-gray-400">This App</div>
                                </div>
                                <div className="text-left">
                                    <div className="text-base sm:text-lg font-bold mb-1">Competitors</div>
                                    <div className="text-xs text-gray-400">Life360, etc.</div>
                                </div>
                            </div>

                            {/* Table Rows */}
                            <div className="divide-y divide-white/5 text-xs sm:text-sm">
                                {comparisonData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="grid grid-cols-3 gap-2 p-4 md:p-6 hover:bg-white/5 transition-colors items-center"
                                    >
                                        {/* Feature Name */}
                                        <div className="font-medium text-left truncate">{item.feature}</div>

                                        {/* SafeTrack Column */}
                                        <div className="flex items-center justify-start gap-2 truncate">
                                            <div className="w-6 h-6 rounded-full bg-[#56FBAC]/20 flex items-center justify-center flex-shrink-0">
                                                <FaCheck className="text-[#56FBAC] text-xs" />
                                            </div>
                                            <span className="text-xs sm:text-sm font-medium text-[#56FBAC] truncate">
                                                {item.safetrack}
                                            </span>
                                        </div>

                                        {/* Competitors Column */}
                                        <div className="flex items-center justify-start gap-2 truncate">
                                            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                                <FaTimes className="text-red-400 text-xs" />
                                            </div>
                                            <span className="text-xs sm:text-sm text-gray-500 truncate">{item.competitors}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Banner */}
                    <div className="p-8 bg-[#1A1C30]/50 border-t border-white/10 text-center">
                        <h3 className="text-2xl font-bold mb-2">The Choice is Clear</h3>
                        <p className="text-gray-400 mb-6">
                            No hidden fees. No premium tiers. Everything included for free, forever.
                        </p>
                        <button className="px-8 py-4 bg-[#56FBAC] text-[#0C0E1D] rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-[#56FBAC]/40">
                            Get SafeTrack Now
                        </button>
                    </div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#56FBAC] rounded-full animate-pulse shadow-[0_0_8px_rgba(86,251,172,0.6)]"></div>
                        <span>No Credit Card Required</span>
                    </div>
                    <div>•</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#616083] rounded-full animate-pulse"></div>
                        <span>No Paywalls</span>
                    </div>
                    <div>•</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                        <span>No Surprises</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
