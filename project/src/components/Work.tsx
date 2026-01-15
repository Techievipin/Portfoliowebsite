import React from 'react';
import { Briefcase, Quote } from 'lucide-react';

const Work: React.FC = () => {
  const workExperiences: Array<{
    company: string;
    position: string;
    period: string;
    description: string;
    testimonials?: Array<{ quote: string; author: string; role: string }>;
  }> = [];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional experience and career highlights.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {workExperiences.length === 0 ? (
            <div className="bg-slate-50 rounded-xl p-12 text-center">
              <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Work Experience Section
              </h3>
              <p className="text-slate-600 leading-relaxed">
                This section is ready for your professional work experience entries.
                Each entry can include position details and client testimonials.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {workExperiences.map((work, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <Briefcase size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-1">
                        {work.position}
                      </h3>
                      <div className="text-lg text-blue-600 font-medium mb-2">
                        {work.company}
                      </div>
                      <div className="text-slate-500 mb-4">{work.period}</div>
                      <p className="text-slate-600 leading-relaxed">
                        {work.description}
                      </p>
                    </div>
                  </div>

                  {work.testimonials && work.testimonials.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                        <Quote className="w-5 h-5 mr-2 text-blue-600" />
                        Testimonials
                      </h4>
                      <div className="space-y-4">
                        {work.testimonials.map((testimonial, tIndex) => (
                          <div
                            key={tIndex}
                            className="bg-white rounded-lg p-6 border-l-4 border-blue-600"
                          >
                            <p className="text-slate-600 italic mb-3">
                              "{testimonial.quote}"
                            </p>
                            <div className="text-sm">
                              <div className="font-semibold text-slate-900">
                                {testimonial.author}
                              </div>
                              <div className="text-slate-500">
                                {testimonial.role}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
