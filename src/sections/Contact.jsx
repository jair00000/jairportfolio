import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_27982ls';
const TEMPLATE_ID = 'template_hyxlglb';
const PUBLIC_KEY = 'TbxJqQQ11RIq35rtX';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('Failed to send message. Please try again.');
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative bg-white py-20">
      {/* Right side light blue background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50" />
      
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6">Let's Connect</h2>
            <p className="text-[#666666] mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you'd like to make an appointment or schedule a project meeting, I'll respond promptly, typically within 24 hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:jairrivera972@gmail.com" className="text-[#666666] hover:text-[#0066FF] transition-colors">
                  jairrivera972@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+639399551036" className="text-[#666666] hover:text-[#0066FF] transition-colors">
                  (+63) 939 955 1036
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#666666]">Mabalacat City, Pampanga Philippines</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 border border-[#0066FF]/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#0066FF]/20 focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#0066FF]/20 focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#0066FF]/20 focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] outline-none transition-colors"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#0066FF] text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
                disabled={status === 'Sending...'}
              >
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <div className={`mt-2 text-center text-sm ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{status}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
