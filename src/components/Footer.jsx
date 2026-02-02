import { MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-black text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">drezzup stores.</h3>
          <p className="text-gray-400 mb-4">
            Your trusted destination for authentic fashion and sneaker pieces.
          </p>
          <a
            href="https://wa.me/+233207859927"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition">
            <MessageCircle size={20} />
            <span>WhatsApp Us</span>
          </a>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Terms of Service", "Returns & FAQ"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            {["Sneakers", "Bags", "Caps", "Jeans"].map((cat) => (
              <li key={cat}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>©2026 drezzup stores. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
