import HeroCarousel from "../components/home/HeroCarousel";
import CategoriesSection from "../components/home/CategoriesSection";
import ProductsSection from "../components/home/ProductsSection";
import BrandsSection from "../components/home/BrandsSection";
import FeaturesSection from "../components/home/FeaturesSection";
import InstagramSection from "../components/home/InstagramSection";
import { categories, newReleases, bestSellers, brands } from "../data/products";

const HomePage = () => (
  <>
    <HeroCarousel />
    <CategoriesSection categories={categories} />
    <ProductsSection title="New Releases" products={newReleases} />
    <div className="bg-white">
      <ProductsSection title="Best Sellers" products={bestSellers} />
    </div>
    <BrandsSection brands={brands} />
    <FeaturesSection />
    <InstagramSection />
  </>
);

export default HomePage;
