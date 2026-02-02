import ProductCard from "./ProductCard";

const ProductSection = ({ title, products, showAll = false }) => (
  <section id="products" className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">{title}</h2>
        <a
          href="#all-products"
          className="text-sm font-semibold border-b-2 border-black hover:opacity-70 transition">
          SHOP ALL
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {(showAll ? products : products.slice(0, 4)).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductSection;
