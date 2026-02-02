import { Section, SectionTitle } from "../ui/Section";
import CategoryCard from "./CategoryCard";
import Button from "../ui/Button";

const CategoriesSection = ({ categories }) => (
  <Section id="categories" className="bg-white">
    <SectionTitle>Shop by Category</SectionTitle>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
    <div className="text-center">
      <Button variant="outline" className="px-10 py-4 text-base font-bold">VIEW ALL</Button>
    </div>
  </Section>
);

export default CategoriesSection;
