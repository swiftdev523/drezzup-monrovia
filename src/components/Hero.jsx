const Hero = () => (
  <section className="relative bg-gray-900 text-white h-150">
    <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50 z-10" />
    <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=600&fit=crop)] bg-cover bg-center" />
    <div className="relative z-20 h-full flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-wider mb-4">
            NIKE COLLECTION
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Just Do It</h1>
          <p className="text-xl mb-8 text-gray-200">
            Discover the newest Nike sneakers and athletic wear
          </p>
          <a
            href="#products"
            className="inline-block bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition">
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
