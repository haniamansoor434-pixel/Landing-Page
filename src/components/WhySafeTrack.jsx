import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

export default function WhySafeTrack() {
    const comparison = [
        {
            feature: "Price",
            safetrack: "100% Free Forever",
            competitors: "Monthly Subscriptions",
            safetrackWins: true,
        },
        {
            feature: "Advertisements",
            safetrack: "Zero Ads",
            competitors: "Frequent Ads",
            safetrackWins: true,
        },
        {
            feature: "Data Privacy",
            safetrack: "Never Sold",
            competitors: "Often Monetized",
            safetrackWins: true,
        },
        {
            feature: "Real-Time Tracking",
            safetrack: "Always Included",
            competitors: "Premium Feature",
            safetrackWins: true,
        },
        {
            feature: "Location History",
            safetrack: "7 Days Free",
            competitors: "Paid Upgrade",
            safetrackWins: true,
        },
        {
            feature: "Geofence Alerts",
            safetrack: "Unlimited",
            competitors: "Limited in Free Tier",
            safetrackWins: true,
        },
    ];

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
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
                        <HiSparkles className="text-yellow-400" />
                        <span className="text-sm font-medium">The SafeTrack Advantage</span>
                    </div>
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
                    {/* Table Header */}
                    <div className="grid grid-cols-3 gap-4 p-6 bg-white/5 border-b border-white/10">
                        <div className="text-sm text-gray-400 font-medium">Feature</div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-gradient mb-1">SafeTrack</div>
                            <div className="text-xs text-gray-400">This App</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold mb-1">Competitors</div>
                            <div className="text-xs text-gray-400">Life360, etc.</div>
                        </div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-white/5">
                        {comparison.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="grid grid-cols-3 gap-4 p-6 hover:bg-white/5 transition-colors"
                            >
                                <div className="font-medium">{item.feature}</div>

                                {/* SafeTrack Column */}
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <FaCheck className="text-green-400 text-xs" />
                                    </div>
                                    <span className="text-sm font-medium text-green-400">{item.safetrack}</span>
                                </div>

                                {/* Competitors Column */}
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <FaTimes className="text-red-400 text-xs" />
                                    </div>
                                    <span className="text-sm text-gray-500">{item.competitors}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Banner */}
                    <div className="p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-white/10 text-center">
                        <h3 className="text-2xl font-bold mb-2">The Choice is Clear</h3>
                        <p className="text-gray-400 mb-6">
                            No hidden fees. No premium tiers. Everything included for free, forever.
                        </p>
                        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-purple-500/25">
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
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>No Credit Card Required</span>
                    </div>
                    <div>•</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>No Paywalls</span>
                    </div>
                    <div>•</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span>No Surprises</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
