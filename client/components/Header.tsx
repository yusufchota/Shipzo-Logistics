import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import image from "../Image/Y-Logo (1).png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { label: "Pricing", href: "#pricing" },
    { label: "Schedules", href: "#schedules" },
    { label: "Tracking", href: "#tracking" },
    { label: "Services", href: "#services" },
    { label: "Company", href: "#company" },
  ];

  const advancedLink = { label: "Advanced", path: "/advanced" };

  return (
    <header className="w-full border-b border-gray-100 sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src={image} alt="LOGO"/>
            </div>
            <span className="hidden sm:inline">Shipzo Logistics</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              to={advancedLink.path}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {advancedLink.label}
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="hidden sm:inline-flex px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Login
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4 pt-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to={advancedLink.path}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {advancedLink.label}
              </Link>
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link
                  to="/login"
                  className="text-sm font-medium text-primary text-center hover:text-primary/80 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/login"
                  className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
                >
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
