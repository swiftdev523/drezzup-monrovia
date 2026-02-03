import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { SITE_CONFIG } from "../../config/constants";

const Footer = () => {
  const quickLinks = [
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Returns & FAQ", path: "/faq" },
    { label: "Terms of Service", path: "/faq" },
  ];

  const categories = [
    { label: "Sneakers", path: "/shop?category=sneakers" },
    { label: "Bags", path: "/shop?category=bags" },
    { label: "Caps", path: "/shop?category=caps" },
    { label: "Jeans", path: "/shop?category=jeans" },
    { label: "Birkenstocks", path: "/shop?category=birkenstocks" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-12">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-12 sm:mb-14 md:mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {SITE_CONFIG.name.toLowerCase()}.
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
              {SITE_CONFIG.tagline}
            </p>
          </div>
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4 sm:mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-white" />
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm md:text-base">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-bold mb-6 relative inline-block">
              Categories
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-white" />
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm md:text-base">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <Link
                    to={cat.path}
                    className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            ©2026 {SITE_CONFIG.name.toLowerCase()}. All rights reserved.
          </p>
          <a
            href="https://www.instagram.com/drezzupstores"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-2 sm:p-2.5 rounded-full transition-all hover:scale-110 active:scale-95"
            title="Follow us on Instagram">
            <Instagram size={18} className="sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
