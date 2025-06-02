"use client";

import Image from 'next/image';
import React, { useState } from 'react'

const Chains = () => {
  const [hoveredRing, setHoveredRing] = useState(null);
  const rings = [
    { name: "ASHTON", price: "STARTING 950 USD" },
    { name: "MOANA", price: "STARTING 1,096 USD" },
    { name: "ANGELINA", price: "STARTING 1,788 USD" },
    { name: "GIGI", price: "STARTING 1,788 USD" },
    { name: "OCEA", price: "STARTING 757 USD" },
    { name: "SOPHIA", price: "STARTING 1,200 USD" },
    { name: "LUNA", price: "STARTING 890 USD" },
    { name: "ARIA", price: "STARTING 1,450 USD" },
    { name: "NOVA", price: "STARTING 2,100 USD" },
    { name: "MAYA", price: "STARTING 1,680 USD" }
  ];

  return (
    <div>
      <div className="relative h-[400px] w-full">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://cdn.shopify.com/s/files/1/0644/3067/0060/files/Chains_Banner_1400x1400.jpg?v=1748392868"
            alt="Woman showing rings"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-transparent"></div>
        
        {/* Text overlay */}
        <div className="relative z-10 flex items-center justify-center h-[400px] w-full ">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-light">
              Women's Chains
            </h1>
            <p className="text-sm md:text-sm max-w-xl lg:text-sm font-normal">
              Our stylish fashion chains are a stunning addition to any outfit. Exquisitely crafted with meticulous attention to detail, our fashion chains are the perfect gift for any special occasion.
            </p>
          </div>
        </div>
      </div>

      {/* Header section with sort */}
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex justify-end items-center gap-4">
            <span className="text-sm text-gray-600">Sort:</span>
            <select className="text-sm border border-gray-300 rounded px-3 py-1">
              <option>Recommended</option>
            </select>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm text-gray-600">Show lifestyle photos</span>
            </div>
          </div>
        </div>

        {/* Rings grid - 5 in a row */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {rings.map((ring, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg cursor-pointer hover:shadow-md transition-shadow duration-200"
                onMouseEnter={() => setHoveredRing(index)}
                onMouseLeave={() => setHoveredRing(null)}
              >
                {/* Ring image placeholder */}
                <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center mb-4 relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 border-4 border-yellow-400 rounded-full bg-white/50"></div>
                  </div>
                  
                  {/* Navigation arrows - only show on hover */}
                  {hoveredRing === index && (
                    <>
                      {/* Left arrow */}
                      <button className="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      {/* Right arrow */}
                      <button className="absolute  cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        </button>
                    </>
                  )}
                </div>
                
                {/* Ring details */}
                <div className="p-4 text-center">
                  <h3 className="font-medium text-gray-800 mb-2 tracking-wide">
                    {ring.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-light">
                    {ring.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More button */}
          <div className="text-center">
            <button className=" px-8 py-3 border text-xs bg-[#3d704b] text-white hover:bg-[#25462E] cursor-pointer transition-colors duration-200 font-medium tracking-wide">
              LOAD MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chains