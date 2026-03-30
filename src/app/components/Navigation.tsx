import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Heart } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/florals", label: "Florals" },
    { path: "/about", label: "About" },
    { path: "/reservations", label: "Reservations" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF9F6] border-b border-[#D88CA3]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Heart className="w-6 h-6 text-[#F8C8DC] fill-[#F8C8DC] group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-2xl text-[#A84A6E]" style={{ fontFamily: "var(--font-accent)" }}>
                Coquettes
              </span>
              <span className="text-xs tracking-wider text-[#D88CA3]" style={{ fontFamily: "var(--font-body-alt)" }}>
                CAFÉ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 transition-colors ${
                  isActive(link.path)
                    ? "text-[#A84A6E]"
                    : "text-[#4A4A4A] hover:text-[#D88CA3]"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F8C8DC] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#F8C8DC]/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#A84A6E]" />
            ) : (
              <Menu className="w-6 h-6 text-[#A84A6E]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#D88CA3]/20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "bg-[#F8C8DC]/30 text-[#A84A6E]"
                      : "text-[#4A4A4A] hover:bg-[#F8C8DC]/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
