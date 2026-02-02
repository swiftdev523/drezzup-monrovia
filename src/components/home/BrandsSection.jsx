import { Section, SectionTitle } from "../ui/Section";
import Card from "../ui/Card";

const BrandsSection = ({ brands }) => (
  <Section className="bg-linear-to-b from-white to-gray-50">
    <div className="text-center mb-12">
      <SectionTitle>Popular Brands</SectionTitle>
      <p className="text-gray-600 mt-4">
        Shop from the world's leading fashion brands
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {brands.map((brand, index) => (
        <a
          key={brand.id}
          href={`#brand-${brand.id}`}
          className="animate-scale-in"
          style={{ animationDelay: `${index * 100}ms` }}>
          <Card className="p-8 md:p-12 flex items-center justify-center min-h-30 md:min-h-37.5 group hover:shadow-xl transition-all duration-300 bg-white">
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-16 md:max-h-24 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
            />
          </Card>
        </a>
      ))}
    </div>
  </Section>
);

export default BrandsSection;
