import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <section className="min-h-screen w-full flex relative bg-white" id="home">
      {/* Right side light blue background */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-50" />
      
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex items-center">
        <div className="max-w-3xl relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="text-[#0055FF]">Let's design smarter solutions,</span>{' '}
            <span className="text-[#607B8B]">build powerful systems, and deliver meaningful results.</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed text-[#607B8B]">
            Hi, I'm Jeriel Jair — a passionate problem solver committed to crafting intuitive software products and seamless UI/UX experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#projects">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-[#0066FF] text-white rounded-lg hover:bg-blue-700 transition-colors text-base sm:text-lg">
                View Projects
              </button>
            </a>
            <a href="#contact">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 border-2 border-[#0066FF] text-[#0066FF] rounded-lg hover:bg-blue-50 transition-colors text-base sm:text-lg">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
