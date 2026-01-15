import React from 'react';
import { MessageSquare, Lightbulb, Handshake, TrendingUp } from 'lucide-react';

const CallToAction: React.FC = () => {
  const options = [
    {
      icon: MessageSquare,
      title: 'Speaking Request',
      description: 'Book me for speaking engagements and presentations'
    },
    {
      icon: Lightbulb,
      title: 'Motivation Request',
      description: 'Motivational speaking and personal development'
    },
    {
      icon: Handshake,
      title: 'Partnering',
      description: 'Explore partnership and collaboration opportunities'
    },
    {
      icon: TrendingUp,
      title: 'Marketing',
      description: 'Marketing consultation and strategy services'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="border-4 border-blue-600 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-blue-50 to-white shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Additional Information
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Explore the ways we can work together to achieve your goals
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white border-2 border-slate-200 hover:border-blue-600 rounded-xl p-6 text-left transition-all duration-300 hover:shadow-lg transform hover:scale-105 group"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <option.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {option.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
