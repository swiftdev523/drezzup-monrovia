import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <section className="relative h-[50vh] sm:h-[60vh] bg-gray-900 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12 w-full">
              <div className="max-w-3xl text-white text-center mx-auto">
                <p className="text-[10px] sm:text-xs font-medium tracking-[0.15em] mb-2 uppercase text-gray-300 animate-slide-in">
                  {slide.brand}
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed animate-slide-in">
                  {slide.description}
                </p>
                <div className="flex justify-center">
                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm hover:bg-white transition-all duration-300 hover:gap-3 hover:shadow-2xl group animate-scale-in border border-white/60 active:scale-95">
                    {slide.cta}
                    <span className="text-xl group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/60 backdrop-blur-xl hover:bg-white/80 text-black p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 z-10 hover:scale-110 active:scale-95 shadow-2xl border border-white/40">
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/60 backdrop-blur-xl hover:bg-white/80 text-black p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 z-10 hover:scale-110 active:scale-95 shadow-2xl border border-white/40">
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8 sm:w-12"
                : "bg-white/50 w-1.5 sm:w-2 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
