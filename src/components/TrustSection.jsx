import { motion } from "framer-motion";
import { HiCheckBadge } from "react-icons/hi2";
import { FaInfinity, FaBan, FaShieldAlt, FaHeart } from "react-icons/fa";

export default function TrustSection() {
    const trustItems = [
        {
            icon: <FaInfinity />,
            title: "100% Free Forever",
            description: "No hidden costs, no trials. Completely free, always.",
            color: "from-green-400 to-emerald-600",
        },
        {
            icon: <FaBan />,
            title: "No Advertisements",
            description: "Clean experience without annoying ads.",
            color: "from-blue-400 to-cyan-600",
        },
        {
            icon: <FaShieldAlt />,
            title: "No Data Selling",
            description: "Your privacy is not for sale. Ever.",
            color: "from-purple-400 to-pink-600",
        },
        {
            icon: <FaHeart />,
            title: "Privacy First",
            description: "Built with security and trust at the core.",
            color: "from-red-400 to-rose-600",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="py-20 px-6 relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
                        <HiCheckBadge className="text-green-400" />
                        <span className="text-sm font-medium">Why SafeTrack is Different</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Built on <span className="text-gradient">Trust & Privacy</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Unlike other tracking apps, SafeTrack puts your privacy first. No subscriptions, no ads, no data selling.
                    </p>
                </motion.div>

                {/* Trust Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 cursor-pointer group"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {item.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-16 glass-card rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">0$</div>
                        <div className="text-sm text-gray-400">Forever Free</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">0</div>
                        <div className="text-sm text-gray-400">Ads Shown</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                        <div className="text-sm text-gray-400">Privacy Protected</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                        <div className="text-sm text-gray-400">Real-Time Tracking</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
