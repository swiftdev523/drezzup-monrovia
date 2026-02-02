import { Section, SectionTitle } from "../ui/Section";
import Card from "../ui/Card";

const BrandsSection = ({ brands }) => (
  <Section className="bg-white">
    <div className="text-center mb-16">
      <SectionTitle>Popular Brands</SectionTitle>
      <p className="text-gray-600 text-lg mt-4">
        Shop from the world's leading fashion brands
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
      {brands.map((brand, index) => (
        <a
          key={brand.id}
          href={`#brand-${brand.id}`}
          className="animate-scale-in"
          style={{ animationDelay: `${index * 100}ms` }}>
          <Card className="p-10 md:p-16 flex items-center justify-center min-h-37.5 md:min-h-45 group hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl">
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
