import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Mail, Instagram, Youtube } from 'lucide-react';

const Hero: React.FC = () => {
  const headshots = [
    '/54597429803_f7a4c1a6f6_c.jpg',
  ];

  const [currentHeadshotIndex, setCurrentHeadshotIndex] = useState(0);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextHeadshot = () => {
    setCurrentHeadshotIndex((prev) => (prev + 1) % headshots.length);
  };

  const prevHeadshot = () => {
    setCurrentHeadshotIndex((prev) => (prev - 1 + headshots.length) % headshots.length);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(/54597438163_12d6fd1b43_k.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12">
            Mark Anthony Coltrin
          </h1>

          <div className="mb-12 relative inline-block">
            <img
              src={headshots[currentHeadshotIndex]}
              alt="Mark Anthony Coltrin"
              className="w-48 h-48 rounded-full mx-auto shadow-2xl border-4 border-white/20 transition-all duration-300"
            />
            {headshots.length > 1 && (
              <>
                <button
                  onClick={prevHeadshot}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextHeadshot}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
                  aria-label="Next photo"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="mailto:Socialmedia@markcoltrin.com"
              className="text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-300"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://bsky.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-300"
              title="Bluesky"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 2.104.139 3.309.139 5.424.139 6.578c0 .374.023.744.069 1.107C.673 11.846 3.102 15.8 12 15.8s11.327-3.954 11.792-8.115c.046-.363.069-.733.069-1.107 0-1.154 0-3.269-.763-4.474C22.439 1.266 21.434.944 18.798 2.805 16.046 4.747 13.087 8.686 12 10.8z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-300"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;