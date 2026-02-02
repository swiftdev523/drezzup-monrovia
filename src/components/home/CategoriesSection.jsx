import { Section, SectionTitle } from "../ui/Section";
import CategoryCard from "./CategoryCard";
import Button from "../ui/Button";

const CategoriesSection = ({ categories }) => (
  <Section id="categories" className="bg-white">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
      <a href="/shop" className="text-sm font-semibold hover:underline">
        VIEW ALL
      </a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  </Section>
);

export default CategoriesSection;
