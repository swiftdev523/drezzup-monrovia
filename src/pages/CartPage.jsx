import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Section, SectionTitle } from "../components/ui/Section";
import Button from "../components/ui/Button";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Air Jordan 1 Retro High OG",
      price: 550,
      quantity: 1,
      size: "EU 42",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Adidas Samba OG White",
      price: 450,
      quantity: 2,
      size: "EU 43",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200&h=200&fit=crop",
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <Section className="text-center py-20 min-h-screen flex items-center justify-center">
        <div className="animate-fade-in">
          <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={64} className="text-gray-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Add some awesome items to get started!
          </p>
          <Button
            onClick={() => navigate("/shop")}
            className="inline-flex items-center gap-3">
            Continue Shopping
            <ArrowRight size={20} />
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section className="py-8 md:py-12">
      <SectionTitle>Shopping Cart</SectionTitle>
      <p className="text-center text-gray-600 mb-8">
        {cartItems.length} items in your cart
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex gap-4 md:gap-6 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base md:text-lg mb-2 line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Size: <span className="font-semibold">{item.size}</span>
                </p>
                <p className="font-bold text-xl md:text-2xl">
                  GHS {item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all">
                  <Trash2 size={20} />
                </button>
                <div className="flex items-center gap-2 md:gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 md:w-10 md:h-10 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-black transition-all flex items-center justify-center">
                    <Minus size={16} />
                  </button>
                  <span className="w-8 md:w-10 text-center font-bold text-lg">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-8 h-8 md:w-10 md:h-10 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-black transition-all flex items-center justify-center">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-2xl shadow-2xl sticky top-24 animate-scale-in">
            <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-lg">
                <span className="text-gray-300">Subtotal</span>
                <span className="font-bold">GHS {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-gray-300">Shipping</span>
                <span className="font-bold">
                  {shipping === 0 ? "FREE" : `GHS ${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="border-t border-gray-700 pt-4 flex justify-between">
                <span className="font-bold text-xl">Total</span>
                <span className="font-bold text-2xl">
                  GHS {total.toFixed(2)}
                </span>
              </div>
            </div>
            <Button variant="white" className="w-full mb-4 text-lg py-4">
              Proceed to Checkout
            </Button>
            <button
              onClick={() => navigate("/shop")}
              className="w-full text-center text-gray-300 hover:text-white transition-colors underline">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CartPage;
