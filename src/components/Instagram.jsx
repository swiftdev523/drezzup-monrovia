const images = [
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=400&h=400&fit=crop",
];

const Instagram = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Behind the Scenes</h2>
        <a
          href="https://www.instagram.com/drezzupstores"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
          FOLLOW US
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-lg">
            <img
              src={img}
              alt={`Instagram ${i + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Instagram;
