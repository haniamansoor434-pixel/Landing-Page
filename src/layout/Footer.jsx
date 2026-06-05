import { FiMapPin, FiShield, FiFileText } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 sm:py-12 px-4 sm:px-6 border-t border-white/5 bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Brand Column */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#56FBAC] to-[#10B981] flex items-center justify-center">
                <FiMapPin className="text-[#0C0E1D] text-lg sm:text-xl" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Locafii
              </h3>
            </div>

            <p className="text-gray-400 text-sm sm:text-base max-w-md">
              Real-time family location sharing designed to help you stay
              connected with your loved ones.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 text-white">
              Product
            </h4>

            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href="#features"
                  className="hover:text-[#56FBAC] transition-colors"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#how"
                  className="hover:text-[#56FBAC] transition-colors"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#security"
                  className="hover:text-[#56FBAC] transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 text-white">
              Legal
            </h4>

            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href="https://docs.google.com/document/d/1dO5_YsESyXXqDxjgggF-Q0QswMz-KFTTmyK1Hu0VAE0/edit?tab=t.0#heading=h.mkbppb5dhsn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#56FBAC] transition-colors"
                >
                  <FiShield />
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="https://docs.google.com/document/d/1mv25lGVHeveuM8QLxQklL8G5XhtKP1Xvhrk0zJybssQ/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#56FBAC] transition-colors"
                >
                  <FiFileText />
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-3 text-xs sm:text-sm text-gray-500">
          <p>© {currentYear} Locafii. All rights reserved.</p>

          <a
            href="https://play.google.com/store/apps/details?id=com.codexahmar.locafii"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#56FBAC] transition-colors"
          >
            Available on Google Play
          </a>
        </div>
      </div>
    </footer>
  );
}