import React from 'react';
import { MapPin, Map } from 'lucide-react';

const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Location
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Based in Columbia, Maryland
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center relative">
              <div className="text-center">
                <Map className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Interactive Map
                </h3>
                <p className="text-slate-600 max-w-md mx-auto px-4">
                  Map component ready for integration with Google Maps, Mapbox, or other mapping services
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-slate-200">
              <div className="flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-slate-900 font-medium">
                  Columbia, Maryland
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
