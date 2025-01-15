import { useState } from "react";
import carrusel_1 from "../assets/carrusel_1.jpeg";
import carrusel_2 from "../assets/carrusel_2.jpg";
import carrusel_3 from "../assets/carrusel_3.jpg";
import carrusel_4 from "../assets/carrusel_4.avif";
import carrusel_5 from "../assets/carrusel_5.jpg";

function Carrusel() {
  // Estado para controlar el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [carrusel_1, carrusel_2, carrusel_3, carrusel_4, carrusel_5];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Ciclar entre las imágenes
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Ciclar hacia atrás
  };

  return (
    <div id="default-carousel" className="relative w-full px-20" data-carousel="slide">
      <div className="relative h-96 overflow-hidden rounded-lg md:h-100">
        {/* Items del carrusel */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-1000 ease-in-out transition-all absolute w-full h-full ${
              index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
            data-carousel-item
          >
            <img
              src={image}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover"
              alt={`Carrusel ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Indicadores del carrusel */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
            aria-current={index === currentIndex ? "true" : "false"}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Controles del carrusel */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Carrusel;
