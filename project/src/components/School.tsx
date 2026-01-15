import React from 'react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const School: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Human Ecology',
      minor: 'Communications',
      school: 'The Ohio State University',
      year: '1992-1996',
      gpa: '2.5/4.0',
      description: 'Returned to complete my college education, going straight through classes including summers to graduate early. Completed the degree in under three years by doubling up classes in the summer.',
      timeline: [
        'Winter 1992: Started journey back to Ohio State',
        'Beginning 1993: Started first set of classes',
        '1993-1996: Went straight through including summers',
        'Fall 1996: Graduated early'
      ]
    }
  ];

  const professionalDevelopment = [
    {
      title: 'Myers-Briggs Personality Testing',
      description: 'While working at Ameritech now AT&T I took part in testing. After leaving I continued my training in class and out of classrooms as well as one on one training.'
    },
    {
      title: 'Dale Carnegie Training',
      description: 'I have taken part in class and out of classrooms as well as one on one training.'
    },
    {
      title: 'Howard County Community College',
      description: 'Additional educational pursuits and professional development.'
    }
  ];
  return (
    <section id="school" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My educational journey back to The Ohio State University to complete my degree 
            and build a foundation for my professional career.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 mb-8"
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-lg text-blue-600 font-medium mb-1">
                    Minor in {edu.minor}
                  </div>
                  <div className="text-blue-600 font-medium mb-2">
                    {edu.school}
                  </div>
                  <div className="text-slate-500">
                    {edu.year} • GPA: {edu.gpa}
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {edu.description}
              </p>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">
                  Educational Timeline
                </h4>
                <div className="space-y-3">
                  {edu.timeline.map((item, timeIndex) => (
                    <div key={timeIndex} className="border-l-4 border-blue-600 pl-4">
                      <div className="text-slate-600">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Professional Development & Training
            </h3>
            
            <div className="space-y-6">
              {professionalDevelopment.map((item, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Academic Achievement
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Completing my degree in under three years while maintaining academic standards
              demonstrated my commitment to education and ability to manage intensive coursework.
              The combination of Human Ecology and Communications provided a well-rounded
              foundation for understanding both human behavior and effective communication.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mt-8">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-slate-900">
                Official Documents & Letters
              </h3>
            </div>
            <p className="text-slate-600 mb-6">
              Official transcripts, letters of recommendation, and academic documentation.
            </p>

            <div className="grid gap-4">
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center bg-slate-50">
                <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-500 font-medium">
                  Document Upload Area
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  Letters and documents can be added here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default School;