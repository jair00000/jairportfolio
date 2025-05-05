import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../sections/navbar.jsx';
import Footer from '../sections/Footer.jsx';
import Contact from '../sections/Contact.jsx';

const nhfImages = [
  '/assets/nhf/nhf_page1.png',
  '/assets/nhf/nhf_page2.png',
  '/assets/nhf/nhf_page3.png',
  '/assets/nhf/nhf_page4.png',
  '/assets/nhf/nhf_page5.png',
  '/assets/nhf/nhf_page6.png',
];

const progressData = [
  { label: 'Research', value: 85 },
  { label: 'Interaction design', value: 80 },
  { label: 'Visual design', value: 100 },
  { label: 'Front-End development', value: 90 },
  { label: 'Back-End development', value: 90 },
];

const NHF = () => {
  const [current, setCurrent] = useState(0);
  const total = nhfImages.length;
  const [scrollProgress, setScrollProgress] = useState(0);
  const contribRef = useRef(null);

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  useEffect(() => {
    const handleScroll = () => {
      if (contribRef.current) {
        const rect = contribRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Calculate how much of the element is visible
        const visible = Math.max(0, Math.min(windowHeight - elementTop, elementHeight));
        const progress = (visible / elementHeight) * 100;
        
        // Only update if the element is in view
        if (progress > 0 && progress < 100) {
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen pb-0 bg-[#f5f8fa]">
      <Navbar />
      {/* Top section with black background */}
      <div className="w-full bg-[#181B1F]">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 pt-24 sm:pt-32">
          <div className="text-white mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Jeriel Jair</h1>
            <p className="text-base sm:text-lg text-gray-300">Full Stack Developer</p>
          </div>
          {/* Responsive carousel */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-12 gap-4 sm:gap-0">
            {/* Left arrow outside */}
            <button onClick={prev} aria-label="Previous" className="bg-white border border-[#eee] rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#f0f0f0] transition-all z-10 sm:mr-4 mb-2 sm:mb-0">
              <svg className="w-5 h-5 text-[#666]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {/* Image container */}
            <div className="w-full min-w-0 max-w-full h-[40vh] sm:h-[60vh] overflow-y-auto shadow-xl bg-white flex items-start justify-center">
              <img src={nhfImages[current]} alt={`NHF Page ${current + 1}`} className="w-full h-auto block" />
            </div>
            {/* Right arrow outside */}
            <button onClick={next} aria-label="Next" className="bg-white border border-[#eee] rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#f0f0f0] transition-all z-10 sm:ml-4 mt-2 sm:mt-0">
              <svg className="w-5 h-5 text-[#666]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Info and contribution sections on light background */}
      <div className="w-full bg-[#f5f8fa]">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 py-6 sm:py-8">
            <div className="text-[#607B8B] text-base sm:text-lg"><span className="font-bold text-[#1a1a1a]">Role:</span> Product Developer</div>
            <div className="text-[#607B8B] text-base sm:text-lg"><span className="font-bold text-[#1a1a1a]">Context:</span> Nourish Hope Website</div>
            <div className="text-[#607B8B] text-base sm:text-lg"><span className="font-bold text-[#1a1a1a]">Duration:</span> January 2024 - July 2025</div>
          </div>
          {/* My individual contribution section */}
          <div className="mt-10 sm:mt-16 mb-8 sm:mb-12" ref={contribRef}>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-4">My individual contribution</h2>
            <p className="text-[#607B8B] text-base sm:text-lg mb-8 max-w-4xl">
              I was hired as the first and sole web developer on the project, responsible for researching, designing, prototyping, and executing all full-stack development to build the website's landing page. Working independently at a small startup taught me valuable lessons—especially in time management and adapting designs based on client feedback. This experience allowed me to sharpen my skills and inspired me to seek more opportunities to create impactful projects .
            </p>
            <div className="space-y-6 sm:space-y-8">
              {progressData.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 text-[#1a1a1a] text-base sm:text-lg">{item.label}</div>
                  <div className="w-full h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-3 sm:h-4 bg-red-500 rounded-full transition-all duration-300 ease-out"
                      style={{ 
                        width: `${(scrollProgress / 100) * item.value}%`,
                        transition: 'width 0.3s ease-out'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default NHF; 