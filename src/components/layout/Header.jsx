import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "../../config/constants";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl lg:text-2xl font-black tracking-tight hover:tracking-wide transition-all duration-300 relative group">
            <span className="relative z-10">{SITE_CONFIG.name}</span>
            <span className="absolute inset-0 bg-gray-100 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-300 -z-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`relative text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 py-2 group ${
                    isActive ? "text-black" : "text-gray-600 hover:text-black"
                  }`}>
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Search */}
            {isSearchOpen ? (
              <input
                type="text"
                placeholder="Search products..."
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
                className="w-40 md:w-56 px-4 py-2.5 border-2 border-black rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent animate-scale-in bg-white shadow-sm"
              />
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 hover:bg-gray-100 rounded-full transition-all hover:scale-110 duration-300 active:scale-95">
                <Search size={20} />
              </button>
            )}

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2.5 hover:bg-gray-100 rounded-full transition-all hover:scale-110 duration-300 group active:scale-95">
              <ShoppingCart
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse">
                0
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 hover:bg-gray-100 rounded-full transition-all active:scale-95">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md animate-slide-in">
          <nav className="px-4 py-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-base font-semibold px-5 py-3.5 rounded-xl transition-all ${
                    isActive
                      ? "bg-black text-white shadow-lg"
                      : "text-gray-700 hover:text-black hover:bg-gray-50 active:bg-gray-100"
                  }`}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
