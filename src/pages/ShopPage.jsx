import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Section, SectionTitle } from "../components/ui/Section";
import ProductCard from "../components/home/ProductCard";
import ProductModal from "../components/ui/ProductModal";
import { categories, newReleases, bestSellers } from "../data/products";
import {
  Filter,
  X,
  SlidersHorizontal,
  Grid3x3,
  LayoutGrid,
} from "lucide-react";

const ShopPage = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState("compact"); // 'large' or 'compact'

  // Read category from URL params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    // Scroll to top when category changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.search]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const allProducts = [...newReleases, ...bestSellers];

  const filteredProducts = allProducts
    .filter(
      (p) =>
        selectedCategory === "all" ||
        p.category.toLowerCase() === selectedCategory.toLowerCase(),
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
    <Section className="min-h-screen py-5 md:py-10">
      {/* Top Bar with Filters and View Toggle */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="font-mono font-semibold text-2xl">All Products</div>
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center gap-2 bg-black/90 backdrop-blur-md text-white px-4 py-2.5 rounded-xl shadow-lg hover:bg-black transition-all active:scale-95 border border-white/10">
          <SlidersHorizontal size={18} />
          <span className="font-medium text-sm">Filters</span>
        </button>

        {/* View Toggle */}
        <div className="ml-auto flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setViewMode("large")}
            className={`p-2 rounded-md transition-all ${
              viewMode === "large" ? "bg-white shadow-sm" : "hover:bg-gray-200"
            }`}
            title="Large grid">
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => setViewMode("compact")}
            className={`p-2 rounded-md transition-all ${
              viewMode === "compact"
                ? "bg-white shadow-sm"
                : "hover:bg-gray-200"
            }`}
            title="Compact grid">
            <Grid3x3 size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
        {/* Filters Sidebar */}
        <div
          className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-64 shrink-0`}>
          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-xl sticky top-20 sm:top-24 border border-gray-100">
            <div className="flex justify-between items-center mb-4 sm:mb-6 md:hidden">
              <h3 className="text-lg sm:text-xl font-bold">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-all">
                <X size={20} />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-4 sm:mb-6">
              <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Category
              </h3>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 sm:py-2.5 text-sm focus:border-black focus:outline-none transition-all cursor-pointer hover:border-gray-400">
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name.toLowerCase()}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="mb-4 sm:mb-6">
              <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Price Range
              </h3>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 sm:py-2.5 text-sm focus:border-black focus:outline-none transition-all cursor-pointer hover:border-gray-400">
                <option value="all">All Prices</option>
                <option value="under200">Under GHS 200</option>
                <option value="200-400">GHS 200 - 400</option>
                <option value="over400">Over GHS 400</option>
              </select>
            </div>

            {/* Sort By */}
            <div className="mb-4 sm:mb-6">
              <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Sort By
              </h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 sm:py-2.5 text-sm focus:border-black focus:outline-none transition-all cursor-pointer hover:border-gray-400">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            {/* Clear Filters Button */}
            <button
              onClick={() => {
                setSelectedCategory("all");
                setPriceRange("all");
                setSortBy("featured");
              }}
              className="w-full bg-white/50 backdrop-blur-sm border border-gray-300/50 text-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium hover:bg-white/80 hover:border-gray-400 transition-all shadow-sm active:scale-95">
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 sm:py-16 md:py-20">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">
                🔍
              </div>
              <p className="text-gray-500 text-base sm:text-lg mb-3 sm:mb-4">
                No products found
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setPriceRange("all");
                }}
                className="text-sm sm:text-base text-black font-semibold border-b-2 border-black hover:opacity-70 transition active:scale-95">
                Reset Filters
              </button>
            </div>
          ) : (
            <div
              className={`grid ${
                viewMode === "large"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
                  : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
              }`}>
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 30}ms` }}>
                  <ProductCard
                    product={product}
                    onProductClick={handleProductClick}
                    compact={viewMode === "compact"}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        allProducts={allProducts}
      />
    </Section>
  );
};

export default ShopPage;
