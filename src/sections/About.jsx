import React from 'react';
import StackIcon from '../components/StackIcon';

const About = () => {
  const techStack = [
    'python', 'c++', 'ruby', 'rails',
    'php', 'java', 'kotlin', 'json',
    'nodejs', 'figma', 'flutter', 'html5',
    'css3', 'tailwindcss', 'js', 'reactjs',
    'vitejs', 'threejs', 'supabase', 'xampp',
    'git', 'github', 'rust', 'solidity'
  ];

  return (
    <section className="relative bg-blue-50 py-12 sm:py-16 lg:py-20" id="about">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-6 md:px-10 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-16 items-start">
          {/* Left side content */}
          <div className="space-y-6 sm:space-y-10 md:space-y-14 lg:space-y-16">
            {/* About text section */}
            <div className="pt-8 sm:pt-16 md:pt-24 lg:pt-32">
              <div className="max-w-[500px] space-y-3 sm:space-y-5 md:space-y-8 lg:space-y-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#607D8B] leading-tight">
                  I have a background in Computer Science with expertise in software development and real-world problem-solving.
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#607D8B] leading-relaxed">
                  My experience has strengthened my ability to manage time well, stay focused, and deliver solutions efficiently.
                  Dedicated to continuous learning and growth.
                </p>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mt-8 sm:mt-14 md:mt-20 lg:mt-24">
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0055FF] leading-tight mb-4 sm:mb-8">
                Some of tech languages that I am acquainted with,
              </h3>
              
              {/* Tech stack container with visible scrolling */}
              <div className="relative max-w-full">
                {/* Scroll indicators */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 sm:w-8 h-8 sm:h-16 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 sm:w-8 h-8 sm:h-16 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>
                
                {/* Scrollable container */}
                <div className="overflow-x-auto pb-4 mb-2 max-w-full" style={{ WebkitOverflowScrolling: 'touch' }}>
                  <div className="flex gap-3 sm:gap-5 md:gap-8 px-1 sm:px-2 md:px-4" style={{ width: 'max-content' }}>
                    {Array.from({ length: Math.ceil(techStack.length / 4) }).map((_, groupIndex) => (
                      <div key={groupIndex} className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-8 w-[160px] sm:w-[220px] md:w-[240px] lg:w-[260px]">
                        {techStack.slice(groupIndex * 4, (groupIndex + 1) * 4).map((tech, index) => (
                          <StackIcon key={`${groupIndex}-${index}`} name={tech} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side image with floating effect */}
          <div className="relative w-full h-full pt-8 sm:pt-24 md:pt-28 lg:pt-32 flex justify-center">
            {/* Background square */}
            <div className="absolute -top-2 sm:-top-7 md:-top-10 -right-2 sm:-right-12 md:-right-16 -bottom-8 sm:-bottom-24 md:-bottom-28 w-[95%] sm:w-[90%] md:w-[85%] bg-[#F0F4F6] rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)]"></div>
            
            {/* Photo with shadow */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[80%] mx-auto z-10">
              <img 
                src="assets/jair.JPG" 
                alt="Jair's photo" 
                className="w-full h-auto object-cover rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default About;
