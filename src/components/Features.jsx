import { Truck, Headphones, Shield, CreditCard } from "lucide-react";

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

const Features = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 text-lg">
          Your trusted destination for authentic fashion and exceptional service
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="text-center">
            <div className="flex justify-center mb-4 text-black">
              <f.Icon size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-gray-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
