"use client";

import React, { useState } from 'react';
import { Info, Check } from 'lucide-react';

const Cart = () => {
  const [orderNote, setOrderNote] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const cartItems = [
    {
      id: 'ingrid-ring',
      name: 'INGRID – FULL PAVÉ WEDDING RING',
      image: '💍',
      details: {
        bandWidth: '1.8mm',
        meleStones: 'Moissanite',
        metalType: '18k Yellow Gold',
        size: 'F 1/2'
      },
      price: 990.00
    },
    {
      id: 'joanna-ring',
      name: 'JOANNA – TWO THIRD PAVÉ WEDDING RING',
      image: '💎',
      details: {
        bandWidth: '1.8mm',
        meleStones: 'Moissanite',
        metalType: 'Platinum',
        size: 'M 1/2'
      },
      price: 1018.00
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const estimatedDate = 'AUGUST 13, 2025';

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6 bg-white">
      <h1 className="text-2xl md:text-3xl lg:text-5xl mb-8 lg:mb-20 text-gray-800 font-arizona text-center">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="mb-6 lg:mb-8 pb-6 border-b border-gray-200 last:border-b-0">
              {/* Mobile Layout */}
              <div className="block md:hidden">
                {/* Product Image - Centered */}
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center text-3xl">
                    {item.image}
                  </div>
                </div>
                
                {/* Product Name - Centered */}
                <h2 className="text-base font-medium text-gray-800 mb-3 tracking-wide font-gintoNord text-start leading-tight">
                  {item.name}
                </h2>
                
                {/* Product Details - Compact */}
                <div className="space-y-1 mb-4 text-start">
                  <div className="text-sm text-gray-800">
                    <span className="font-semibold text-gray-600">Band Width:</span> {item.details.bandWidth}
                  </div>
                  <div className="text-sm text-gray-800">
                    <span className="font-semibold text-gray-600">Melee Stones:</span> {item.details.meleStones}
                  </div>
                  <div className="text-sm text-gray-800">
                    <span className="font-semibold text-gray-600">Metal Type:</span> {item.details.metalType}
                  </div>
                  <div className="text-sm text-gray-800">
                    <span className="font-semibold text-gray-600">Size:</span> {item.details.size}
                  </div>
                </div>
                
                {/* Price and Actions Row */}
                <div className="flex justify-between items-center">
                  <div className="text-lg font-medium text-gray-800">
                    {item.price.toFixed(2)} USD
                  </div>
                  <div className="flex gap-4">
                    <button className="text-gray-600 hover:underline hover:decoration-green-500 hover:decoration-2 text-xs">
                      Edit
                    </button>
                    <button className="text-gray-600 hover:underline hover:decoration-green-500 hover:decoration-2 text-xs">
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block">
                <h2 className="text-lg font-medium text-gray-800 mb-4 tracking-wide font-gintoNord">
                  {item.name}
                </h2>
                
                <div className="flex items-start gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center text-2xl flex-shrink-0">
                    {item.image}
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="grid grid-cols-1 text-sm mb-3">
                      <div>
                        <span className="text-gray-600 font-semibold text-xs">Band Width:</span>
                        <span className="ml-1 text-gray-800 text-xs">{item.details.bandWidth}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 font-semibold text-xs">Mele Stones:</span>
                        <span className="ml-1 text-gray-800 text-xs">{item.details.meleStones}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 font-semibold text-xs">Metal Type:</span>
                        <span className="ml-1 text-gray-800 text-xs">{item.details.metalType}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 font-semibold text-xs">Size:</span>
                        <span className="ml-1 text-gray-800 text-xs">{item.details.size}</span>
                      </div>
                    </div>
                    
                    <div className="text-lg font-medium text-gray-800">
                      {item.price.toFixed(2)} USD
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="text-gray-600 hover:text-gray-800 hover:decoration-green-500 hover:decoration-2 text-sm underline">
                      Edit
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 hover:decoration-green-500 hover:decoration-2 text-sm underline">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout Section */}
        <div className="lg:col-span-1 bg-[#FEFAF5] p-4 lg:p-6 rounded-lg shadow-sm">
          <div className="lg:sticky lg:top-6">
            {/* Order Note */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Order note <span className="text-gray-500">(Optional)</span>
              </label>
              <textarea
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-sm resize-none h-20 lg:h-24"
                placeholder="Add special instructions..."
              />
            </div>

            {/* Estimated Completion Date */}
            <div className="mb-6 p-3 bg-gray-50 rounded-md">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📅</span>
                </div>
                <span className="text-xs font-semibold text-gray-700 tracking-wide">
                  ESTIMATED COMPLETION DATE:
                </span>
                <span className="text-xs font-medium text-gray-800">
                  {estimatedDate}
                </span>
                <Info className="w-3 h-3 text-gray-400 flex-shrink-0" />
              </div>
              <p className="text-xs text-gray-600 italic">
                The above date does not include shipping.
              </p>
            </div>

            {/* Terms Checkbox */}
            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 flex-shrink-0"
                />
                <span className="text-xs text-gray-700 leading-relaxed">
                  I agree to the order{' '}
                  <a href="#" className="text-gray-800 underline">Terms of Sale</a>,{' '}
                  <a href="#" className="text-gray-800 underline">Returns Policy</a> &{' '}
                  <a href="#" className="text-gray-800 underline">Shipping Terms</a>.
                </span>
              </label>
            </div>

            {/* Checkout Button */}
            <button
              disabled={!agreedToTerms}
              className={`w-full py-3 lg:py-4 rounded-md font-medium text-sm tracking-wide transition-colors mb-4 ${
                agreedToTerms
                  ? 'bg-green-100 text-gray-800 hover:bg-green-200'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              🔒 CHECKOUT | {subtotal.toFixed(2)} USD
            </button>

            {/* Tax Notice */}
            <p className="text-xs text-gray-500 italic text-center mb-6">
              THE ABOVE PRICE IS INCLUSIVE OF DUTIES AND TAXES. 
              <Info className="w-3 h-3 inline ml-1" />
            </p>

            {/* Features */}
            <div className="flex justify-center gap-4 lg:gap-8 mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Discreet Packaging</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Insured Shipping</span>
              </div>
            </div>

            {/* Security Notice */}
            <p className="text-xs text-gray-600 text-center mb-4">
              All payments are 256-bit SSL secure and encrypted.
            </p>

            {/* Payment Methods */}
            <div className="flex justify-center flex-wrap gap-2">
              <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                AMEX
              </div>
              <div className="w-10 h-6 bg-black rounded text-white text-xs flex items-center justify-center">
                🍎
              </div>
              <div className="w-10 h-6 bg-green-100 rounded border text-xs flex items-center justify-center">
                💳
              </div>
              <div className="w-10 h-6 bg-white rounded border text-xs flex items-center justify-center">
                G
              </div>
              <div className="w-10 h-6 bg-orange-500 rounded text-white text-xs flex items-center justify-center">
                K
              </div>
              <div className="w-10 h-6 bg-red-500 rounded text-white text-xs flex items-center justify-center">
                ●●
              </div>
              <div className="w-10 h-6 bg-blue-800 rounded text-white text-xs flex items-center justify-center">
                PP
              </div>
              <div className="w-10 h-6 bg-purple-600 rounded text-white text-xs flex items-center justify-center">
                S
              </div>
              <div className="w-10 h-6 bg-blue-700 rounded text-white text-xs flex items-center justify-center">
                V
              </div>
              <div className="w-10 h-6 bg-black rounded text-white text-xs flex items-center justify-center">
                Z
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;