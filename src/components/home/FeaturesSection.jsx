import { Truck, Headphones, Shield, CreditCard } from "lucide-react";
import { Section, SectionTitle } from "../ui/Section";

const features = [
  {
    Icon: Truck,
    title: "Nationwide Delivery",
    desc: "We deliver to all regions across Ghana, ensuring your order reaches you safely and on time.",
  },
  {
    Icon: Headphones,
    title: "Great Customer Service",
    desc: "Our team is responsive, professional, and always ready to assist you before and after purchase.",
  },
  {
    Icon: Shield,
    title: "Quality & Authenticity",
    desc: "We provide carefully sourced fashion and sneaker pieces you can trust.",
  },
  {
    Icon: CreditCard,
    title: "Fast & Secure Checkout",
    desc: "Easy payment options with a smooth, stress-free checkout experience. Both payment on delivery and before delivery.",
  },
];

const FeaturesSection = () => (
  <Section className="bg-linear-to-b from-gray-50 to-white">
    <div className="text-center mb-16">
      <SectionTitle>Why Choose Us?</SectionTitle>
      <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-4">
        Your trusted destination for authentic fashion and exceptional service
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {features.map((f, i) => (
        <div
          key={i}
          className="text-center p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
          <div className="flex justify-center mb-6">
            <div className="bg-black text-white p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <f.Icon size={32} />
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-gray-700 transition-colors">
            {f.title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {f.desc}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

export default FeaturesSection;
