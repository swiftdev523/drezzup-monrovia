import { useState } from "react";
import { Section, SectionTitle } from "../components/ui/Section";
import ProductCard from "../components/home/ProductCard";
import { categories, newReleases, bestSellers } from "../data/products";
import { Filter, X, SlidersHorizontal } from "lucide-react";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const allProducts = [...newReleases, ...bestSellers];

  const filteredProducts = allProducts
    .filter(
      (p) => selectedCategory === "all" || p.category === selectedCategory,
    )
    .filter((p) => {
      if (priceRange === "all") return true;
      if (priceRange === "under200") return p.price < 200;
      if (priceRange === "200-400") return p.price >= 200 && p.price <= 400;
      if (priceRange === "over400") return p.price > 400;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <Section className="min-h-screen py-8">
      <div className="mb-8">
        <SectionTitle>Shop All Products</SectionTitle>
        <p className="text-gray-600 mt-2 text-center">
          {filteredProducts.length} products available
        </p>
      </div>

      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="md:hidden mb-6 flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition-all active:scale-95">
        <SlidersHorizontal size={20} />
        <span className="font-semibold">Filters</span>
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div
          className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-72 shrink-0`}>
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl sticky top-24 border border-gray-100">
            <div className="flex justify-between items-center mb-6 md:hidden">
              <h3 className="text-xl font-bold">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-all">
                <X size={20} />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-lg">Category</h3>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-black focus:outline-none transition-all cursor-pointer hover:border-gray-400">
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name.toLowerCase()}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-lg">Price Range</h3>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-black focus:outline-none transition-all cursor-pointer hover:border-gray-400">
                <option value="all">All Prices</option>
                <option value="under200">Under GHS 200</option>
                <option value="200-400">GHS 200 - 400</option>
                <option value="over400">Over GHS 400</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <h3 className="font-bold mb-4 text-lg">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-black focus:outline-none transition-all cursor-pointer hover:border-gray-400">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-4">No products found</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setPriceRange("all");
                }}
                className="text-black font-semibold border-b-2 border-black hover:opacity-70 transition">
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default ShopPage;
