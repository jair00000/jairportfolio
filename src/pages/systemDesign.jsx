import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../sections/navbar.jsx';
import Footer from '../sections/Footer.jsx';
import Contact from '../sections/Contact.jsx';

const progressData = [
  { label: 'Research', value: 70 },
  { label: 'Visual Design', value: 30 },
  { label: 'Architectural Design', value: 50 },
  { label: 'Security', value: 80 },
  { label: 'Business', value: 60 },
];

const SystemDesign = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contribRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowPdf(false);
  };

  return (
    <div className="min-h-screen pb-0 bg-[#f5f8fa]">
      <Navbar />
      {/* Hero section with three images as in the Projects section */}
      <section className="w-full flex relative bg-white">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-50" />
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
          {/* Left: Headline text */}
          <div className="max-w-3xl relative z-10 flex-1 w-full md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="text-[#0055FF]">Let's design smarter solutions,</span>{' '}
              <span className="text-[#607B8B]">build powerful systems, and deliver meaningful results.</span>
            </h1>
          </div>
          {/* Right: Images in a grid as in Projects section, with blue background */}
          <div className="flex-1 w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full grid grid-cols-2 gap-3 sm:gap-4 items-center justify-center bg-[#e6f2ff] p-4 sm:p-6 rounded-xl">
              <div className="aspect-square relative cursor-pointer" onClick={() => handleImageClick('/assets/projects/systemDesign1.png')}>
                <img 
                  src="/assets/projects/systemDesign1.png" 
                  alt="System Design 1" 
                  className="w-full h-full object-cover rounded-lg shadow-[0_20px_50px_rgba(0,_102,_255,_0.3)] bg-white p-2 hover:opacity-90 transition-opacity"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/projects/app1.jpg';
                  }}
                />
              </div>
              <div className="aspect-square relative cursor-pointer" onClick={() => handleImageClick('/assets/projects/systemDesign2.png')}>
                <img 
                  src="/assets/projects/systemDesign2.png" 
                  alt="System Design 2" 
                  className="w-full h-full object-cover rounded-lg shadow-[0_20px_50px_rgba(0,_102,_255,_0.3)] bg-white p-2 hover:opacity-90 transition-opacity"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/projects/app2.jpg';
                  }}
                />
              </div>
              <div className="col-span-2 aspect-video relative cursor-pointer" onClick={() => handleImageClick('/assets/projects/systemDesign3.png')}>
                <img 
                  src="/assets/projects/systemDesign3.png" 
                  alt="System Design 3" 
                  className="w-full h-full object-cover rounded-lg shadow-[0_20px_50px_rgba(0,_102,_255,_0.3)] bg-white p-2 hover:opacity-90 transition-opacity"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/projects/app3.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Info and contribution sections on light background */}
      <div className="w-full bg-[#f5f8fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4 py-4 sm:py-6">
            <div className="text-[#607B8B] text-sm sm:text-base lg:text-lg"><span className="font-bold text-[#1a1a1a]">Role:</span> System Researcher</div>
            <div className="text-[#607B8B] text-sm sm:text-base lg:text-lg"><span className="font-bold text-[#1a1a1a]">Context:</span> System Design</div>
            <div className="text-[#607B8B] text-sm sm:text-base lg:text-lg"><span className="font-bold text-[#1a1a1a]">Duration:</span> February 2025 - March 2025</div>
          </div>
          {/* Project Overview section */}
          <div className="mt-8 sm:mt-12 lg:mt-16 mb-6 sm:mb-8 lg:mb-12">
            {/* PDF Viewer Button */}
            <div className="flex flex-col items-start mb-6 sm:mb-8">
              <p className="text-[#607B8B] text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">Click here to view the full System Design Project</p>
              <button
                onClick={() => setShowPdf(true)}
                className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg bg-[#0066FF] text-white rounded-lg hover:bg-blue-700 transition-colors mt-6"
              >
                View Project File
              </button>
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1a1a1a] mb-3 sm:mb-4">Project Overview</h2>
            <p className="text-[#607B8B] text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-4xl">
              This project was a collaborative effort between two team members aimed at redesigning a business system to improve efficiency and address specific operational challenges. My primary responsibilities focused on research, business analysis, and system security. While both of us contributed across all areas, we ensured clear communication and shared accountability to execute each component effectively. Our structured approach allowed us to deliver a solution that met the business objectives and addressed the core issues identified during the research phase.
            </p>
            <div className="space-y-4 sm:space-y-6 lg:space-y-8" ref={contribRef}>
              {progressData.map((item) => (
                <div key={item.label}>
                  <div className="mb-1 sm:mb-2 text-[#1a1a1a] text-sm sm:text-base lg:text-lg">{item.label}</div>
                  <div className="w-full h-2 sm:h-3 lg:h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-2 sm:h-3 lg:h-4 bg-violet-400 rounded-full transition-all duration-300 ease-out"
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
      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full mx-2 sm:mx-4">
            <button 
              className="absolute -top-8 sm:-top-10 right-0 text-white text-xl sm:text-2xl hover:text-gray-300"
              onClick={closeModal}
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Full size" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
      {showPdf && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4 overflow-auto"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full mx-2 sm:mx-4 bg-white rounded-lg p-2 sm:p-4 overflow-auto" style={{maxHeight: '90vh'}} onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-8 sm:-top-10 right-0 text-[#0066FF] text-xl sm:text-2xl hover:text-blue-400"
              onClick={closeModal}
            >
              ×
            </button>
            <iframe 
              src="/assets/systemDesign/systemDesign.pdf" 
              className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] rounded-lg bg-white" 
              style={{minHeight: '300px', maxHeight: '75vh'}}
              title="System Design PDF"
              allowFullScreen
            />
          </div>
        </div>
      )}
      <Contact />
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default SystemDesign; 