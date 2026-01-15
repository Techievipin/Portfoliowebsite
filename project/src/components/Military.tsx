import React from 'react';
import { Shield, Star, MapPin, Calendar, Users, Target } from 'lucide-react';

const Military: React.FC = () => {
  const service = {
    branch: 'United States Marine Corps',
    enlistment: 'Spring 1981 - Delayed Entry Program',
    bootcamp: 'Summer 1982 - Parris Island',
    service: '4 years active duty, 2 years reserves',
    discharge: 'Summer 1986 - Honorable Discharge',
    years: '1982-1986'
  };

  const awards = [
    'Good Conduct Medal',
    'National Defense Service Medal',
    'Marine Corps Service Ribbon',
    'Rifle Sharpshooter Badge'
  ];

  const skills = [
    {
      category: 'Leadership',
      items: ['Team Management', 'Decision Making', 'Mentoring', 'Strategic Planning']
    },
    {
      category: 'Technical',
      items: ['Equipment Maintenance', 'Safety Protocols', 'Training Development', 'Quality Control']
    }
  ];

  return (
    <section id="military" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Military Service
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Military service information will be updated with new content and photos.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-xl p-12 max-w-2xl mx-auto shadow-lg">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Content Under Development
            </h3>
            <p className="text-slate-600 leading-relaxed">
              This section will be updated with comprehensive military service information, 
              photos, and discharge documentation. Please check back soon for the complete story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Military;