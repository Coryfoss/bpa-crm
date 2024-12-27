"use client";
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Filter, Users, ActivitySquare } from 'lucide-react';

export default function Home() {
  const mapRef = useRef(null);
  const neighborhoods = [
    { name: 'Phillips', position: { lat: 44.9483, lng: -93.2627 } },
    { name: 'Cedar-Riverside', position: { lat: 44.9697, lng: -93.2477 } },
    { name: 'North Minneapolis', position: { lat: 44.9997, lng: -93.2911 } },
    { name: 'Powderhorn', position: { lat: 44.9343, lng: -93.2477 } },
  ];

  useEffect(() => {
    if (typeof google === 'undefined') return;
    
    const minneapolis = { lat: 44.9778, lng: -93.2650 };
    
    const map = new google.maps.Map(mapRef.current, {
      zoom: 11,
      center: minneapolis,
    });

    // Add markers for each neighborhood
    neighborhoods.forEach(hood => {
      new google.maps.Marker({
        position: hood.position,
        map: map,
        title: hood.name
      });
    });
  }, []);

  return (
    <main className="p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">BPA Analytics Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stats Panel */}
          <div>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <h2 className="text-lg font-semibold mb-2">Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Total Registered</div>
                    <div className="text-xl font-bold">15,640</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <ActivitySquare className="w-5 h-5 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Active Voters</div>
                    <div className="text-xl font-bold">12,450</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="md:col-span-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <div ref={mapRef} style={{ height: '500px', width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}