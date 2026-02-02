import { useState } from "react";
import { Section, SectionTitle } from "../components/ui/Section";
import Button from "../components/ui/Button";
import { Send, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "../config/constants";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-linear-to-br from-black via-gray-900 to-black text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-slide-in">
            Have questions? We'd love to hear from you!
          </p>
        </div>
      </section>

      <Section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in">
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-3">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-black transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-3">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-black transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-3">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-black transition-all"
                  placeholder="+233 XX XXX XXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-3">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border-2 border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-black transition-all resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <Button className="w-full flex items-center justify-center gap-3 text-lg py-4">
                <Send size={22} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">WhatsApp</h4>
                <a
                  href="https://wa.me/+233207859927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700">
                  +233 20 785 9927
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <a
                  href="mailto:info@drezzupstores.com"
                  className="text-black hover:underline">
                  info@drezzupstores.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Instagram</h4>
                <a
                  href="https://www.instagram.com/drezzupstores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline">
                  @drezzupstores
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hours</h4>
                <p className="text-gray-600">
                  Monday - Saturday: 9:00 AM - 8:00 PM
                </p>
                <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Accra, Ghana</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
