import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "../../config/constants";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );

  return (
    <section className="relative h-125 md:h-150 lg:h-175 bg-gray-900 overflow-hidden">
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}>
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl text-white">
                <p className="text-xs md:text-sm font-semibold tracking-[0.3em] mb-4 uppercase text-gray-300 animate-slide-in">
                  {slide.brand}
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-base md:text-xl mb-8 text-gray-200 max-w-xl animate-slide-in">
                  {slide.description}
                </p>
                <a
                  href={slide.ctaLink}
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-gray-100 transition-all duration-300 hover:gap-5 hover:shadow-2xl group animate-scale-in">
                  {slide.cta}
                  <span className="text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-black p-3 md:p-4 rounded-full transition-all duration-300 z-10 hover:scale-110 shadow-xl">
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-black p-3 md:p-4 rounded-full transition-all duration-300 z-10 hover:scale-110 shadow-xl">
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-12"
                : "bg-white/50 w-2 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
