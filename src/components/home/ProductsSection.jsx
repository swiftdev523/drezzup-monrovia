import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import ProductCard from "./ProductCard";

const ProductsSection = ({ title, products }) => (
  <Section id="products">
    <SectionHeader
      title={title}
      action={
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2 text-sm font-bold border-b-2 border-black hover:gap-3 transition-all duration-300 pb-1">
          SHOP ALL
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      }
    />
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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
