import React from 'react';

const StackIcon = ({ name }) => {
  const getIconUrl = (name) => {
    const iconMap = {
      'python': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      'c++': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
      'ruby': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg',
      'rails': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg',
      'php': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
      'java': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      'kotlin': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg',
      'nodejs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
      'figma': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
      'flutter': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg',
      'html5': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      'css3': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      'tailwindcss': 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
      'js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      'reactjs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      'vitejs': 'https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg',
      'threejs': 'https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png',
      'xampp': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg',
      'git': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
      'github': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
      'rust': 'https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg',
      'solidity': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg',
      'json': 'https://www.vectorlogo.zone/logos/json/json-icon.svg',
      'supabase': 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg'
    };
    
    return iconMap[name.toLowerCase()];
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow w-[120px] h-[120px]">
      <img 
        src={getIconUrl(name)}
        alt={name}
        className="w-12 h-12 object-contain"
      />
      <span className="mt-2 text-sm text-[#64748B] capitalize">
        {name}
      </span>
    </div>
  );
};

export default StackIcon; 