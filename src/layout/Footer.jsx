import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMapPin, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 sm:py-16 px-4 sm:px-6 border-t border-white/5 bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">

          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#56FBAC] to-[#10B981] flex items-center justify-center">
                <FiMapPin className="text-[#0C0E1D] text-lg sm:text-xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">SafeTrack</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-md">
              Stay connected with your loved ones through real-time GPS tracking.
            </p>
            <div className="flex gap-4">

              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaFacebook className="text-base sm:text-lg" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaInstagram className="text-base sm:text-lg" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaLinkedin className="text-base sm:text-lg" />
              </a>

            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li>
                <a href="mailto:support@safetrack.com" className="flex items-center gap-1 hover:text-white transition-colors">
                  <FiMail /> support@safetrack.com
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-xs sm:text-sm">
            {/* Copyright */}
            <p className="flex flex-wrap justify-center md:justify-start items-center gap-1 text-gray-500">
              © {currentYear} SafeTrack. Built with
              <FiHeart className="text-red-500 inline mx-1" size={14} />
              to keep families connected.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 md:gap-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}