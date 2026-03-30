import { Link } from "react-router";
import { Heart, Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#D88CA3] text-[#FFF6EC] mt-auto">
      {/* Ribbon Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 fill-[#FFF6EC]" />
              <div>
                <div className="text-xl" style={{ fontFamily: "var(--font-accent)" }}>
                  Coquettes
                </div>
                <div className="text-xs tracking-wider opacity-90">CAFÉ</div>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Where Romance Meets Flavor
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/florals" className="hover:text-white transition-colors">
                  Florals
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@coquettes.cafe</span>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Stay Connected
            </h3>
            <form className="space-y-3 mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-[#D88CA3] rounded-lg hover:bg-[#FFF6EC] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm opacity-90">
          <p>© 2026 Coquettes Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
