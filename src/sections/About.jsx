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
    <section className="relative bg-blue-50 py-20" id="about">
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side content */}
          <div className="space-y-16">
            {/* About text section */}
            <div className="pt-32">
              <div className="max-w-[500px] space-y-6">
                <h2 className="text-4xl font-bold text-[#607D8B] leading-tight">
                  I have a background in Computer Science with expertise in software development and real-world problem-solving.
                </h2>
                <p className="text-lg text-[#607D8B] leading-relaxed">
                  My experience has strengthened my ability to manage time well, stay focused, and deliver solutions efficiently.
                  Dedicated to continuous learning and growth.
                </p>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mt-24">
              <h3 className="text-4xl font-bold text-[#0055FF] leading-tight mb-8">
                Some of tech languages that I am acquainted with,
              </h3>
              
              {/* Tech stack container with visible scrolling */}
              <div className="relative max-w-full">
                {/* Scroll indicators */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-16 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-16 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>
                
                {/* Scrollable container */}
                <div className="overflow-x-auto pb-4 mb-2 max-w-full" style={{ WebkitOverflowScrolling: 'touch' }}>
                  <div className="flex gap-6 px-2" style={{ width: 'max-content' }}>
                    {Array.from({ length: Math.ceil(techStack.length / 4) }).map((_, groupIndex) => (
                      <div key={groupIndex} className="grid grid-cols-2 gap-6 w-[260px]">
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
          <div className="relative w-full h-full pt-32">
            {/* Background square */}
            <div className="absolute -top-7 -right-24 -bottom-24 w-[95%] bg-[#F0F4F6] rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)]"></div>
            
            {/* Photo with shadow */}
            <div className="relative w-[85%] ml-auto">
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
