import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import ProductCard from "./ProductCard";

const ProductsSection = ({ title, products }) => (
  <Section id="products" className="bg-gray-50">
    <SectionHeader
      title={title}
      action={
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2 text-base font-bold hover:gap-3 transition-all duration-300 uppercase tracking-wide">
          SHOP ALL
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      }
    />
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {products.slice(0, 4).map((product, index) => (
        <div
          key={product.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  </Section>
);

export default ProductsSection;
