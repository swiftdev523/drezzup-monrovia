import { Section, SectionTitle } from "../components/ui/Section";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQItem = ({ question, answer, isFirst }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${!isFirst ? "border-t" : ""} border-gray-200`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-gray-600 transition-all group">
        <span className="font-bold text-lg pr-4 group-hover:translate-x-1 transition-transform">
          {question}
        </span>
        <div
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown size={24} className="text-gray-600" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="pb-6 text-gray-700 leading-relaxed text-base">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Browse our products, add items to your cart, and proceed to checkout. You can pay on delivery or via mobile money.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept mobile money (MTN, Vodafone, AirtelTigo), bank transfers, and cash on delivery for orders within Accra.",
    },
    {
      question: "Do you deliver nationwide?",
      answer:
        "Yes! We deliver to all regions across Ghana. Delivery times vary by location - typically 1-3 days for Accra and 3-7 days for other regions.",
    },
    {
      question: "What are your delivery charges?",
      answer:
        "Delivery within Accra is GHS 50. Other regions range from GHS 80-150 depending on location. Free delivery on orders over GHS 1000.",
    },
    {
      question: "Are all products authentic?",
      answer:
        "Yes! We guarantee 100% authenticity on all our products. Every item is sourced from authorized distributors.",
    },
    {
      question: "Can I return or exchange products?",
      answer:
        "Yes, we accept returns and exchanges within 7 days of delivery if the product is unused and in original packaging. See our Returns Policy below for details.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via WhatsApp or SMS. You can also contact us directly for updates.",
    },
    {
      question: "Do you have a physical store?",
      answer:
        "Yes, we're located in Accra. Contact us via WhatsApp for the exact location and store hours.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Returns & FAQ
          </h1>
          <p className="text-xl text-gray-300 animate-slide-in">
            Everything you need to know
          </p>
        </div>
      </section>

      {/* Returns Policy */}
      <Section className="py-16">
        <SectionTitle>Returns & Exchange Policy</SectionTitle>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100 animate-scale-in">
          <div className="space-y-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Return Window</h3>
              <p className="text-gray-700 leading-relaxed">
                We accept returns within 7 days of delivery. Products must be
                unworn, unused, and in original packaging with all tags
                attached.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-xl mb-3">How to Return</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-3 leading-relaxed">
                <li>
                  Contact us via WhatsApp (+233 20 785 9927) with your order
                  details
                </li>
                <li>Send clear photos of the product and packaging</li>
                <li>Our team will review and approve your return request</li>
                <li>Ship the item back to us (we'll provide the address)</li>
                <li>
                  Refund will be processed within 5-7 business days after
                  receiving the item
                </li>
              </ol>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Non-Returnable Items</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Sale or discounted items</li>
                <li>Items without original packaging or tags</li>
                <li>Worn or used products</li>
                <li>Custom or personalized orders</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Exchanges</h3>
              <p className="text-gray-600">
                We offer exchanges for different sizes or colors within 7 days,
                subject to availability. Contact us to arrange an exchange.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 animate-fade-in">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isFirst={index === 0}
            />
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="py-16">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-3xl p-12 md:p-16 text-center shadow-2xl animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
            Our customer service team is here to help!
          </p>
          <a
            href="https://wa.me/+233207859927"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all hover:shadow-lg hover:shadow-green-500/50 hover:scale-105">
            Chat on WhatsApp
          </a>
        </div>
      </Section>
    </>
  );
};

export default FAQPage;
