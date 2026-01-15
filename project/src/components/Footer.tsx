import React from 'react';
import { Heart, User } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="text-lg">Made with</span>
              <Heart className="text-red-500 mx-2" size={20} fill="currentColor" />
              <span className="text-lg">by Mark Coltrin</span>
            </div>
            <p className="text-slate-400">
              © {new Date().getFullYear()} Mark Anthony Coltrin. All rights reserved.
            </p>
            </>
          </div>
          
          <div className="text-center md:text-right">
            <div className="bg-slate-800 rounded-lg p-4 inline-block">
              <div className="flex items-center justify-center md:justify-end mb-2">
                <User className="text-blue-400 mr-2" size={16} />
                <span className="text-sm font-medium text-slate-300">Website Developer</span>
              </div>
              <div className="text-sm text-slate-400">
                <div>Claude Sonnet 4 AI Assistant</div>
                <div>Powered by StackBlitz Bolt</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;