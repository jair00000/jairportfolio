const Footer = () => {
  return (
    <footer className="relative bg-white py-12 border-t border-[#0066FF]/10">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#666666]">© 2024 Jeriel Jair. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-[#0066FF] transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-[#0066FF] transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-[#0066FF] transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
