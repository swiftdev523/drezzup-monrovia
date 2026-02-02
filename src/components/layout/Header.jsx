import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "../../config/constants";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl lg:text-2xl font-extrabold tracking-tight hover:opacity-80 transition-opacity duration-300">
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-base font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200">
                {link.label}
              </Link>
            ))}
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
                className="w-40 md:w-56 px-4 py-2 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black animate-scale-in"
              />
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-all hover:scale-110 duration-300">
                <Search size={20} />
              </button>
            )}

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-all hover:scale-110 duration-300 group">
              <ShoppingCart
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                0
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-all">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white animate-slide-in">
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 px-4 py-3 rounded-lg transition-all">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
