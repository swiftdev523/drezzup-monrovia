import { Link } from "react-router-dom";
import { MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";
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
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {SITE_CONFIG.name.toLowerCase()}.
            </h3>
            <p className="text-gray-400 mb-8 text-base md:text-lg leading-relaxed max-w-md">
              {SITE_CONFIG.tagline}
            </p>
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:gap-4 hover:shadow-lg hover:shadow-green-500/50 group">
              <MessageCircle
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
              <span>WhatsApp Us</span>
            </a>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/drezzupstores"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110">
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110">
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-white" />
            </h4>
            <ul className="space-y-3 text-sm md:text-base">
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
            <ul className="space-y-3 text-sm md:text-base">
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
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            ©2026 {SITE_CONFIG.name.toLowerCase()}. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">Designed with ❤️ in Ghana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
