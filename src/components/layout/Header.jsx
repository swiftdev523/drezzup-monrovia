import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "../../config/constants";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Bags", path: "/shop?category=bags" },
    { label: "Birkenstocks", path: "/shop?category=birkenstocks" },
    { label: "COMBOS", path: "/shop?category=combos" },
    { label: "More", path: "#", hasDropdown: true },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-sm sm:text-base font-bold tracking-tight hover:opacity-80 transition-opacity duration-300 z-10">
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.path ||
                location.search.includes(link.path.split("?")[1] || "");
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-black ${
                    isActive ? "text-black" : "text-gray-700"
                  }`}>
                  {link.label}
                  {link.hasDropdown && <span className="ml-1">▼</span>}
                </Link>
              );
            })}
          </nav>
          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Search */}
            {isSearchOpen ? (
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
                className="w-32 sm:w-40 md:w-56 px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-black rounded-lg sm:rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent animate-scale-in bg-white shadow-sm"
              />
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-all active:scale-95">
                <Search size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span className="hidden md:inline text-sm font-medium text-gray-700">
                  Search
                </span>
              </button>
            )}

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-all group">
              <ShoppingCart
                size={20}
                className="w-5 h-5 sm:w-[20px] sm:h-[20px]"
              />
              <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-red-500 text-white text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-all active:scale-95">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
