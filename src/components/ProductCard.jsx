const ProductCard = ({ product: p }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
    <div className="aspect-square overflow-hidden bg-gray-100">
      <img
        src={p.image}
        alt={p.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{p.name}</h3>
      <p className="text-2xl font-bold">GHS {p.price}</p>
      <button className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductCard;
