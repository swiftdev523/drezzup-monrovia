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
          className="bg-white/70 backdrop-blur-md p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-white/90 hover:scale-110 transition-all duration-200 border border-white/60">
          <Heart size={14} className="sm:w-4 sm:h-4 text-gray-700" />
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
      <div className={compact ? "p-3 sm:p-4" : "p-4 sm:p-5 md:p-6"}>
        <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 mb-1 font-normal">
          {product.category}
        </p>
        <h3
          className={`${compact ? "text-xs sm:text-sm md:text-base mb-2 line-clamp-2 min-h-[2.5rem]" : "text-sm sm:text-base md:text-lg mb-2 sm:mb-3 line-clamp-2 min-h-10 sm:min-h-12"} group-hover:text-gray-700 transition-colors leading-snug font-normal`}>
          {product.name}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <p
            className={`${compact ? "text-sm sm:text-base md:text-lg" : "text-base sm:text-lg md:text-xl"} font-semibold text-gray-900`}>
            GHS {product.price.toFixed(2)}
          </p>
          <button
            className="bg-black/90 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-lg hover:bg-black transition-all hover:scale-110 active:scale-95 shadow-md border border-white/10"
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic here
            }}
            title="Add to Cart">
            <ShoppingCart
              size={compact ? 14 : 16}
              className="sm:w-[16px] sm:h-[16px]"
            />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
