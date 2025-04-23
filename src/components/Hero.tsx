import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1577003833619-76bbd7f82948?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Productos Naturales",
    subtitle: "Salud y bienestar desde la naturaleza"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Calidad Garantizada",
    subtitle: "Más de 30 años de experiencia"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Soluciones Naturales",
    subtitle: "Para una vida más saludable"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('nosotros');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">{slide.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl">{slide.subtitle}</p>
            <button onClick={scrollToNext} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
              Descubrir Más
            </button>
          </div>
        </div>
      ))}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button onClick={scrollToNext} className="text-white animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;