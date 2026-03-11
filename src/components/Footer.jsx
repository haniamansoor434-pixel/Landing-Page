import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMapPin, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <FiMapPin className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">SafeTrack</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Stay connected with your loved ones through real-time GPS tracking.
              100% free, private, and secure. No ads, no subscriptions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaGithub className="text-lg" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-lg font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#security" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © {currentYear} SafeTrack. Made with
              <FiHeart className="text-red-500 inline mx-1" size={14} />
              for families everywhere.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Newsletter Section (Optional) */}
        <div className="mt-12 glass-card rounded-3xl p-8 text-center">
          <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
          <p className="text-gray-400 mb-4 text-sm">Get the latest updates and news about SafeTrack.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
