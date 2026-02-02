import { Section, SectionTitle } from "../ui/Section";
import CategoryCard from "./CategoryCard";
import Button from "../ui/Button";

const CategoriesSection = ({ categories }) => (
  <Section id="categories" className="bg-gray-50">
    <SectionTitle>Shop by Category</SectionTitle>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
    <div className="text-center">
      <Button variant="outline">VIEW ALL</Button>
    </div>
  </Section>
);

export default CategoriesSection;
