import { ShoppingCart, Heart } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const ProductCard = ({ product, onProductClick, compact = false }) => {
  return (
    <Card
      className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 relative rounded-2xl bg-white"
      onClick={() => onProductClick(product)}>
      <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200">
          <Heart size={16} className="text-gray-700" />
        </button>
      </div>
      <div className="aspect-square overflow-hidden bg-gray-100 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>
      <div className={compact ? "p-3 md:p-4" : "p-5 md:p-6"}>
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
          {product.category}
        </p>
        <h3
          className={`${compact ? "text-sm md:text-base mb-2 line-clamp-2 min-h-[2.5rem]" : "text-base md:text-lg mb-3 line-clamp-2 min-h-12"} group-hover:text-gray-700 transition-colors leading-snug font-medium`}>
          {product.name}
        </h3>
        <p
          className={`${compact ? "text-base md:text-lg mb-3" : "text-lg md:text-xl mb-4"} font-bold text-gray-900`}>
          GHS {product.price.toFixed(2)}
        </p>
        <Button
          className={`w-full ${compact ? "text-xs md:text-sm py-2" : "text-sm md:text-base"} group/btn hover:gap-3 transition-all`}
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart logic here
          }}>
          <ShoppingCart
            size={compact ? 16 : 18}
            className="transition-transform group-hover/btn:scale-110"
          />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
