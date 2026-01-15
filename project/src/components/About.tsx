import React from 'react';
import { Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/54597429803_f7a4c1a6f6_c.jpg"
              alt="Mark Anthony Coltrin"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-lg text-slate-600 leading-relaxed">
              Thanks for stopping by today. You have reached my personal web site also known as my portfolio.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              My name is Mark Anthony Coltrin and for well over 26 years I have worked and lived in the DMV.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Starting off first in Takoma Park way back in 1998 and then Silver Spring in 2000. Shortly after that I lived and worked on Capitol Hill then moved to Old Town Alexandria VA.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Then soon after meeting my partner Allison in 2002 we moved to the Columbia Maryland area and I have been in this area since.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Columbia MD. is a great place to live and work.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Thanks for stopping by.
            </p>
            
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-3 lg:col-span-2">
            <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                <Award size={24} />
              </div>
              <div className="text-lg font-bold text-slate-900 mb-1">
                Marine Corps Qualification Badge
              </div>
              <div className="text-sm text-slate-600">Rifle Marksman</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                <Award size={24} />
              </div>
              <div className="text-lg font-bold text-slate-900 mb-1">
                USMC Overseas Service
              </div>
              <div className="text-sm text-slate-600">Japan and Korea</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;