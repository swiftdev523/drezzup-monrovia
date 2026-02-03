import { useState, useEffect } from "react";
import {
  X,
  ShoppingCart,
  Heart,
  Share2,
  Minus,
  Plus,
  Star,
} from "lucide-react";
import Button from "./Button";

const ProductModal = ({ product, isOpen, onClose, allProducts = [] }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Scroll to top when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const sizes = ["EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"];
  const rating = 4;
  const reviewCount = 126;

  // Get 4 random related products (excluding current product)
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}>
      <div
        className="bg-white rounded-none sm:rounded-2xl max-w-4xl w-full h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in relative"
        onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 sm:p-2.5 transition-all shadow-lg hover:scale-110 active:scale-95">
          <X size={18} className="sm:w-5 sm:h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 uppercase">
                {product.name}
              </h2>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`sm:w-[18px] sm:h-[18px] ${
                        i < rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-600">
                  ({reviewCount} reviews)
                </span>
              </div>

              <p className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">
                ₵ {product.price.toFixed(2)}
              </p>

              {/* Description */}
              <div className="mb-3 sm:mb-4">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">
                  Description
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Premium quality {product.category} from authentic sources.
                  Each product is carefully inspected to ensure authenticity and
                  quality standards.
                </p>
              </div>

              {/* Stock Status */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-2.5 sm:p-3 mb-3 sm:mb-4">
                <p className="text-green-700 text-xs sm:text-sm font-medium">
                  ✓ In Stock (100 available)
                </p>
              </div>
            </div>

            {/* Size Selection */}
            {(product.category.toLowerCase() === "sneakers" ||
              product.category.toLowerCase() === "birkenstocks") && (
              <div className="mb-4 sm:mb-6">
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  Select Size
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border-2 py-2.5 px-2 rounded-lg transition-all font-medium text-sm hover:scale-105 ${
                        selectedSize === size
                          ? "border-black bg-black text-white shadow-lg"
                          : "border-gray-300 hover:border-black hover:bg-gray-50"
                      }`}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-4 sm:mb-6">
              <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Quantity
              </h3>
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 sm:w-11 sm:h-11 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-black transition-all flex items-center justify-center active:scale-95">
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-bold text-lg sm:text-xl">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 sm:w-11 sm:h-11 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-black transition-all flex items-center justify-center active:scale-95">
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-black font-bold py-3.5 sm:py-4 rounded-xl transition-all mb-3 shadow-lg uppercase text-sm tracking-wide active:scale-[0.98]">
              Add to Cart
            </button>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 py-3 rounded-xl border-2 transition-all font-medium text-xs sm:text-sm active:scale-[0.98] ${
                  isWishlisted
                    ? "border-red-500 bg-red-50 text-red-600 shadow-md"
                    : "border-gray-300 hover:border-black hover:bg-gray-50"
                }`}>
                <Heart
                  size={16}
                  className={`sm:w-[18px] sm:h-[18px] ${isWishlisted ? "fill-current" : ""}`}
                />
                <span className="hidden xs:inline">Wishlist</span>
              </button>
              <button className="flex items-center justify-center gap-1.5 sm:gap-2 py-3 rounded-xl border-2 border-gray-300 hover:border-black hover:bg-gray-50 transition-all font-medium text-xs sm:text-sm active:scale-[0.98]">
                <Share2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="hidden xs:inline">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Other Products You May Like */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-200 p-4 sm:p-6 md:p-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold">
                Other Products You May Like
              </h3>
              <span className="text-[10px] sm:text-xs font-semibold text-gray-600 bg-white px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-gray-200 sm:border-2 shadow-sm">
                Popular Picks
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-xl overflow-hidden border-2 border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all cursor-pointer group transform hover:scale-[1.02]">
                  <div className="aspect-square overflow-hidden bg-gray-100 relative">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity" />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-gray-500 uppercase mb-1 font-medium">
                      {relatedProduct.category}
                    </p>
                    <h4 className="text-sm font-medium mb-2 line-clamp-2 min-h-[2.5rem] group-hover:text-gray-600 transition-colors">
                      {relatedProduct.name}
                    </h4>
                    <p className="text-base font-bold">
                      ₵ {relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
