import React from 'react';
import profil from '../assets/profil.jpeg';

const Hero = () => {
  return (
    <div
      name="hero"
      className="hero w-full h-screen pt-20 md:pt-[180px] mb-40 bg-gradient-to-b from-sky-100  ">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src={profil}
              alt="ellipse image"
              className="rounded-[140px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover drop-shadow-[0_25px_20px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <p className="text-[#7AB2D3] text-lg md:text-2xl">Hello, my name is</p>
            <h1 className="text-3xl md:text-5xl font-bold text-[#001F3F]">
              Bibit <br />
              <span className="text-[#3A6D8C]">Aryo Utomo</span>
            </h1>
            <h2 className="text-lg md:text-2xl font-bold text-[#3A6D8C] mt-4">
              Junior Web Developer
            </h2>
            <p className="text-[#0d2627] mt-4 text-sm md:text-base">
              The most ordinary, simple, kind and standard male college student that loves making websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
