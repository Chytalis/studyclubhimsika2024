import React, { useState } from "react";
import Image1 from "../assets/BITBIT.png"; // Adjust paths as per your project structure
import Image2 from "../assets/Fdfest.png";
import Image3 from "../assets/Kalkulator.png";
import { Link } from 'react-scroll';

const Carousel = () => {
  const images = [Image1, Image2, Image3]; // Use imported images here

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div name="carousel" className="relative w-full py-10 mb-44 ">
     
      <h1 className="text-5xl font-bold text-[#FFF6E3] text-center mb-8">
        Projects
      </h1>

      {/* Carousel Wrapper */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Carousel Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700"
          onClick={handlePrev}
        >
          &#8592; {/* Left Arrow */}
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700"
          onClick={handleNext}
        >
          &#8594; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
