const Categories = ({ categories }) => (
  <section id="categories" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((c) => (
          <a
            key={c.id}
            href={`#category-${c.id}`}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="aspect-square bg-white">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <h3 className="text-white text-xl font-bold p-4 uppercase">
                {c.name}
              </h3>
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="#products"
          className="inline-block border-2 border-black px-8 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition">
          VIEW ALL
        </a>
      </div>
    </div>
  </section>
);

export default Categories;
