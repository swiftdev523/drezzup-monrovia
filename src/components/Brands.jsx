const Brands = ({ brands }) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Popular Brands</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {brands.map((b) => (
          <a
            key={b.id}
            href={`#brand-${b.id}`}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-center justify-center group">
            <img
              src={b.logo}
              alt={b.name}
              className="max-h-20 w-auto group-hover:scale-110 transition-transform"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Brands;
