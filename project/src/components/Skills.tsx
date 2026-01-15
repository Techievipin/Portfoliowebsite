import React from 'react';
import { Briefcase } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional skills and expertise will be added here.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-12 text-center shadow-lg">
            <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Skills Content Coming Soon
            </h3>
            <p className="text-slate-600 leading-relaxed">
              This section is ready for your professional skills, technical expertise,
              and key competencies to be added.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
