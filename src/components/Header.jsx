import { useState } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["Home", "Shop", "Categories", "About", "Contact"];
  const hrefs = ["#", "#products", "#categories", "#about", "#contact"];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <a href="/" className="text-2xl font-bold">
              DREZZUP STORES
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            {links.map((link, i) => (
              <a
                key={link}
                href={hrefs[i]}
                className="text-gray-700 hover:text-black transition">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-black relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {links.map((link, i) => (
                <a
                  key={link}
                  href={hrefs[i]}
                  className="text-gray-700 hover:text-black transition">
                  {link}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
