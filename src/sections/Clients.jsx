import { useState, useEffect } from 'react';
import { clientReviews } from '../constants/index.js';

const STAR_ICON = (
  <svg className="w-5 h-5 inline-block text-[#D9A7FF]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
  </svg>
);

const TRANSITION_DURATION = 400; // ms

const Clients = () => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const total = clientReviews.length;

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [current]);

  const handlePrev = () => {
    setDirection(-1);
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + total) % total);
      setTransitioning(false);
    }, TRANSITION_DURATION);
  };

  const handleNext = () => {
    setDirection(1);
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
      setTransitioning(false);
    }, TRANSITION_DURATION);
  };

  const item = clientReviews[current];

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">Voices of satisfaction<br />and success</h2>
        <p className="text-[#666] text-lg mb-4">We take pride in designing smarter solutions, building powerful systems, and delivering meaningful results.</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center max-w-2xl w-full transition-all duration-500">
          {/* Left arrow */}
          <button onClick={handlePrev} aria-label="Previous" className="absolute left-[-32px] top-1/2 -translate-y-1/2 bg-white border border-[#eee] rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-[#f0f0f0] transition-all z-10">
            <svg className="w-6 h-6 text-[#666]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          {/* Animated testimonial card */}
          <div
            className={`flex flex-col md:flex-row items-center w-full transition-all duration-[${TRANSITION_DURATION}ms] ease-in-out
              ${transitioning ? `opacity-0 translate-x-${direction === 1 ? '20' : '-20'}` : 'opacity-100 translate-x-0'}`}
            style={{
              opacity: transitioning ? 0 : 1,
              transform: transitioning
                ? `translateX(${direction === 1 ? 40 : -40}px)`
                : 'translateX(0)',
              transition: `opacity ${TRANSITION_DURATION}ms cubic-bezier(0.7,0,0.3,1), transform ${TRANSITION_DURATION}ms cubic-bezier(0.7,0,0.3,1)`
            }}
          >
            <img src={item.img} alt={item.name} className="w-40 h-48 object-cover rounded-xl mr-8 mb-4 md:mb-0" />
            <div className="flex-1 text-left">
              <p className="text-2xl text-[#1a1a1a] mb-6 font-light">{item.review}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#1a1a1a] text-lg">{item.name}</p>
                  <p className="text-[#999] text-sm">{item.position}</p>
                </div>
                <div className="flex gap-1">{Array(5).fill(0).map((_, i) => <span key={i}>{STAR_ICON}</span>)}</div>
              </div>
            </div>
          </div>
          {/* Right arrow */}
          <button onClick={handleNext} aria-label="Next" className="absolute right-[-32px] top-1/2 -translate-y-1/2 bg-white border border-[#eee] rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-[#f0f0f0] transition-all z-10">
            <svg className="w-6 h-6 text-[#666]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
