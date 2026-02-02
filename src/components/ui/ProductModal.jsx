import { useState } from "react";
import { X, ShoppingCart, Heart, Share2, Minus, Plus } from "lucide-react";
import Button from "./Button";

const ProductModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  if (!isOpen || !product) return null;

  const sizes = ["EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-all shadow-lg">
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-4">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                {product.category}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                {product.name}
              </h2>
              <p className="text-3xl font-bold text-black">
                GHS {product.price.toFixed(2)}
              </p>
            </div>

            {/* Size Selection */}
            {product.category === "sneakers" && (
              <div className="mb-6">
                <h3 className="font-bold mb-3">Select Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border-2 py-2 px-2 rounded-lg transition-all font-semibold text-sm ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-black"
                      }`}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-bold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-black transition-all flex items-center justify-center">
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-bold text-lg">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-black transition-all flex items-center justify-center">
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <Button className="flex-1 flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                Add to Cart
              </Button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center transition-all ${
                  isFavorite
                    ? "border-red-500 bg-red-50 text-red-500"
                    : "border-gray-300 hover:border-black"
                }`}>
                <Heart size={20} className={isFavorite ? "fill-current" : ""} />
              </button>
              <button className="w-12 h-12 border-2 border-gray-300 rounded-lg hover:border-black flex items-center justify-center transition-all">
                <Share2 size={20} />
              </button>
            </div>

            {/* Product Description */}
            <div className="border-t pt-6">
              <h3 className="font-bold mb-3">Product Details</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Premium quality {product.category} from authentic sources. Each
                product is carefully inspected to ensure authenticity and
                quality standards. We guarantee 100% original products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
