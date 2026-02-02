import { Section, SectionTitle } from "../components/ui/Section";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import Button from "../components/ui/Button";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 md:h-125 bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              About Drezzup Stores
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Your trusted fashion destination in Ghana
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <Section className="py-20">
        <SectionTitle>Our Story</SectionTitle>
        <div className="max-w-4xl mx-auto text-center animate-slide-in">
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Drezzup Stores is Ghana's premier destination for authentic fashion
            and sneaker culture. Founded with a passion for quality and style,
            we've been serving fashion enthusiasts across the country with
            carefully curated collections from top global brands.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our commitment to authenticity, quality, and customer satisfaction
            has made us the go-to choice for those who demand nothing but the
            best in fashion and footwear.
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users size={40} />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-3">5000+</h3>
            <p className="text-gray-300 text-lg">Happy Customers</p>
          </div>
          <div
            className="text-center animate-scale-in"
            style={{ animationDelay: "100ms" }}>
            <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award size={40} />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-3">100%</h3>
            <p className="text-gray-300 text-lg">Authentic Products</p>
          </div>
          <div
            className="text-center animate-scale-in"
            style={{ animationDelay: "200ms" }}>
            <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={40} />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-3">500+</h3>
            <p className="text-gray-300 text-lg">Products Available</p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <SectionTitle>Our Values</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white text-3xl font-bold">1</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Authenticity</h3>
            <p className="text-gray-600 leading-relaxed">
              Every product is 100% authentic, sourced directly from authorized
              distributors
            </p>
          </div>
          <div
            className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: "100ms" }}>
            <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white text-3xl font-bold">2</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Quality Service</h3>
            <p className="text-gray-600 leading-relaxed">
              Professional customer service team ready to assist you at every
              step
            </p>
          </div>
          <div
            className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: "200ms" }}>
            <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white text-3xl font-bold">3</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
            <p className="text-gray-600 leading-relaxed">
              Swift and secure nationwide delivery to bring fashion to your
              doorstep
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Info */}
      <Section className="py-20">
        <SectionTitle>Visit Us</SectionTitle>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-10 md:p-12 rounded-2xl shadow-2xl border border-gray-100 space-y-8 animate-scale-in">
            <div className="flex items-start gap-6">
              <div className="bg-black text-white p-4 rounded-xl shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Location</h4>
                <p className="text-gray-600 text-lg">Accra, Ghana</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-black text-white p-4 rounded-xl shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Phone</h4>
                <p className="text-gray-600">+233 20 785 9927</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-black shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-600">info@drezzupstores.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-black shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-1">Hours</h4>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
