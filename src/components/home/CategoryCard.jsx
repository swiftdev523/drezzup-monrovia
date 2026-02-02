import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Card from "../ui/Card";

const CategoryCard = ({ category }) => (
  <Link to={`/shop?category=${category.id}`} className="group block">
    <Card className="relative overflow-hidden aspect-square hover:shadow-2xl transition-all duration-500 rounded-2xl">
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
        <h3 className="text-white text-l md:text-xl lg:text-2xl font-normal uppercase tracking-wide group-hover:tracking-wider transition-all duration-300">
          {category.name}
        </h3>
      </div>
    </Card>
  </Link>
);

export default CategoryCard;
