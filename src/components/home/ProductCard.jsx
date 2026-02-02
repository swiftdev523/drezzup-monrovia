import { useNavigate } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 relative rounded-2xl bg-white"
      onClick={() => navigate(`/product/${product.id}`)}>
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200">
          <Heart size={18} className="text-gray-700" />
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
      <div className="p-5 md:p-6">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
          {product.category}
        </p>
        <h3 className="font-semibold text-base md:text-lg mb-3 line-clamp-2 min-h-12 group-hover:text-gray-700 transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-xl md:text-2xl font-extrabold mb-4 text-gray-900">
          GHS {product.price.toFixed(2)}
        </p>
        <Button
          className="w-full text-sm md:text-base group/btn hover:gap-3 transition-all"
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart logic here
          }}>
          <ShoppingCart
            size={18}
            className="transition-transform group-hover/btn:scale-110"
          />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
