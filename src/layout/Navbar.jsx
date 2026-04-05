import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiMenu, FiX } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how" },
    { name: "Security", href: "#security" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');

        .nav-wrap * { font-family: 'Outfit', sans-serif; }

        /* Animated gradient border - cannot be done in Tailwind */
        .pill-glow-border {
          position: absolute;
          inset: -1px;
          border-radius: 100px;
          background: conic-gradient(from 180deg at 50% 50%, #56FBAC 0deg, #10B981 120deg, #56FBAC 360deg);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
          filter: blur(6px);
        }

        .pill-outer:hover .pill-glow-border {
          opacity: 0.45;
        }

        .pill-shell.scrolled ~ .pill-glow-border {
          opacity: 0.35;
        }

        /* Logo pulse animation */
        .logo-ping {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(86,251,172,0.5);
          animation: ping-ring 2.5s ease-out infinite;
        }

        @keyframes ping-ring {
          0%   { transform: scale(1); opacity: 0.6; }
          80%  { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }

        /* Nav link hover border effect */
        .nav-lnk::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 100px;
          border: 1px solid rgba(86,251,172,0);
          transition: border-color 0.25s ease;
        }

        .nav-lnk:hover::before {
          border-color: rgba(86,251,172,0.35);
        }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-5 py-[18px]">
        <motion.div
          initial={{ y: -72, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[720px]"
        >
          <div className="pill-outer relative">
            {/* Glow border layer */}
            <div className="pill-glow-border" />

            {/* Main Pill */}
            <div className={`pill-shell rounded-full border transition-all duration-400 ease-out backdrop-blur-[24px] backdrop-saturate-[160%] py-2 pr-2 pl-4 ${scrolled
                ? 'bg-[#0C0E1D]/80 border-[#56FBAC]/20 shadow-[0_0_0_1px_rgba(86,251,172,0.08),0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]'
                : 'bg-[#1A1C30]/55 border-white/[0.09]'
              }`}>
              <div className="flex items-center justify-between gap-1.5">

                {/* Logo */}
                <motion.a
                  href="#"
                  className="flex items-center gap-2.5 no-underline shrink-0"
                  whileTap={{ scale: 0.96 }}
                >
                  <div className="relative shrink-0">
                    <div className="logo-ping" />
                    <div className="relative z-[1] w-[34px] h-[34px] rounded-full bg-gradient-to-br from-[#56FBAC] to-[#10B981] flex items-center justify-center shadow-[0_0_14px_rgba(86,251,172,0.45)]">
                      <FiMapPin className="text-[#0C0E1D] text-[15px]" />
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="font-bold text-[0.95rem] text-white tracking-tight leading-tight">SafeTrack</div>
                    <div className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#56FBAC] leading-none -mt-px">Live GPS</div>
                  </div>
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-0.5">
                  <div className="w-px h-4 bg-white/[0.08] shrink-0 mr-1.5" />
                  {navLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="nav-lnk relative text-[0.82rem] font-medium tracking-wide text-white/70 hover:text-white py-[7px] px-[14px] rounded-full transition-all duration-200 whitespace-nowrap hover:bg-[#56FBAC]/12"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="w-px h-4 bg-white/[0.08] shrink-0 ml-1.5" />
                </div>

                {/* CTA Button */}
                <div className="hidden md:block shrink-0">
                  <motion.button
                    className="relative rounded-full p-px bg-gradient-to-br from-[#56FBAC] to-[#10B981] shadow-[0_4px_20px_rgba(86,251,172,0.3)] hover:shadow-[0_6px_28px_rgba(86,251,172,0.55)] transition-all duration-300 hover:-translate-y-px cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center gap-1.5 px-[18px] py-2 rounded-full bg-[#1A1C30]/60 hover:bg-transparent font-semibold text-[0.82rem] tracking-wide text-white hover:text-[#0C0E1D] whitespace-nowrap transition-all duration-250">
                      <HiSparkles className="text-[#56FBAC] hover:text-[#0C0E1D] transition-colors duration-250 group-hover:text-[#0C0E1D]" />
                      Download Free
                    </div>
                  </motion.button>
                </div>

                {/* Mobile Menu Button - Hidden on lg screens and above */}
                <motion.button
                  className="lg:hidden w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#56FBAC]/15 hover:border-[#56FBAC]/40 hover:text-[#56FBAC] transition-all duration-200 shrink-0"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  whileTap={{ scale: 0.88 }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {mobileMenuOpen ? (
                      <motion.span
                        key="x"
                        initial={{ rotate: -45, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 45, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        <FiX size={16} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="m"
                        initial={{ rotate: 45, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -45, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        <FiMenu size={16} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-[rgba(5,4,14,0.96)] backdrop-blur-[28px] flex flex-col px-7 pt-24 pb-11"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 0px)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0 round 0px)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 0px)" }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="block text-[1.9rem] font-bold tracking-tight text-white/30 hover:text-white py-3.5 border-b border-white/[0.04] transition-colors duration-200 no-underline"
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1], duration: 0.38 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
            <motion.button
              className="mt-8 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-br from-[#56FBAC] to-[#10B981] font-bold text-base text-[#0C0E1D] border-0 cursor-pointer shadow-[0_8px_32px_rgba(86,251,172,0.4)] hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <HiSparkles /> Download Free
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}