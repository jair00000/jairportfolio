import React from 'react';

const Projects = () => {
  return (
    <section className="relative bg-white py-20" id="projects">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side images container */}
          <div className="md:w-1/2 relative h-[600px]">
            {/* Large back image */}
            <div className="absolute left-0 top-0 w-full h-full">
              <img 
                src="/assets/projects/webp1.png" 
                alt="Main project view"
                className="w-full h-full object-cover object-top rounded-lg shadow-xl"
              />
            </div>

            {/* Stacked images in front */}
            <div className="absolute left-0 -bottom-[5%] w-[45%] h-[35%] z-10">
              <div className="relative w-full h-full">
                {/* Back of stack */}
                <div className="absolute inset-0 transform translate-x-8 translate-y-8 z-0">
                  <img 
                    src="/assets/projects/webp3.png" 
                    alt="Project screenshot 3" 
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Middle of stack */}
                <div className="absolute inset-0 transform translate-x-4 translate-y-4 z-10">
                  <img 
                    src="/assets/projects/webp1.png" 
                    alt="Project screenshot 1" 
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Front of stack */}
                <div className="absolute inset-0 z-20">
                  <img 
                    src="/assets/projects/webp2.png" 
                    alt="Project screenshot 2" 
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="md:w-1/2">
            <div className="text-[#1a1a1a] mb-4">
              <span className="text-gray-500 text-sm">01 / 03</span>
              <h2 className="text-4xl font-bold mt-2">NHF</h2>
            </div>
            <p className="text-gray-600 mb-8">
              NHF is a non-profit organization dedicated to supporting children in need through generous donations and compassionate programs. This project website serves as a platform to raise awareness, encourage giving, and make a lasting impact in the lives of underprivileged children.
            </p>
            <button className="px-6 py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-[#45a049] transition-colors">
              View case study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
