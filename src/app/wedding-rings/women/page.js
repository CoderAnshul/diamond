"use client";

import React, { useState } from 'react';
import FilterSection from '../FilterSection';
import Modal from '../Modal'; // Import the Modal component

const Women = () => {
  const [hoveredRing, setHoveredRing] = useState(null);
  const [selectedGender, setSelectedGender] = useState('WOMEN');
  const [selectedStyle, setSelectedStyle] = useState('CURVED');
  const [selectedMetals, setSelectedMetals] = useState(['PLATINUM']);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRing, setSelectedRing] = useState(null);
  
  const rings = [
    { name: "ASHTON", price: "STARTING 439 USD" },
    { name: "MOANA", price: "STARTING 1,096 USD" },
    { name: "KAITLYN", price: "STARTING 806 USD" },
    { name: "OCEA", price: "STARTING 757 USD" },
    { name: "JOANNA", price: "STARTING 877 USD" },
    { name: "LIANA", price: "STARTING 912 USD" },
    { name: "ALEXANDRA", price: "STARTING 1,958 USD" },
    { name: "LANA", price: "STARTING 1,633 USD" },
    { name: "ARIZONA", price: "STARTING 926 USD" },
    { name: "CHIARA", price: "STARTING 954 USD" }
  ];

  // Handle gender change
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    if (gender === 'WOMEN') {
      setSelectedStyle('CURVED');
      setSelectedMetals(['PLATINUM']);
    } else {
      setSelectedStyle('CLASSIC');
      setSelectedMetals(['PLATINUM']);
    }
  };

  // Handle style change
  const handleStyleChange = (styleId) => {
    setSelectedStyle(styleId);
  };

  // Handle metal selection
  const handleMetalSelect = (metalId) => {
    if (selectedGender === 'WOMEN') {
      setSelectedMetals([metalId]);
    } else {
      setSelectedMetals(prev => {
        if (prev.includes(metalId)) {
          return prev.filter(id => id !== metalId);
        } else {
          return [...prev, metalId];
        }
      });
    }
  };

  // Handle select all metals
  const handleSelectAllMetals = () => {
    const womenMetalTypes = ['PLATINUM', '18K_YELLOW_GOLD', '18K_ROSE_GOLD', '18K_WHITE_GOLD'];
    const menMetalTypes = ['PLATINUM', 'YELLOW_GOLD', 'ROSE_GOLD', 'WHITE_GOLD', 'TITANIUM', 'TANTALUM', 'CARBON_FIBRE'];
    const allMetalIds = selectedGender === 'WOMEN' ? womenMetalTypes : menMetalTypes;
    setSelectedMetals(allMetalIds);
  };

  // Handle reset metals
  const handleResetMetals = () => {
    setSelectedMetals([]);
  };

  // Handle ring click to open modal
  const handleRingClick = (ring, index) => {
    setSelectedRing({ ...ring, index });
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedRing(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.shopify.com/s/files/1/0644/3067/0060/files/Banner_-_Wedding_Ring_-_womens_-_desktop_2000x2000.jpg?v=1741931280"
            alt="Wedding rings"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-transparent"></div>
        
        <div className="relative z-10 flex items-center justify-center h-[400px] w-full">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">
              Wedding Rings for {selectedGender === 'WOMEN' ? 'Women' : 'Men'}
            </h1>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <FilterSection 
        selectedGender={selectedGender}
        selectedStyle={selectedStyle}
        selectedMetals={selectedMetals}
        onGenderChange={handleGenderChange}
        onStyleChange={handleStyleChange}
        onMetalSelect={handleMetalSelect}
        onSelectAllMetals={handleSelectAllMetals}
        onResetMetals={handleResetMetals}
      />

      {/* Product Section */}
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

        {/* Rings Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {rings.map((ring, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg cursor-pointer hover:shadow-md transition-shadow duration-200"
                onMouseEnter={() => setHoveredRing(index)}
                onMouseLeave={() => setHoveredRing(null)}
                onClick={() => handleRingClick(ring, index)}
              >
                <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center mb-4 relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 border-4 border-yellow-400 rounded-full bg-white/50"></div>
                  </div>
                  
                  {hoveredRing === index && (
                    <>
                      <button className="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                
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

          <div className="text-center">
            <button className="px-8 py-3 text-xs border bg-[#346441] text-white hover:bg-[#25462E] transition-colors duration-200 font-medium tracking-wide">
              LOAD MORE
            </button>
            
            <div className='max-w-2xl text-black opacity-75 mx-auto pt-16'>
              <div className='w-[120px] border-t-3 border-gray-900 mx-auto'></div>
              <p className='text-xs font-semibold text-center mb-3 pt-3'>
                Cullen Jewellery offers the perfect range of wedding bands to complement your engagement ring. Our team can guide you through choosing rings together and modern alternatives like stacking rings, along with classic options like sleek Gold Wedding Rings, alternative metal bands or eternity bands, ensuring you find the perfect symbol of your love and style.
              </p>
              <p className='text-xs font-semibold text-center'>
                Need help choosing your perfect engagement ring? Book a virtual or in-person appointment at our showroom to talk to one of our friendly engagement ring specialists.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        productData={selectedRing}
        closeOnOverlayClick={true}
      />
    </div>
  );
};

export default Women;