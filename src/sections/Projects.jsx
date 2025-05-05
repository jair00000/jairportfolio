import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { myProjects } from '../constants';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [bgColor, setBgColor] = useState('bg-white');
  const projectRefs = useRef([]);

  // Media queries for different device sizes
  const isSmallMobile = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            if (index === 0) {
              setBgColor('bg-[#1a1a1a]');
            } else if (index === 2) {
              setBgColor('bg-[#e6f2ff]');
            } else {
              setBgColor('bg-white');
            }
          } else if (!entry.isIntersecting && projectRefs.current.indexOf(entry.target) === 0) {
            setBgColor('bg-white');
          }
        });
      },
      { threshold: 0.5 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Function to get appropriate image height based on device size
  const getImageHeight = () => {
    if (isSmallMobile) return 'h-[300px]';
    if (isMobile) return 'h-[350px]';
    if (isTablet) return 'h-[500px]';
    return 'h-[600px]';
  };

  // Function to get appropriate text size based on device size
  const getTextSize = () => {
    if (isSmallMobile) return 'text-2xl';
    if (isMobile) return 'text-3xl';
    if (isTablet) return 'text-4xl';
    return 'text-5xl';
  };

  // Function to get appropriate padding based on device size
  const getSectionPadding = () => {
    if (isSmallMobile) return 'py-12';
    if (isMobile) return 'py-16';
    if (isTablet) return 'py-24';
    return 'py-32';
  };

  return (
    <section className={`relative ${bgColor} transition-colors duration-500 ${getSectionPadding()}`} id="projects">
      <div className="w-full max-w-none px-2 sm:px-4 md:px-6 lg:px-8 xl:max-w-[1400px] xl:mx-auto">
        {/* NHF Project */}
        <div 
          ref={(el) => (projectRefs.current[0] = el)}
          className={`flex flex-col ${isTablet ? 'md:flex-row' : 'lg:flex-row'} items-center justify-between gap-8 sm:gap-12 mb-20 sm:mb-32 lg:mb-40`}
        >
          {/* Left side images container */}
          <div className={`w-full ${isTablet ? 'md:w-1/2' : 'lg:w-1/2'} relative ${getImageHeight()}`}>
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
              {/* Back of stack */}
              <div className={`absolute inset-0 transform ${isSmallMobile ? 'translate-x-2 translate-y-2' : isMobile ? 'translate-x-4 translate-y-4' : 'translate-x-8 translate-y-8'} z-0`}>
                <img 
                  src="/assets/projects/webp3.png" 
                  alt="Project screenshot 3" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              {/* Middle of stack */}
              <div className={`absolute inset-0 transform ${isSmallMobile ? 'translate-x-1 translate-y-1' : isMobile ? 'translate-x-2 translate-y-2' : 'translate-x-4 translate-y-4'} z-10`}>
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

          {/* Right side content */}
          <div className={`w-full ${isTablet ? 'md:w-1/2' : 'lg:w-1/2'} mt-8 ${isTablet ? 'md:mt-0' : 'lg:mt-0'}`}>
            <div className={`mb-4 ${bgColor === 'bg-[#1a1a1a]' ? 'text-white' : 'text-[#1a1a1a]'}`}>
              <span className="text-gray-500 text-sm sm:text-base">01 / 03</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">NHF</h2>
            </div>
            <p className={`mb-6 sm:mb-8 text-base sm:text-lg md:text-xl ${bgColor === 'bg-[#1a1a1a]' ? 'text-gray-300' : 'text-gray-600'}`}>
              NHF is a non-profit organization dedicated to supporting children in need through generous donations and compassionate programs. This project website serves as a platform to raise awareness, encourage giving, and make a lasting impact in the lives of underprivileged children.
            </p>
            <Link to="/nhf" className={`inline-block ${isSmallMobile ? 'px-3 py-2' : 'px-4 sm:px-6 py-2 sm:py-3'} bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base`}>
              View case study
            </Link>
          </div>
        </div>

        {/* System Design Project */}
        <div 
          ref={(el) => (projectRefs.current[1] = el)}
          className={`flex flex-col ${isTablet ? 'md:flex-row' : 'lg:flex-row'} items-center justify-between gap-8 sm:gap-12 mb-20 sm:mb-32 lg:mb-40`}
        >
          {/* Left side content */}
          <div className={`w-full ${isTablet ? 'md:w-1/2' : 'lg:w-1/2'} order-2 ${isTablet ? 'md:order-1' : 'lg:order-1'}`}>
            <div className={`mb-4 ${bgColor === 'bg-[#1a1a1a]' ? 'text-white' : 'text-[#1a1a1a]'}`}>
              <span className="text-gray-500 text-sm sm:text-base">02 / 03</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">System Design</h2>
            </div>
            <p className={`mb-6 sm:mb-8 text-base sm:text-lg md:text-xl ${bgColor === 'bg-[#1a1a1a]' ? 'text-gray-300' : 'text-gray-600'}`}>
              This system design aims to modernize and streamline business operations through a fully integrated digital solution. It offers a platform for solving current problems, optimizing the effectiveness of operations, and facilitating well-informed decision-making processes. With structured processes, clear data flow, and a user-centered interface, the proposed system empowers the organization to operate more effectively and scale its services with ease.
            </p>
            <Link to="/system-design" className={`inline-block ${isSmallMobile ? 'px-3 py-2' : 'px-4 sm:px-6 py-2 sm:py-3'} bg-[#0066FF] text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base`}>
              View case study
            </Link>
          </div>

          {/* Right side images container */}
          <div className={`w-full ${isTablet ? 'md:w-1/2' : 'lg:w-1/2'} order-1 ${isTablet ? 'md:order-2' : 'lg:order-2'} mb-8 ${isTablet ? 'md:mb-0' : 'lg:mb-0'}`}>
            <div className={`grid ${isSmallMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-3 sm:gap-4`}>
              <div className="aspect-square cursor-pointer" onClick={() => openImageModal('/assets/projects/systemDesign1.png')}>
                <img 
                  src="/assets/projects/systemDesign1.png" 
                  alt="System Design 1"
                  className="w-full h-full object-contain rounded-lg shadow-[0_20px_50px_rgba(0,_102,_255,_0.3)] bg-white p-2 hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="aspect-square cursor-pointer" onClick={() => openImageModal('/assets/projects/systemDesign2.png')}>
                <img 
                  src="/assets/projects/systemDesign2.png" 
                  alt="System Design 2"
                  className="w-full h-full object-contain rounded-lg shadow-[0_20px_50px_rgba(0,_102,_255,_0.3)] bg-white p-2 hover:opacity-90 transition-opacity"
                />
              </div>
              <div className={`${isSmallMobile ? 'col-span-1' : 'col-span-2'} aspect-video cursor-pointer`} onClick={() => openImageModal('/assets/projects/systemDesign3.png')}>
                <img 
                  src="/assets/projects/systemDesign3.png" 
                  alt="System Design 3"
                  className="w-full h-full object-contain rounded-lg shadow-[0_20px_50px_rgba(0,_102,_255,_0.3)] bg-white p-2 hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Application Project */}
        <div 
          ref={(el) => (projectRefs.current[2] = el)}
          className={`flex flex-col ${isTablet ? 'md:flex-row' : 'lg:flex-row'} items-center justify-between gap-8 sm:gap-12`}
        >
          {/* Left side images container */}
          <div className={`w-full ${isTablet ? 'md:w-1/2' : 'lg:w-1/2'}`}>
            <div className={`grid ${isSmallMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-3 sm:gap-4`}>
              <div className="aspect-square cursor-pointer" onClick={() => openImageModal('/assets/projects/app1.jpg')}>
                <img 
                  src="/assets/projects/app1.jpg" 
                  alt="Mobile App 1"
                  className="w-full h-full object-contain rounded-lg shadow-lg bg-white p-2 hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="aspect-square cursor-pointer" onClick={() => openImageModal('/assets/projects/app2.jpg')}>
                <img 
                  src="/assets/projects/app2.jpg" 
                  alt="Mobile App 2"
                  className="w-full h-full object-contain rounded-lg shadow-lg bg-white p-2 hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="aspect-square cursor-pointer" onClick={() => openImageModal('/assets/projects/app3.jpg')}>
                <img 
                  src="/assets/projects/app3.jpg" 
                  alt="Mobile App 3"
                  className="w-full h-full object-contain rounded-lg shadow-lg bg-white p-2 hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="aspect-square cursor-pointer" onClick={() => openImageModal('/assets/projects/app4.jpg')}>
                <img 
                  src="/assets/projects/app4.jpg" 
                  alt="Mobile App 4"
                  className="w-full h-full object-contain rounded-lg shadow-lg bg-white p-2 hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className={`w-full ${isTablet ? 'md:w-1/2' : 'lg:w-1/2'} mt-8 ${isTablet ? 'md:mt-0' : 'lg:mt-0'}`}>
            <div className={`mb-4 ${bgColor === 'bg-[#1a1a1a]' ? 'text-white' : 'text-[#1a1a1a]'}`}>
              <span className="text-gray-500 text-sm sm:text-base">03 / 03</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">Mobile Application</h2>
            </div>
            <p className={`mb-6 sm:mb-8 text-base sm:text-lg md:text-xl ${bgColor === 'bg-[#1a1a1a]' ? 'text-gray-300' : 'text-gray-600'}`}>
              A mobile application model demonstrates a fully conceptualized hotel booking platform designed to deliver a seamless user experience. The model showcases core functionalities including a login system with secure database integration, an intuitive booking system, and a user-friendly mobile UI/UX design. Highlighting my capability in designing and building scalable mobile solutions tailored for hospitality services and user convenience.
            </p>
            <Link to="/mobile-app" className={`inline-block ${isSmallMobile ? 'px-3 py-2' : 'px-4 sm:px-6 py-2 sm:py-3'} bg-[#4CAF50] text-white rounded-lg hover:bg-[#45a049] transition-colors text-sm sm:text-base`}>
              View case study
            </Link>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={closeImageModal}
          >
            <div className="relative w-[95vw] max-w-4xl">
              <button 
                className={`absolute ${isSmallMobile ? '-top-6' : '-top-8 sm:-top-10'} right-0 text-white hover:text-gray-300`}
                onClick={closeImageModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`${isSmallMobile ? 'h-5 w-5' : 'h-6 w-6 sm:h-8 sm:w-8'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
