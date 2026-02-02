import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Section } from "../components/ui/Section";
import Button from "../components/ui/Button";
import { newReleases, bestSellers } from "../data/products";
import {
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  ArrowLeft,
  Check,
} from "lucide-react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const allProducts = [...newReleases, ...bestSellers];
  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-6">Product Not Found</h2>
        <p className="text-gray-600 mb-6">
          The product you're looking for doesn't exist.
        </p>
        <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
      </Section>
    );
  }

  const sizes = ["EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"];

  return (
    <Section className="py-8 md:py-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 group transition-all">
        <ArrowLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span className="font-medium">Back</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
        {/* Product Image */}
        <div className="relative">
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square sticky top-24 shadow-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="animate-fade-in">
          <div className="mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-semibold">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-4xl md:text-5xl font-bold bg-linear-to-r from-black to-gray-700 bg-clip-text text-transparent mb-6">
              GHS {product.price.toFixed(2)}
            </p>
          </div>

          {/* Size Selection */}
          {product.category === "sneakers" && (
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold mb-4 text-lg">Select Size</h3>
              <div className="grid grid-cols-4 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border-2 py-3 px-2 rounded-lg transition-all font-semibold ${
                      selectedSize === size
                        ? "border-black bg-black text-white shadow-lg scale-105"
                        : "border-gray-300 hover:border-black hover:bg-gray-100"
                    }`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="font-bold mb-4 text-lg">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-black transition-all font-bold">
                -
              </button>
              <span className="w-16 text-center font-bold text-xl">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-black transition-all font-bold">
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <Button className="flex-1 flex items-center justify-center gap-3 text-lg py-4">
              <ShoppingCart size={22} />
              Add to Cart
            </Button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`w-14 h-14 border-2 rounded-lg flex items-center justify-center transition-all ${
                isFavorite
                  ? "border-red-500 bg-red-50 text-red-500"
                  : "border-gray-300 hover:border-black hover:bg-gray-100"
              }`}>
              <Heart size={22} className={isFavorite ? "fill-current" : ""} />
            </button>
            <button className="w-14 h-14 border-2 border-gray-300 rounded-lg hover:border-black hover:bg-gray-100 flex items-center justify-center transition-all">
              <Share2 size={22} />
            </button>
          </div>

          {/* Product Details */}
          <div className="border-t-2 pt-8">
            <h3 className="font-bold mb-4 text-xl">Product Details</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Premium quality {product.category} from authentic sources. Each
              product is carefully inspected to ensure authenticity and quality
              standards. We guarantee 100% original products.
            </p>

            <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Truck size={24} />
                </div>
                <div>
                  <p className="font-semibold">Free Nationwide Delivery</p>
                  <p className="text-sm text-gray-600">
                    Delivered across Ghana
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="font-semibold">100% Authentic Guarantee</p>
                  <p className="text-sm text-gray-600">
                    Verified quality products
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Check size={24} />
                </div>
                <div>
                  <p className="font-semibold">Easy Returns</p>
                  <p className="text-sm text-gray-600">7-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {allProducts.slice(0, 4).map((p) => (
            <div
              key={p.id}
              onClick={() => {
                navigate(`/product/${p.id}`);
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer group">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-sm md:text-base line-clamp-2 mb-2 group-hover:text-gray-700 transition-colors">
                {p.name}
              </h3>
              <p className="font-bold text-lg">GHS {p.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProductDetailPage;
